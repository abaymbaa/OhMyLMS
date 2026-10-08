import { store, getContext, getElement, withSyncEvent } from '@wordpress/interactivity';
import { emit, registerQuestionMount } from 'ohmylms/interactivity';

import { createQuestionControls } from './questionControls.js';

const controllers = new WeakMap();
store('ohmylms/questions', {
  actions: Object.fromEntries(
    ['select', 'dragstart', 'dragend', 'dragover', 'drop', 'place', 'key'].map((name) => [
      name,
      withSyncEvent((event) => {
        event.stopPropagation();
        const root = getElement().ref.closest('[data-wp-interactive="ohmylms/questions"]');
        if (!controllers.has(root))
          controllers.set(root, createQuestionControls(root, getContext()));
        controllers.get(root)[name](event);
      }),
    ]),
  ),
});

/** Fetched HTML is inside data-wp-ignore; initialize only this isolated renderer region. */
function mountDynamic(container) {
  const root = container.querySelector('.quiz-reorder-options,.quiz-matching-options');
  if (!root) return () => {};
  const controller = createQuestionControls(root, { selectedId: '' });
  const listeners = {
    dragstart: 'dragstart',
    dragend: 'dragend',
    dragover: 'dragover',
    drop: 'drop',
    keydown: 'key',
    click: 'select',
  };
  const registered = [];
  for (const [event, action] of Object.entries(listeners)) {
    const listener = (eventObject) => {
      if (event === 'click' && eventObject.target.closest('.option-drop-box'))
        controller.place(eventObject);
      else controller[action](eventObject);
    };
    root.addEventListener(event, listener);
    registered.push([event, listener]);
  }
  return () => registered.forEach(([event, listener]) => root.removeEventListener(event, listener));
}
registerQuestionMount('matching', mountDynamic);
registerQuestionMount('reorder', mountDynamic);
