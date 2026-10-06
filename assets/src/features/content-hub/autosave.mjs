/**
 * Debounced, serialized autosave. `markDirty()` schedules a save; `flush()` saves now. Saves never overlap:
 * an edit made while a save is running triggers one more save afterwards, and `save()` is asked for the
 * latest state each time, so rapid edits can never overwrite each other with older data.
 *
 * `save()` resolves when the state it read has been stored, and throws if it could not be. A failed save
 * leaves the state dirty, so `flush()` (a retry) sends it again.
 */
export function createAutosave({
  save,
  delay = 700,
  onStatus = () => {},
  schedule = setTimeout,
  cancel = clearTimeout,
}) {
  let dirty = false;
  let running = null;
  let timer = null;

  function flush() {
    if (timer !== null) {
      cancel(timer);
      timer = null;
    }
    if (running) return running;
    if (!dirty) return Promise.resolve(true);
    running = (async () => {
      let ok = true;
      while (dirty) {
        dirty = false;
        onStatus('saving');
        try {
          await save();
        } catch (error) {
          dirty = true;
          ok = false;
          onStatus('error', error);
          break;
        }
      }
      if (ok) onStatus('saved');
      running = null;
      return ok;
    })();
    return running;
  }

  return {
    markDirty() {
      dirty = true;
      onStatus('dirty');
      if (timer !== null) cancel(timer);
      timer = schedule(() => {
        timer = null;
        flush();
      }, delay);
    },
    flush,
    /** Forget unsaved state, e.g. when another course is opened. */
    reset() {
      if (timer !== null) cancel(timer);
      timer = null;
      dirty = false;
    },
    isDirty: () => dirty,
    isSaving: () => running !== null,
  };
}
