import test from 'node:test';
import assert from 'node:assert/strict';
import { createAutosave } from '../../assets/src/features/content-hub/autosave.mjs';

/** A scheduler the test controls, and saves that finish when the test says so. */
function harness({ failFirst = 0 } = {}) {
  const timers = new Map();
  let nextTimer = 1;
  const log = [];
  const statuses = [];
  const gates = [];
  let state = 0;
  let failures = failFirst;
  const saver = createAutosave({
    delay: 700,
    schedule: (fn) => { const id = nextTimer++; timers.set(id, fn); return id; },
    cancel: (id) => timers.delete(id),
    onStatus: (status) => statuses.push(status),
    save: () => new Promise((resolve, reject) => {
      const sent = state;
      log.push(`start ${sent}`);
      gates.push(() => {
        if (failures > 0) { failures--; log.push(`fail ${sent}`); reject(new Error('offline')); }
        else { log.push(`done ${sent}`); resolve(); }
      });
    }),
  });
  return {
    saver, log, statuses, gates,
    edit: () => { state++; saver.markDirty(); },
    fire: () => { const [id, fn] = [...timers][0]; timers.delete(id); fn(); },
    timers: () => timers.size,
    finish: async () => { gates.shift()(); await Promise.resolve(); await Promise.resolve(); },
  };
}
const tick = () => new Promise((resolve) => setImmediate(resolve));

test('Rapid edits wait for the delay and are saved once, with the latest state', async () => {
  const h = harness();
  h.edit(); h.edit(); h.edit();
  assert.equal(h.timers(), 1, 'each edit reschedules the same pending save');
  assert.deepEqual(h.log, []);
  h.fire();
  assert.deepEqual(h.log, ['start 3']);
  await h.finish(); await tick();
  assert.deepEqual(h.log, ['start 3', 'done 3']);
  assert.deepEqual(h.statuses.at(-1), 'saved');
  assert.equal(h.saver.isDirty(), false);
});

test('An edit during a save causes one more save afterwards and saves never overlap', async () => {
  const h = harness();
  h.edit(); h.fire();
  assert.deepEqual(h.log, ['start 1']);
  h.edit(); // while the first save is still running
  h.fire(); // its timer fires, but the running save is not interrupted
  assert.deepEqual(h.log, ['start 1'], 'no second request while one is in flight');
  await h.finish(); await tick();
  assert.deepEqual(h.log, ['start 1', 'done 1', 'start 2'], 'the later state is sent next');
  await h.finish(); await tick();
  assert.deepEqual(h.log, ['start 1', 'done 1', 'start 2', 'done 2']);
  assert.equal(h.statuses.at(-1), 'saved');
});

test('flush saves immediately, and returns at once when nothing is waiting', async () => {
  const h = harness();
  assert.equal(await h.saver.flush(), true);
  assert.deepEqual(h.log, []);
  h.edit();
  const flushed = h.saver.flush();
  assert.equal(h.timers(), 0, 'flushing cancels the pending timer');
  assert.deepEqual(h.log, ['start 1']);
  await h.finish();
  assert.equal(await flushed, true);
  assert.equal(await h.saver.flush(), true);
});

test('A failed save keeps the edits dirty and a retry sends them again', async () => {
  const h = harness({ failFirst: 1 });
  h.edit();
  const first = h.saver.flush();
  await h.finish();
  assert.equal(await first, false);
  assert.equal(h.saver.isDirty(), true);
  assert.equal(h.statuses.at(-1), 'error');
  const retry = h.saver.flush();
  await h.finish();
  assert.equal(await retry, true);
  assert.deepEqual(h.log, ['start 1', 'fail 1', 'start 1', 'done 1']);
  assert.equal(h.saver.isDirty(), false);
});

test('Callers waiting on a running save share its result', async () => {
  const h = harness();
  h.edit();
  const a = h.saver.flush();
  const b = h.saver.flush();
  assert.equal(a, b, 'the same promise is returned while saving');
  assert.equal(h.saver.isSaving(), true);
  await h.finish();
  assert.deepEqual([await a, await b], [true, true]);
  assert.equal(h.saver.isSaving(), false);
});

test('Reset forgets unsaved state when another course opens', async () => {
  const h = harness();
  h.edit();
  h.saver.reset();
  assert.equal(h.timers(), 0);
  assert.equal(h.saver.isDirty(), false);
  assert.equal(await h.saver.flush(), true);
  assert.deepEqual(h.log, []);
});
