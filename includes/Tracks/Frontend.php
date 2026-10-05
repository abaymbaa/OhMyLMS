<?php
namespace OhMyLMS\Tracks;

use OhMyLMS\Curriculum\Schema;
use OhMyLMS\Skills\Evidence;

defined('ABSPATH') || exit;

/**
 * The learner's track dashboard: followed tracks with per-course and per-syllabus progress,
 * skill strengths and gaps, next practice and combined skill views, plus suggested tracks to
 * add. Rendered on the server (all output escaped); a small script only calls the follow and
 * unfollow endpoints and swaps in the section they return.
 */
final class Frontend {
    private static $printed = false;

    public static function init() {
        add_shortcode('ohmylms_tracks', [__CLASS__, 'shortcode']);
        // The [ohmylms_dashboard] shortcode fires the first hook; the profile dashboard template fires the second.
        // Either may print the section, but never twice on one page.
        foreach (['ohmylms_lms_student_dashboard_sections', 'ohmylms_lms_student_profile_after_dashboard_content'] as $hook) {
            add_action($hook, [__CLASS__, 'print_once'], 5);
        }
    }

    public static function print_once() {
        if (self::$printed) { return; }
        self::$printed = true;
        echo self::section(get_current_user_id()); // phpcs:ignore WordPress.Security.EscapeOutput -- escaped inside section().
    }

    public static function shortcode() {
        return self::section(get_current_user_id());
    }

    public static function enqueue() {
        wp_enqueue_style('ohmylms-learning-tracks', plugins_url('assets/css/learning-tracks.css', OHMYLMS_FILE), [], OHMYLMS_VERSION);
        wp_enqueue_script('ohmylms-learning-tracks', plugins_url('assets/js/learning-tracks.js', OHMYLMS_FILE), [], OHMYLMS_VERSION, true);
        wp_localize_script('ohmylms-learning-tracks', 'ohmylmsTracks', [
            'root' => esc_url_raw(rest_url('ohmylms/v1/')),
            'nonce' => wp_create_nonce('wp_rest'),
            'added' => __('Added to your dashboard.', 'ohmylms'),
            'removed' => __('Removed from your dashboard.', 'ohmylms'),
            'error' => __('Could not update your dashboard. Please try again.', 'ohmylms'),
        ]);
    }

    /** The whole section, or an empty string for guests and sites without the storage. */
    public static function section($user_id) {
        $user_id = (int) $user_id;
        if (!$user_id || !Schema::ready()) { return ''; }
        $followed = Follows::followed($user_id);
        $suggested = Follows::suggested($user_id);
        if (!$followed && !$suggested) { return ''; }
        if (class_exists(Evidence::class) && \OhMyLMS\Assessment\Schema::ready()) { Evidence::process(50); }
        self::enqueue();
        ob_start();
        ?>
        <section class="ohmylms-tracks" id="ohmylms-tracks" aria-labelledby="ohmylms-tracks-title" tabindex="-1">
            <h2 id="ohmylms-tracks-title" class="my-courses-title"><?php esc_html_e('My learning tracks', 'ohmylms'); ?></h2>
            <p class="ohmylms-tracks-note"><?php esc_html_e('Adding a track puts it on this dashboard. It does not enrol you in any course or change what you can open. Course progress and skill levels are shown separately: a skill level never completes a course.', 'ohmylms'); ?></p>
            <p class="ohmylms-tracks-status" role="status" aria-live="polite"></p>
            <?php if (!$followed) { ?>
                <p><?php esc_html_e('You have not added any learning tracks yet.', 'ohmylms'); ?></p>
            <?php } ?>
            <?php foreach ($followed as $row) { self::track(Progress::for_track($row, $user_id)); } ?>
            <?php if ($suggested) { ?>
                <h3 class="ohmylms-tracks-suggested-title my-courses-title"><?php esc_html_e('Suggested tracks', 'ohmylms'); ?></h3>
                <ul class="ohmylms-tracks-suggested">
                    <?php foreach ($suggested as $row) { ?>
                        <li>
                            <div>
                                <strong><?php echo esc_html($row['title']); ?></strong>
                                <?php if (!empty($row['description'])) { ?><p><?php echo esc_html($row['description']); ?></p><?php } ?>
                                <?php if (!empty($row['enrolled_overlap'])) { ?><p class="ohmylms-tracks-reason"><?php echo esc_html(sprintf(_n('Includes %d course you are enrolled in.', 'Includes %d courses you are enrolled in.', (int) $row['enrolled_overlap'], 'ohmylms'), (int) $row['enrolled_overlap'])); ?></p><?php } ?>
                            </div>
                            <button type="button" class="ohmylms-button" data-track-follow="<?php echo esc_attr((int) $row['id']); ?>" aria-label="<?php echo esc_attr(sprintf(__('Add %s to my dashboard', 'ohmylms'), $row['title'])); ?>"><?php esc_html_e('Add to my dashboard', 'ohmylms'); ?></button>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </section>
        <?php
        return ob_get_clean();
    }

    private static function summary_line(array $summary) {
        if (!$summary['total']) { return ''; }
        return sprintf(
            /* translators: 1: skills, 2: strengths, 3: needs practice, 4: in progress, 5: not assessed */
            _n('%1$d skill: %2$d strengths · %3$d need practice · %4$d in progress · %5$d not assessed', '%1$d skills: %2$d strengths · %3$d need practice · %4$d in progress · %5$d not assessed', $summary['total'], 'ohmylms'),
            $summary['total'], $summary['strengths'], $summary['gaps'], $summary['developing'], $summary['not_assessed']
        );
    }

    private static function level_badge($level, $label) {
        return '<span class="ohmylms-level ohmylms-level-' . esc_attr($level) . '">' . esc_html($label) . '</span>';
    }

    private static function progress_meter($label, $met, $total) {
        ?>
        <div class="ohmylms-track-measure">
            <span class="ohmylms-track-measure-label"><?php echo esc_html($label); ?></span>
            <progress max="<?php echo esc_attr((int) $total); ?>" value="<?php echo esc_attr((int) $met); ?>" aria-label="<?php echo esc_attr(sprintf(__('%1$s: %2$d of %3$d', 'ohmylms'), $label, $met, $total)); ?>"></progress>
            <span><?php echo esc_html(sprintf(__('%1$d of %2$d', 'ohmylms'), $met, $total)); ?></span>
        </div>
        <?php
    }

    private static function course(array $course) {
        ?>
        <li class="ohmylms-track-course">
            <div class="ohmylms-track-member-head">
                <a href="<?php echo esc_url($course['url']); ?>"><?php echo esc_html($course['title']); ?></a>
                <span class="ohmylms-track-badge"><?php echo esc_html($course['enrolled'] ? __('Enrolled', 'ohmylms') : __('Not enrolled', 'ohmylms')); ?></span>
                <span class="ohmylms-track-badge"><?php echo esc_html(Progress::mode_label($course['mode'])); ?></span>
                <?php if ($course['completed']) { ?><span class="ohmylms-track-badge ohmylms-track-completed"><?php esc_html_e('Course completed', 'ohmylms'); ?></span><?php } ?>
            </div>
            <?php if (!$course['enrolled']) { ?>
                <p class="ohmylms-track-muted"><?php esc_html_e('You are not enrolled in this course. Enrollment and access follow the course\'s normal rules.', 'ohmylms'); ?></p>
            <?php } elseif ($course['progress'] === null) { ?>
                <p class="ohmylms-track-muted"><?php esc_html_e('Progress is not available for this course right now.', 'ohmylms'); ?></p>
            <?php } elseif ($course['progress']['kind'] === 'program') {
                $labels = ['activities' => __('Activities', 'ohmylms'), 'outcomes' => __('Skill targets', 'ohmylms'), 'assessments' => __('Checkpoints', 'ohmylms')];
                foreach ($course['progress']['dimensions'] as $key => $dimension) {
                    if ($dimension['total']) { self::progress_meter($labels[$key] ?? $key, $dimension['met'], $dimension['total']); }
                }
            } elseif ($course['progress']['total']) {
                self::progress_meter(__('Activities completed', 'ohmylms'), $course['progress']['met'], $course['progress']['total']);
            } else { ?>
                <p class="ohmylms-track-muted"><?php esc_html_e('This course has no activities yet.', 'ohmylms'); ?></p>
            <?php } ?>
            <?php if ($course['note']) { ?><p class="ohmylms-track-muted" role="note"><?php echo esc_html($course['note']); ?></p><?php } ?>
        </li>
        <?php
    }

    private static function skill_list(array $skills) {
        if (!$skills) { return; }
        ?>
        <details class="ohmylms-track-skills">
            <summary><?php esc_html_e('Show skills', 'ohmylms'); ?></summary>
            <ul>
                <?php foreach ($skills as $skill) { ?>
                    <li><?php echo esc_html($skill['name']); ?> — <?php echo self::level_badge($skill['classification'], $skill['level_label']); // phpcs:ignore WordPress.Security.EscapeOutput ?></li>
                <?php } ?>
            </ul>
        </details>
        <?php
    }

    private static function track(array $view) {
        $track = $view['track'];
        $heading = 'ohmylms-track-' . (int) $track['id'] . '-title';
        ?>
        <article class="ohmylms-track" aria-labelledby="<?php echo esc_attr($heading); ?>" data-track="<?php echo esc_attr((int) $track['id']); ?>">
            <header class="ohmylms-track-header">
                <h3 id="<?php echo esc_attr($heading); ?>"><?php echo esc_html($track['title']); ?></h3>
                <button type="button" class="ohmylms-button ohmylms-button-secondary" data-track-unfollow="<?php echo esc_attr((int) $track['id']); ?>" aria-label="<?php echo esc_attr(sprintf(__('Remove %s from my dashboard', 'ohmylms'), $track['title'])); ?>"><?php esc_html_e('Remove from dashboard', 'ohmylms'); ?></button>
            </header>
            <?php if ($track['description'] !== '') { ?><p><?php echo esc_html($track['description']); ?></p><?php } ?>
            <?php if (!$view['members']) { ?>
                <p class="ohmylms-track-muted"><?php esc_html_e('This track has no courses or syllabuses available to you yet.', 'ohmylms'); ?></p>
            <?php } else { ?>
                <h4><?php esc_html_e('Courses and syllabuses', 'ohmylms'); ?></h4>
                <ul class="ohmylms-track-members">
                    <?php foreach ($view['members'] as $member) {
                        if ($member['type'] === 'course') {
                            self::course($member);
                            continue;
                        } ?>
                        <li class="ohmylms-track-syllabus">
                            <div class="ohmylms-track-member-head">
                                <strong><?php echo esc_html($member['name']); ?></strong>
                                <span class="ohmylms-track-badge"><?php echo esc_html(ucfirst(str_replace(['-', '_'], ' ', $member['item_type']))); ?></span>
                                <?php if ($member['code'] !== '') { ?><span class="ohmylms-track-badge"><?php echo esc_html($member['code']); ?></span><?php } ?>
                                <?php if ($member['version'] !== '') { ?><span class="ohmylms-track-badge"><?php echo esc_html(sprintf(__('Version %s', 'ohmylms'), $member['version'])); ?></span><?php } ?>
                            </div>
                            <?php if ($member['path']) { ?><p class="ohmylms-track-muted"><?php echo esc_html(implode(' › ', $member['path'])); ?></p><?php } ?>
                            <?php if ($member['courses']) { ?>
                                <ul class="ohmylms-track-members ohmylms-track-nested"><?php foreach ($member['courses'] as $course) { self::course($course); } ?></ul>
                            <?php } else { ?>
                                <p class="ohmylms-track-muted"><?php esc_html_e('No courses are linked to this syllabus yet.', 'ohmylms'); ?></p>
                            <?php } ?>
                            <?php if ($member['skill_summary']['total']) { ?><p><?php echo esc_html(self::summary_line($member['skill_summary'])); ?></p><?php } ?>
                            <?php self::skill_list($member['skills']); ?>
                        </li>
                    <?php } ?>
                </ul>
            <?php } ?>
            <?php if ($view['skills']) { self::skills($view); } ?>
            <?php if ($view['combined']) { self::combined($view['combined']); } ?>
        </article>
        <?php
    }

    private static function skills(array $view) {
        ?>
        <h4><?php esc_html_e('Skills in this track', 'ohmylms'); ?></h4>
        <p><?php echo esc_html(self::summary_line($view['skill_summary'])); ?></p>
        <?php if ($view['skills_truncated']) { ?><p class="ohmylms-track-muted"><?php esc_html_e('Only the first skills are shown.', 'ohmylms'); ?></p><?php } ?>
        <div class="ohmylms-track-table-scroll">
            <table class="ohmylms-track-skill-table">
                <thead><tr><th scope="col"><?php esc_html_e('Skill', 'ohmylms'); ?></th><th scope="col"><?php esc_html_e('Level', 'ohmylms'); ?></th><th scope="col"><?php esc_html_e('Status', 'ohmylms'); ?></th><th scope="col"><?php esc_html_e('Practice', 'ohmylms'); ?></th></tr></thead>
                <tbody>
                <?php foreach ($view['skills'] as $skill) { ?>
                    <tr>
                        <th scope="row"><?php echo esc_html($skill['name']); ?><?php if ($skill['sources']) { ?><small><?php echo esc_html(sprintf(__('In: %s', 'ohmylms'), implode(', ', $skill['sources']))); ?></small><?php } ?></th>
                        <td data-label="<?php esc_attr_e('Level', 'ohmylms'); ?>"><?php echo self::level_badge($skill['level'], $skill['level_label']); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php if ($skill['review_due']) { ?> <span class="ohmylms-track-badge"><?php esc_html_e('Review due', 'ohmylms'); ?></span><?php } ?></td>
                        <td data-label="<?php esc_attr_e('Status', 'ohmylms'); ?>"><?php echo esc_html($skill['classification_label']); ?></td>
                        <td data-label="<?php esc_attr_e('Practice', 'ohmylms'); ?>"><?php if ($skill['practice_url']) { ?><a href="<?php echo esc_url($skill['practice_url']); ?>"><?php esc_html_e('Practice', 'ohmylms'); ?></a><?php } elseif ($skill['classification'] === 'strength' && !$skill['review_due']) { esc_html_e('—', 'ohmylms'); } else { esc_html_e('None available yet', 'ohmylms'); } ?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        </div>
        <?php if ($view['next_practice']) { ?>
            <h4><?php esc_html_e('Next practice', 'ohmylms'); ?></h4>
            <ul class="ohmylms-track-practice">
                <?php foreach ($view['next_practice'] as $skill) { ?>
                    <li><a href="<?php echo esc_url($skill['practice_url']); ?>"><?php echo esc_html(sprintf(__('Practice %s', 'ohmylms'), $skill['name'])); ?></a> — <?php echo esc_html($skill['review_due'] ? __('Review due', 'ohmylms') : $skill['classification_label']); ?></li>
                <?php } ?>
            </ul>
        <?php } ?>
        <?php
    }

    private static function combined(array $groups) {
        ?>
        <h4><?php esc_html_e('Combined skills', 'ohmylms'); ?></h4>
        <p class="ohmylms-track-muted"><?php esc_html_e('Your administrator linked these skills across curricula. The shared level combines your answers from every skill marked equivalent, counting each answer once; it can differ from the level shown for the same skill above, which uses only that skill\'s own answers. Requirements, difficulty and syllabus versions can still differ, so check the notes.', 'ohmylms'); ?></p>
        <?php foreach ($groups as $group) { ?>
            <details class="ohmylms-track-combined">
                <summary><strong><?php echo esc_html($group['shared']['name']); ?></strong> — <?php esc_html_e('Shared level:', 'ohmylms'); ?> <?php echo self::level_badge($group['level'], $group['level_label']); // phpcs:ignore WordPress.Security.EscapeOutput ?></summary>
                <p><?php echo esc_html($group['evidence_count'] ? sprintf(_n('Based on %d answer.', 'Based on %d answers.', $group['evidence_count'], 'ohmylms'), $group['evidence_count']) : __('No answers recorded yet.', 'ohmylms')); ?></p>
                <ul>
                    <?php foreach ($group['sources'] as $source) { ?>
                        <li>
                            <?php echo esc_html($source['name']); ?> — <?php echo self::level_badge($source['level'], $source['level_label']); // phpcs:ignore WordPress.Security.EscapeOutput ?>
                            <span class="ohmylms-track-badge"><?php echo esc_html($source['relation'] === 'equivalent' ? __('Counts toward shared level', 'ohmylms') : __('Related only', 'ohmylms')); ?></span>
                            <?php foreach ($source['context'] as $context) { ?>
                                <small><?php echo esc_html(implode(' › ', array_merge($context['path'], [$context['name']])) . ($context['code'] !== '' ? ' (' . $context['code'] . ($context['version'] !== '' ? ', ' . $context['version'] : '') . ')' : ($context['version'] !== '' ? ' (' . $context['version'] . ')' : ''))); ?></small>
                            <?php } ?>
                            <?php if ($source['note'] !== '') { ?><small><?php echo esc_html(sprintf(__('Differences: %s', 'ohmylms'), $source['note'])); ?></small><?php } ?>
                        </li>
                    <?php } ?>
                </ul>
            </details>
        <?php }
    }
}
