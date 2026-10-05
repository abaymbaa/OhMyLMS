<?php
namespace OhMyLMS\Learning;

use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

final class Frontend {
    public static function init() {
        add_shortcode('ohmylms_learning', [__CLASS__, 'shortcode']);
        add_filter('query_vars', static function ($vars) { $vars[] = 'ohmylms_learning'; $vars[] = 'learning_item'; return $vars; });
        add_action('template_redirect', [__CLASS__, 'page']);
        add_filter('ohmylms_course_tabs', [__CLASS__, 'course_tab'], 30);
    }

    public static function url($course) { return add_query_arg('ohmylms_learning', (int) $course, home_url('/')); }

    public static function assets() {
        wp_enqueue_style('ohmylms-learning', plugins_url('assets/css/learning-program.css', OHMYLMS_FILE), [], OHMYLMS_VERSION);
        wp_enqueue_script('ohmylms-learning', plugins_url('assets/js/learning-program.js', OHMYLMS_FILE), [], OHMYLMS_VERSION, true);
        wp_localize_script('ohmylms-learning', 'ohmylmsLearning', ['root' => rest_url('ohmylms/v1/'), 'nonce' => wp_create_nonce('wp_rest'), 'saving' => __('Saving...', 'ohmylms'), 'error' => __('Could not save completion. Please retry.', 'ohmylms')]);
    }

    public static function course_tab($tabs) {
        global $course;
        if (!$course || !CourseProgram::current($course->get_id())) { return $tabs; }
        $tabs['learning'] = ['title' => __('Learning', 'ohmylms'), 'priority' => 5, 'callback' => static function () use ($course) { echo self::render($course->get_id()); }];
        return $tabs;
    }

    public static function shortcode($attributes) {
        $attributes = shortcode_atts(['course' => 0], (array) $attributes, 'ohmylms_learning');
        return self::render((int) $attributes['course']);
    }

    public static function render($course_id, $placement = '') {
        if (get_post_type($course_id) !== OHMYLMS_COURSE_CPT || get_post_status($course_id) !== 'publish') { return '<p>' . esc_html__('This course is not available.', 'ohmylms') . '</p>'; }
        if (!is_user_logged_in()) { return '<p><a href="' . esc_url(wp_login_url(self::url($course_id))) . '">' . esc_html__('Log in to open your learning path.', 'ohmylms') . '</a></p>'; }
        if (!Schema::ready()) { return ''; }
        Evidence::process(50);
        $state = CompletionPolicy::award(get_current_user_id(), $course_id);
        if (!$state) { $state = CompletionPolicy::status(get_current_user_id(), $course_id); }
        if (is_wp_error($state)) { return '<p>' . esc_html($state->get_error_message()) . '</p><a href="' . esc_url(get_permalink($course_id)) . '">' . esc_html__('Course overview', 'ohmylms') . '</a>'; }
        self::assets();
        $program = $state['program'];
        $student = get_current_user_id();
        ob_start();
        ?>
        <section class="ohmylms-learning-program" data-course="<?php echo esc_attr($course_id); ?>">
            <a href="<?php echo esc_url(get_permalink($course_id)); ?>"><?php esc_html_e('Course overview', 'ohmylms'); ?></a>
            <h1><?php echo esc_html(get_the_title($course_id)); ?></h1>
            <p><?php echo esc_html(['traditional' => __('Traditional', 'ohmylms'), 'skill-based' => __('Skill-based', 'ohmylms'), 'blended' => __('Blended', 'ohmylms')][$program['mode']]); ?> · <?php echo esc_html(sprintf(__('Program version %d', 'ohmylms'), $program['version'])); ?></p>
            <?php if ($state['completed']) { ?><p class="ohmylms-learning-completed"><?php esc_html_e('Course completed', 'ohmylms'); ?></p><?php } ?>
            <?php if ($state['blocked']) { ?><p role="status"><?php esc_html_e('Skill practice is currently unavailable. Contact your teacher.', 'ohmylms'); ?></p><?php } elseif ($state['pending']) { ?><p role="status"><?php esc_html_e('Skill evidence is being evaluated. Your progress will update when evaluation finishes.', 'ohmylms'); ?></p><?php } ?>
            <dl class="ohmylms-learning-dimensions">
                <?php foreach (['activities' => __('Activities', 'ohmylms'), 'outcomes' => __('Skill targets', 'ohmylms'), 'assessments' => __('Checkpoints', 'ohmylms')] as $key => $label) { $count = $state['dimensions'][$key]; ?>
                    <div><dt><?php echo esc_html($label); ?></dt><dd><?php echo esc_html(sprintf(__('%1$d of %2$d required', 'ohmylms'), $count['met'], $count['total'])); ?></dd></div>
                <?php } ?>
            </dl>
            <?php if ($placement) {
                $found = false;
                foreach ($program['items'] as $item) {
                    if ($item['id'] !== $placement) { continue; }
                    $found = true;
                    echo '<p><a href="' . esc_url(self::url($course_id)) . '">' . esc_html__('Back to learning path', 'ohmylms') . '</a></p>';
                    if (!LearningPath::available($item, $student, $course_id)) { echo '<p>' . esc_html__('This activity is currently unavailable.', 'ohmylms') . '</p>'; break; }
                    if ($item['type'] === 'practice') {
                        echo \OhMyLMS\Practice\Frontend::practice(['skill' => $item['content_id'], 'course' => $course_id]);
                    } elseif ($item['type'] === 'lesson') {
                        echo '<article class="ohmylms-learning-lesson"><h2>' . esc_html($item['name']) . '</h2>';
                        $lesson = ohmylms_get_lesson($item['content_id']);
                        $media = $lesson->get_type() === 'video' ? $lesson->get_video_id() : ($lesson->get_type() === 'audio' ? $lesson->get_audio_id() : 0);
                        $url = $media ? wp_get_attachment_url($media) : $lesson->get_external_url();
                        if ($url && $lesson->get_type() === 'video') { echo wp_video_shortcode(['src' => $url]); }
                        if ($url && $lesson->get_type() === 'audio') { echo wp_audio_shortcode(['src' => $url]); }
                        $old_post = $GLOBALS['post'] ?? null;
                        $GLOBALS['post'] = get_post($item['content_id']); setup_postdata($GLOBALS['post']);
                        echo apply_filters('the_content', get_post_field('post_content', $item['content_id']));
                        $GLOBALS['post'] = $old_post; if ($old_post) { setup_postdata($old_post); }
                        echo '</article>';
                        if (!$item['complete']) { ?><button type="button" class="ohmylms-button" data-complete-placement="<?php echo esc_attr($item['id']); ?>"><?php esc_html_e('Mark lesson complete', 'ohmylms'); ?></button><p class="ohmylms-learning-message" role="status"></p><?php }
                        else { echo '<p>' . esc_html__('Lesson completed in this course', 'ohmylms') . '</p>'; }
                    }
                    break;
                }
                if (!$found) { echo '<p>' . esc_html__('Learning activity not found.', 'ohmylms') . '</p>'; }
            } else {
                $next = LearningPath::next($state);
                if ($next) { ?><p><a class="ohmylms-button" href="<?php echo esc_url($next['url']); ?>"><?php echo esc_html(sprintf(__('Continue with %s', 'ohmylms'), $next['name'])); ?></a></p><?php }
                if ($program['mode'] === 'skill-based') { self::outcomes($program, $state['blocked']); }
                ?>
                <h2><?php echo esc_html($program['mode'] === 'blended' ? __('Learning path', 'ohmylms') : __('Curriculum', 'ohmylms')); ?></h2>
                <ol class="ohmylms-learning-path">
                <?php $chapter = null; foreach ($program['items'] as $item) {
                    if ($chapter !== $item['chapter_id']) { $chapter = $item['chapter_id']; if ($chapter) { ?><li class="ohmylms-learning-unit"><h3><?php echo esc_html(get_the_title($chapter)); ?></h3></li><?php } }
                    $available = LearningPath::available($item, $student, $course_id);
                    ?>
                    <li>
                        <span><?php echo esc_html(ucfirst($item['type'])); ?></span>
                        <?php if ($available) { ?><a href="<?php echo esc_url($item['url']); ?>"><?php echo esc_html($item['name']); ?></a><?php } else { ?><strong><?php echo esc_html($item['name']); ?></strong><?php } ?>
                        <span><?php echo esc_html($item['complete'] ? __('Complete', 'ohmylms') : (!$available ? __('Unavailable', 'ohmylms') : ($item['type'] === 'practice' ? __('Uses skill target', 'ohmylms') : ($item['required'] ? __('Required', 'ohmylms') : __('Optional', 'ohmylms'))))); ?></span>
                        <?php if ($item['type'] === 'quiz') { $assessment = $state['assessments'][$item['content_id']]; ?><small><?php echo esc_html(sprintf(__('Score %1$s · Pass %2$s%%', 'ohmylms'), $assessment['score'] === null ? __('Not graded', 'ohmylms') : $assessment['score'] . '%', $assessment['pass_percent'])); ?></small><?php } ?>
                    </li>
                <?php } ?>
                </ol>
                <?php if ($program['mode'] !== 'skill-based') { self::outcomes($program, $state['blocked']); }
            } ?>
        </section>
        <?php
        return ob_get_clean();
    }

    private static function outcomes(array $program, $blocked) {
        if (!$program['outcomes']) { return; }
        ?>
        <h2><?php esc_html_e('Skills', 'ohmylms'); ?></h2>
        <div class="ohmylms-learning-table-scroll"><table class="ohmylms-learning-skills"><thead><tr><th><?php esc_html_e('Skill', 'ohmylms'); ?></th><th><?php esc_html_e('Current level', 'ohmylms'); ?></th><th><?php esc_html_e('Target', 'ohmylms'); ?></th><th><?php esc_html_e('Status', 'ohmylms'); ?></th><th></th></tr></thead><tbody>
        <?php foreach ($program['outcomes'] as $outcome) { ?><tr>
            <th scope="row"><?php echo esc_html($outcome['name']); ?></th>
            <td data-label="<?php esc_attr_e('Current level', 'ohmylms'); ?>"><?php echo esc_html(Mastery::label($outcome['state']['level'])); ?><?php if (!empty($outcome['state']['review_due'])) { echo '<br>' . esc_html__('Review due', 'ohmylms'); } ?></td>
            <td data-label="<?php esc_attr_e('Target', 'ohmylms'); ?>"><?php echo esc_html(Mastery::label($outcome['target'])); ?></td>
            <td data-label="<?php esc_attr_e('Status', 'ohmylms'); ?>"><?php echo esc_html($outcome['met'] ? __('Target met', 'ohmylms') : ($outcome['required'] ? __('Required', 'ohmylms') : __('Optional', 'ohmylms'))); ?></td>
            <td><?php if (!$blocked) { ?><a href="<?php echo esc_url($outcome['practice_url']); ?>"><?php esc_html_e('Practice', 'ohmylms'); ?></a><?php } ?></td>
        </tr><?php } ?>
        </tbody></table></div>
        <?php
    }

    public static function page() {
        $course = (int) get_query_var('ohmylms_learning');
        if (!$course) { return; }
        if (get_post_type($course) !== OHMYLMS_COURSE_CPT || get_post_status($course) !== 'publish') { return; }
        nocache_headers();
        $html = self::render($course, (string) get_query_var('learning_item'));
        get_header();
        echo '<main class="ohmylms-learning-main">' . $html . '</main>';
        get_footer();
        exit;
    }
}
