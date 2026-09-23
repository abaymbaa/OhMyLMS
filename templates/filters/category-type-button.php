<?php
/**
 * Template for displaying course categories.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
if( !isset($is_enable_category) || 'yes' !== $is_enable_category ){ 
    return;
}

$items = [];
if (taxonomy_exists('course_category')) {
    $terms = get_terms([
        'taxonomy'   => 'course_category',
        'hide_empty' => false, // Set to true to exclude empty terms
    ]);

    if (!empty($terms) && !is_wp_error($terms)) {
        $items = $terms;
    }
}
?>
<div class="creator-lms-category-type-button">
    <ul>
        <li class="active creator-lms-category-filter" data-slug="all">
            <a href="#" data-slug="all">
                <?php echo esc_html__( 'All', 'ohmylms' ); ?>
            </a>
        </li>
        <?php foreach($items as $item): ?>
            <li class="creator-lms-category-filter" data-slug="<?php echo $item->slug; ?>">
                <a href="#" data-slug="<?php echo $item->slug; ?>">
                    <?php echo esc_html__( $item->name, 'ohmylms' ); ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>