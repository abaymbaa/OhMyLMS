<?php
/**
 * The template for displaying matching question
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-lesson/quiz-loop/matching.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Randomize the questions array
$options = $question['questions'];
// Frozen (versioned) deliveries keep the order stored at attempt start.
$frozen = !empty($question['frozen']);
if (!$frozen) shuffle($options);

?>

<div class="quiz-matching-options" id="matching-<?php echo esc_attr($question['id']); ?>">
    <div class="quiz-match-items">
        <?php foreach ($options as $option) { ?>
            <div class="matching-reorder-option matching-option" draggable="true" data-option-id="<?php echo esc_attr($option['id']); ?>" data-question-id="<?php echo esc_attr($option['question_id']); ?>">

                <span class="option-drag-icon">
                    <svg width="8" height="13" fill="none" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg"><path fill="#8F959E" stroke="#fff" stroke-width=".2" d="M1.5 9.6c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4zm4.5 0c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4zM1.5 5.1c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4C.73 7.9.1 7.27.1 6.5c0-.77.63-1.4 1.4-1.4zm4.5 0c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4zM1.5.6c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4C.73 3.4.1 2.77.1 2 .1 1.23.73.6 1.5.6zM6 .6c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-.77.63-1.4 1.4-1.4z"/></svg>
                </span>

                <?php if (!empty($option['matching_data']['image_url'])) { ?>
                    <figure class="option-image">
                        <img src="<?php echo esc_url($option['matching_data']['image_url']); ?>" alt="<?php echo esc_attr($option['matching_data']['label']); ?>">
                    </figure>
                <?php } ?>

                <span class="option-label">
                    <?php echo esc_html($option['answer']); ?>
                </span>

                <!-- <input type="hidden" name="attempt[<?php echo esc_attr($attempt['id']); ?>][quiz_question][<?php echo esc_attr($option['question_id']); ?>][]" value="<?php echo esc_attr($option['id']); ?>"> -->
            </div>
        <?php } ?>
    </div>

    <div class="quiz-matching-definition">
        <?php
        $definitions = $frozen && !empty($question['definitions']) ? $question['definitions'] : $options;
        if (!$frozen) shuffle($definitions);
        foreach ($definitions as $option) { ?>
            <div class="matching-definition" data-definition-id="<?php echo esc_attr($option['id']); ?>" data-question-id="<?php echo esc_attr($option['question_id']); ?>">
                <span class="definition-label">
                    <?php echo esc_html(isset($option['matching_data']['label']) ? $option['matching_data']['label'] : ''); ?>
                </span>

                <div class="option-drop-box" data-definition-id="<?php echo esc_attr($option['id']); ?>">
                    <span class="placeholder-text">
                        <?php echo __('Drag answer here', 'ohmylms'); ?>
                    </span>
                </div>

                <input type="hidden" class="matching-answer-input" name="attempt[<?php echo esc_attr($attempt['id']); ?>][quiz_question][<?php echo esc_attr($option['question_id']); ?>][<?php echo esc_attr($option['id']); ?>]" value="">
            </div>
        <?php } ?>
    </div>
</div>

<script>
(function() {
    // Helper for touch support
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }

    const dragItems = document.querySelectorAll('.quiz-match-items .matching-option');
    const dropBoxes = document.querySelectorAll('.quiz-matching-definition .option-drop-box');
    let draggedItem = null;
    let draggedItemId = null;

    // Drag and Drop for Desktop
    dragItems.forEach(item => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', function(e) {
            draggedItem = item;
            draggedItemId = item.getAttribute('data-option-id');
            setTimeout(() => item.classList.add('dragging'), 0);
        });
        item.addEventListener('dragend', function(e) {
            item.classList.remove('dragging');
            draggedItem = null;
            draggedItemId = null;
        });
    });

    dropBoxes.forEach(box => {
        box.addEventListener('dragover', function(e) {
            e.preventDefault();
            box.classList.add('drag-over');
        });
        box.addEventListener('dragleave', function(e) {
            box.classList.remove('drag-over');
        });
        box.addEventListener('drop', function(e) {
            e.preventDefault();
            box.classList.remove('drag-over');
            if (draggedItem) {
                // Remove any existing item in this box
                box.innerHTML = '';
                // Clone the dragged item for display
                const clone = draggedItem.cloneNode(true);
                clone.classList.add('dropped');
                clone.classList.remove('dragging');
                clone.setAttribute('draggable', 'false');
                // Remove drag events from clone
                clone.removeEventListener('dragstart', null);
                clone.removeEventListener('dragend', null);
                // Remove hidden input from clone
                const input = clone.querySelector('input[type="hidden"]');
                if (input) input.remove();
                box.appendChild(clone);
                // Update hidden input value
                const defId = box.getAttribute('data-definition-id');
                const inputField = document.querySelector('.matching-answer-input[name*="['+defId+']"]');
                if (inputField) inputField.value = draggedItemId;
            }
        });
    });

    // Touch support for mobile
    if (isTouchDevice()) {
        dragItems.forEach(item => {
            item.addEventListener('touchstart', function(e) {
                draggedItem = item;
                draggedItemId = item.getAttribute('data-option-id');
                item.classList.add('dragging');
            });
            item.addEventListener('touchend', function(e) {
                item.classList.remove('dragging');
                setTimeout(() => { draggedItem = null; draggedItemId = null; }, 100);
            });
        });
        dropBoxes.forEach(box => {
            box.addEventListener('touchstart', function(e) {
                if (draggedItem) {
                    box.classList.add('drag-over');
                }
            });
            box.addEventListener('touchend', function(e) {
                if (draggedItem) {
                    box.classList.remove('drag-over');
                    // Remove any existing item in this box
                    box.innerHTML = '';
                    // Clone the dragged item for display
                    const clone = draggedItem.cloneNode(true);
                    clone.classList.add('dropped');
                    clone.setAttribute('draggable', 'false');
                    // Remove drag events from clone
                    clone.removeEventListener('touchstart', null);
                    clone.removeEventListener('touchend', null);
                    // Remove hidden input from clone
                    const input = clone.querySelector('input[type="hidden"]');
                    if (input) input.remove();
                    box.appendChild(clone);
                    // Update hidden input value
                    const defId = box.getAttribute('data-definition-id');
                    const inputField = document.querySelector('.matching-answer-input[name*="['+defId+']"]');
                    if (inputField) inputField.value = draggedItemId;
                    // Reset dragged item
                    draggedItem.classList.remove('dragging');
                    draggedItem = null;
                    draggedItemId = null;
                }
            });
        });
    }
})();
</script>
