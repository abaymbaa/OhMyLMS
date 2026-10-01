<?php
/**
 * The template for displaying reorder question
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-lesson/quiz-loop/reorder.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Randomize the questions array
$options = $question['questions'];
shuffle($options);

?>

<div class="quiz-reorder-options" id="reorder-<?php echo esc_attr($question['id']); ?>">
    <?php foreach ($options as $option) { ?>
        <div class="matching-reorder-option reorder-option" draggable="true" data-option-id="<?php echo esc_attr($option['id']); ?>" data-question-id="<?php echo esc_attr($option['question_id']); ?>">

            <span class="option-drag-icon">
                <svg width="8" height="13" fill="none" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg"><path fill="#8F959E" stroke="#fff" stroke-width=".2" d="M1.5 9.6c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4zm4.5 0c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4zM1.5 5.1c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4C.73 7.9.1 7.27.1 6.5c0-.77.63-1.4 1.4-1.4zm4.5 0c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4zM1.5.6c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4C.73 3.4.1 2.77.1 2 .1 1.23.73.6 1.5.6zM6 .6c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4z"/></svg>
            </span>

            <?php if (!empty($option['image_url'])) { ?>
                <figure class="option-image">
                    <img src="<?php echo esc_url($option['image_url']); ?>" alt="<?php echo esc_attr($option['answer']); ?>">
                </figure>
            <?php } ?>

            <span class="option-label">
                <?php echo esc_html($option['answer']); ?>
            </span>

            <input type="hidden" name="attempt[<?php echo esc_attr($attempt['id']); ?>][quiz_question][<?php echo esc_attr($option['question_id']); ?>][]" value="<?php echo esc_attr($option['id']); ?>">
        </div>
    <?php } ?>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('reorder-<?php echo esc_attr($question["id"]); ?>');
    const draggables = container.querySelectorAll('.reorder-option');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement) {
            container.insertBefore(draggable, afterElement);
        } else {
            container.appendChild(draggable);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.reorder-option:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});
</script>