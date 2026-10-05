import { __ } from '@wordpress/i18n';
import { relabel } from './labels.mjs';

/** Translate a replacement label. Literal calls keep the strings visible to translation tooling. */
function translate(text) {
  switch (text) {
    case 'Curriculum':
      return __('Curriculum', 'ohmylms');
    case 'Curriculum: ':
      return __('Curriculum: ', 'ohmylms');
    case 'Show the curriculum as tabs.':
      return __('Show the curriculum as tabs.', 'ohmylms');
    case 'Learning tracks':
      return __('Learning tracks', 'ohmylms');
    case 'Learning track':
      return __('Learning track', 'ohmylms');
    case 'Learning track: ':
      return __('Learning track: ', 'ohmylms');
    default:
      return text;
  }
}

/**
 * Show "Curriculum" and "Learning tracks" wherever the recovered admin app still says category or tag.
 * `wp.hooks` is read from the global, not imported, because wp-i18n already loads it first and the SDK
 * must keep working (without relabeling) on pages that provide only part of `wp`.
 */
export function registerCurriculumLabels() {
  const hooks = typeof window !== 'undefined' && window.wp && window.wp.hooks;
  if (!hooks || typeof hooks.addFilter !== 'function') return;
  hooks.addFilter('i18n.gettext_ohmylms', 'ohmylms/curriculum-labels', (translation, text) =>
    relabel(translation, text, translate),
  );
}
