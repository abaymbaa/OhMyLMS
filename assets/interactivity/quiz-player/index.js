import { store, getContext, getElement, withSyncEvent, withScope } from '@wordpress/interactivity';
import { isAnswered, emit } from 'ohmylms/interactivity';
import { createQuizPlayer } from './player.js';
const { actions } = store(
  'ohmylms/quiz',
  createQuizPlayer({
    getContext,
    getElement,
    withSyncEvent,
    withScope,
    isAnswered,
    emit,
    expire: () => actions.expire(),
  }),
);
