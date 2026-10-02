import { store, getContext } from '@wordpress/interactivity';

store('ohmylms/reveal', {
  actions: {
    toggle() {
      const context = getContext();
      context.open = !context.open;
    },
  },
});
