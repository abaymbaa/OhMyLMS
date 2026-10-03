<?php
namespace OhMyLMS\Design;

defined('ABSPATH') || exit;

/**
 * Design tokens: one place that turns the Design settings into CSS custom properties.
 *
 * Learner pages get --ohmylms-* variables (colors, derived shades, font). The admin app gets the
 * same brand variables plus the WordPress components and Arco tokens it is built on, so native
 * screens and SDK pages follow the chosen colors and font. Stylesheets read the variables;
 * nothing else should hard-code brand colors or fonts.
 */
final class Tokens {
    /** Google Fonts with Cyrillic (Mongolian) coverage. */
    const FONTS = ['Inter', 'Roboto', 'Open Sans', 'Noto Sans', 'Montserrat', 'Nunito', 'PT Sans', 'Fira Sans', 'Rubik'];
    const SYSTEM_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

    /** Defaults, also used by the settings screen. */
    const DEFAULTS = [
        'ohmylms_primary_color_scheme' => '#6e42d3',
        'ohmylms_heading_color_scheme' => '#000d25',
        'ohmylms_body_text_color_scheme' => '#52525b',
        'ohmylms_body_progress_color_scheme' => '#35bd4c',
        'ohmylms_font_family' => 'inherit',
        'ohmylms_admin_primary_color' => '#6e42d3',
        'ohmylms_admin_heading_color' => '#000d25',
        'ohmylms_admin_muted_color' => '#7a8b9a',
        'ohmylms_admin_font_family' => 'system',
    ];

    public static function init() {
        add_action('wp_enqueue_scripts', [__CLASS__, 'enqueue_frontend_font'], 5);
        add_action('admin_enqueue_scripts', [__CLASS__, 'enqueue_admin'], 20);
    }

    /** A saved hex color, or the default. */
    public static function color($option) {
        $value = get_option($option, '');
        $value = is_string($value) ? strtolower(trim($value)) : '';
        if (preg_match('/^#([0-9a-f]{3})$/', $value, $short)) {
            $value = '#' . $short[1][0] . $short[1][0] . $short[1][1] . $short[1][1] . $short[1][2] . $short[1][2];
        }
        return preg_match('/^#[0-9a-f]{6}$/', $value) ? $value : self::DEFAULTS[$option];
    }

    /** A saved font choice: one of FONTS, 'system' or (learner site only) 'inherit'. */
    public static function font($option) {
        $value = get_option($option, '');
        $allowed = array_merge(self::FONTS, ['system'], $option === 'ohmylms_font_family' ? ['inherit'] : []);
        return is_string($value) && in_array($value, $allowed, true) ? $value : self::DEFAULTS[$option];
    }

    /** "r, g, b" for rgba() use. */
    public static function rgb($hex) {
        return implode(', ', self::channels($hex));
    }

    private static function channels($hex) {
        return [hexdec(substr($hex, 1, 2)), hexdec(substr($hex, 3, 2)), hexdec(substr($hex, 5, 2))];
    }

    /** Mix $hex toward $with by $amount (0..1). */
    public static function mix($hex, $with, $amount) {
        $from = self::channels($hex);
        $to = self::channels($with);
        $out = '#';
        foreach ([0, 1, 2] as $i) { $out .= sprintf('%02x', (int) round($from[$i] + ($to[$i] - $from[$i]) * $amount)); }
        return $out;
    }

    /** CSS font-family value for a choice. */
    public static function stack($font) {
        if ($font === 'inherit') { return 'inherit'; }
        if ($font === 'system') { return self::SYSTEM_STACK; }
        return '"' . $font . '", ' . self::SYSTEM_STACK;
    }

    /** Google Fonts stylesheet URL for a choice, or ''. */
    public static function font_url($font) {
        if (!in_array($font, self::FONTS, true)) { return ''; }
        return 'https://fonts.googleapis.com/css2?family=' . str_replace(' ', '+', $font) . ':wght@400;500;600;700&display=swap';
    }

    /** Learner-site variables, plus the font rule when a font is chosen. */
    public static function frontend_css() {
        $primary = self::color('ohmylms_primary_color_scheme');
        $font = self::font('ohmylms_font_family');
        $css = ':root{'
            . '--ohmylms-primary-color:' . $primary . ';'
            . '--ohmylms-primary-color-rgb:' . self::rgb($primary) . ';'
            . '--ohmylms-primary-hover-color:' . self::mix($primary, '#000000', 0.15) . ';'
            . '--ohmylms-primary-soft-color:' . self::mix($primary, '#ffffff', 0.9) . ';'
            . '--ohmylms-heading-color:' . self::color('ohmylms_heading_color_scheme') . ';'
            . '--ohmylms-body-text-color:' . self::color('ohmylms_body_text_color_scheme') . ';'
            . '--ohmylms-progressbar-color:' . self::color('ohmylms_body_progress_color_scheme') . ';'
            . '--ohmylms-outline-color:var(--ohmylms-primary-color);'
            // Left undefined for "Theme font" so var(--ohmylms-font-family, fallback) keeps each page's own font.
            . ($font !== 'inherit' ? '--ohmylms-font-family:' . self::stack($font) . ';' : '')
            . '}';
        if ($font !== 'inherit') {
            $css .= '.ohmylms-page,.ohmylms-schools,.ohmylms-practice,.ohmylms-inline-check,.ohmylms-skill-progress,.ohmylms-quiz{font-family:var(--ohmylms-font-family)}';
        }
        return $css;
    }

    public static function enqueue_frontend_font() {
        $url = self::font_url(self::font('ohmylms_font_family'));
        if ($url) { wp_enqueue_style('ohmylms-font', $url, [], null); }
    }

    /** Admin-app variables (brand, WordPress components, Arco scale) and font. */
    public static function admin_css() {
        $primary = self::color('ohmylms_admin_primary_color');
        $heading = self::color('ohmylms_admin_heading_color');
        $muted = self::color('ohmylms_admin_muted_color');
        $font = self::font('ohmylms_admin_font_family');
        $css = ':root{'
            . '--wp-admin-theme-color:' . $primary . ';'
            . '--wp-admin-theme-color--rgb:' . self::rgb($primary) . ';'
            . '--wp-admin-theme-color-darker-10:' . self::mix($primary, '#000000', 0.1) . ';'
            . '--wp-admin-theme-color-darker-20:' . self::mix($primary, '#000000', 0.2) . ';'
            . '--wp-components-color-accent:' . $primary . ';'
            . '--wp-components-color-accent-darker-10:' . self::mix($primary, '#000000', 0.1) . ';'
            . '--wp-components-color-accent-darker-20:' . self::mix($primary, '#000000', 0.2) . ';'
            . '--wp-components-color-foreground:' . $heading . ';'
            . '--wp-components-color-subdued:' . $muted . ';'
            . '--wp-components-button-color-secondary-text:' . $heading . ';'
            . '--ohmylms-primary-color:' . $primary . ';'
            . '--ohmylms-primary-color-rgb:' . self::rgb($primary) . ';'
            . '--ohmylms-primary-hover-color:' . self::mix($primary, '#000000', 0.25) . ';'
            . '--ohmylms-primary-soft-color:' . self::mix($primary, '#ffffff', 0.9) . ';'
            . '--ohmylms-admin-heading-color:' . $heading . ';'
            . '--ohmylms-admin-text-color:' . $heading . ';'
            . '--ohmylms-admin-muted-color:' . $muted . ';'
            . '--ohmylms-admin-surface:#ffffff;'
            . '--ohmylms-admin-subtle:#f4f5f7;'
            . '--ohmylms-admin-border:#ebedf0;'
            . '--ohmylms-admin-radius:7px;'
            . '--ohmylms-admin-gutter:40px;'
            . '--ohmylms-admin-font:' . self::stack($font) . ';'
            . '}';
        // Arco components read "r, g, b" triplets on a 1..9 scale (6 = base).
        $scale = [1 => ['#ffffff', 0.9], 2 => ['#ffffff', 0.8], 3 => ['#ffffff', 0.65], 4 => ['#ffffff', 0.45], 5 => ['#ffffff', 0.2], 6 => ['#ffffff', 0], 7 => ['#000000', 0.15], 8 => ['#000000', 0.3], 9 => ['#000000', 0.45]];
        $css .= 'body{';
        foreach ($scale as $step => [$toward, $amount]) { $css .= '--primary-' . $step . ':' . self::rgb(self::mix($primary, $toward, $amount)) . ';'; }
        $css .= '}';
        if ($font !== 'system') {
            $css .= '#wpbody .ohmylms-admin-page :is(h1,h2,h3,h4,h5,h6,p,span,div,a,button,input,select,textarea,label,td,th,li,legend,strong,small)'
                . ':not(.dashicons):not([class*="dashicons-"]):not(.iconfont){font-family:var(--ohmylms-admin-font)}';
        }
        return $css;
    }

    public static function is_admin_app_screen() {
        $screen = function_exists('get_current_screen') ? get_current_screen() : null;
        return $screen && $screen->id === 'toplevel_page_ohmylms';
    }

    public static function enqueue_admin() {
        if (!self::is_admin_app_screen()) { return; }
        $ui_version = OHMYLMS_VERSION . '.' . substr(hash_file('sha256', OHMYLMS_DIR . '/assets/css/admin-ui.css'), 0, 12);
        wp_enqueue_style('ohmylms-admin-ui', plugins_url('assets/css/admin-ui.css', OHMYLMS_FILE), ['ohmylms-main'], $ui_version);
        wp_add_inline_style('ohmylms-admin-ui', self::admin_css());
        $url = self::font_url(self::font('ohmylms_admin_font_family'));
        if ($url) { wp_enqueue_style('ohmylms-admin-font', $url, [], null); }
        // The Design settings screen previews font names in their own face.
        wp_add_inline_script('wp-element', 'window.ohmylmsDesign=' . wp_json_encode(['fonts' => self::FONTS, 'defaults' => self::DEFAULTS]) . ';', 'before');
    }
}
