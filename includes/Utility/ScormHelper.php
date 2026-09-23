<?php

namespace OMLMS\Utility;

defined( 'ABSPATH' ) || exit;

/**
 * Class ScormHelper
 *
 * Utility helpers shared between SCORM import/export features.
 */
class ScormHelper {

	/**
	 * Log SCORM activity.
	 *
	 * @param string $message Log message.
	 * @param string $level   Log level (info, warning, error, debug).
	 * @param array  $context Additional context.
	 */
	public static function log( $message, $level = 'info', $context = [] ) {
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			$log_message = sprintf( '[SCORM] [%s] %s', strtoupper( $level ), $message );

			if ( ! empty( $context ) ) {
				$log_message .= ' | Context: ' . json_encode( $context );
			}

			error_log( $log_message );
		}
	}

public static function validate_course_for_export($course_id) {
        $course = get_post($course_id);

        // Check if course exists
        if (!$course || $course->post_type !== CREATOR_LMS_COURSE_CPT) {
            return [
                'valid' => false,
                'message' => sprintf(__('Course ID %d does not exist or is not a valid course.', 'creator-lms-pro'), $course_id),
            ];
        }

        // Check if course is published or draft
        if (!in_array($course->post_status, ['publish', 'draft', 'pending'])) {
            return [
                'valid' => false,
                'message' => sprintf(__('Course "%s" has invalid status: %s', 'creator-lms-pro'), $course->post_title, $course->post_status),
            ];
        }

        // Check if course has content
        global $wpdb;
        $chapter_count = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM {$wpdb->prefix}omlms_chapter_relationship WHERE course_id = %d",
            $course_id
        ));

        if ($chapter_count == 0) {
            return [
                'valid' => false,
                'message' => sprintf(__('Course "%s" has no chapters. Please add content before exporting.', 'creator-lms-pro'), $course->post_title),
            ];
        }

        return [
            'valid' => true,
            'message' => __('Course is valid for export.', 'creator-lms-pro'),
        ];
    }

public static function check_system_requirements($strict_mode = false) {
        $results = [
            'all_passed' => true,
            'checks' => [],
        ];

        // Check ZIP extension (CRITICAL - always required)
        $results['checks']['zip'] = [
            'name' => __('PHP ZIP Extension', 'creator-lms-pro'),
            'passed' => class_exists('ZipArchive'),
            'message' => class_exists('ZipArchive') 
                ? __('Available', 'creator-lms-pro')
                : __('Not available. Please enable the ZIP extension.', 'creator-lms-pro'),
            'critical' => true,
        ];

        // Check DOM extension (CRITICAL - always required)
        $results['checks']['dom'] = [
            'name' => __('PHP DOM Extension', 'creator-lms-pro'),
            'passed' => class_exists('DOMDocument'),
            'message' => class_exists('DOMDocument') 
                ? __('Available', 'creator-lms-pro')
                : __('Not available. Please enable the DOM extension.', 'creator-lms-pro'),
            'critical' => true,
        ];

        // Check memory limit (WARNING - can be increased at runtime)
        $memory_limit = ini_get('memory_limit');
        $memory_limit_bytes = self::convert_to_bytes($memory_limit);
        $memory_ok = $memory_limit_bytes >= 256 * 1024 * 1024 || $memory_limit == '-1';

        $results['checks']['memory'] = [
            'name' => __('PHP Memory Limit', 'creator-lms-pro'),
            'passed' => $memory_ok,
            'message' => $memory_ok 
                ? sprintf(__('Sufficient: %s', 'creator-lms-pro'), $memory_limit)
                : sprintf(__('Low: %s (recommended: 256M or higher)', 'creator-lms-pro'), $memory_limit),
            'critical' => false, // Can be increased at runtime
        ];

        // Check max execution time (WARNING - can be increased at runtime)
        $max_execution = ini_get('max_execution_time');
        $time_ok = $max_execution >= 300 || $max_execution == 0;

        $results['checks']['execution_time'] = [
            'name' => __('Max Execution Time', 'creator-lms-pro'),
            'passed' => $time_ok,
            'message' => $time_ok 
                ? sprintf(__('Sufficient: %s seconds', 'creator-lms-pro'), $max_execution == 0 ? 'unlimited' : $max_execution)
                : sprintf(__('Low: %s seconds (recommended: 300 or higher)', 'creator-lms-pro'), $max_execution),
            'critical' => false, // Can be increased at runtime
        ];

        // Check upload directory writable (CRITICAL - always required)
        $upload_dir = wp_upload_dir();
        $writable = wp_is_writable($upload_dir['basedir']);

        $results['checks']['writable'] = [
            'name' => __('Upload Directory Writable', 'creator-lms-pro'),
            'passed' => $writable,
            'message' => $writable 
                ? __('Writable', 'creator-lms-pro')
                : __('Not writable. Please check directory permissions.', 'creator-lms-pro'),
            'critical' => true,
        ];

        // Check disk space (WARNING - should have some space but not critical)
        $free_space = @\disk_free_space($upload_dir['basedir']);
        
        // Handle case where disk_free_space() returns false
        if ($free_space === false) {
            $results['checks']['disk_space'] = [
                'name' => __('Available Disk Space', 'creator-lms-pro'),
                'passed' => true, // Don't block if we can't determine
                'message' => __('Unable to determine disk space (this is common on some hosting environments)', 'creator-lms-pro'),
                'critical' => false,
            ];
        } else {
            $space_ok = $free_space > 100 * 1024 * 1024; // 100MB minimum
            
            $results['checks']['disk_space'] = [
                'name' => __('Available Disk Space', 'creator-lms-pro'),
                'passed' => $space_ok,
                'message' => sprintf(__('Available: %s', 'creator-lms-pro'), size_format($free_space)) . 
                            ($space_ok ? '' : ' ' . __('(low - recommended: 100MB or higher)', 'creator-lms-pro')),
                'critical' => false, // Warning only
            ];
        }

        // Update overall status based on strict mode
        if ($strict_mode) {
            // In strict mode, only critical checks must pass
            foreach ($results['checks'] as $check) {
                if ($check['critical'] && !$check['passed']) {
                    $results['all_passed'] = false;
                    break;
                }
            }
        } else {
            // In normal mode, all checks must pass
            foreach ($results['checks'] as $check) {
                if (!$check['passed']) {
                    $results['all_passed'] = false;
                    break;
                }
            }
        }

        return $results;
    }

private static function convert_to_bytes($size) {
        $size = trim($size);
        $last = strtolower($size[strlen($size) - 1]);
        $size = (int) $size;

        switch ($last) {
            case 'g':
                $size *= 1024;
            case 'm':
                $size *= 1024;
            case 'k':
                $size *= 1024;
        }

        return $size;
    }

public static function sanitize_scorm_filename($filename) {
        // Remove special characters
        $filename = preg_replace('/[^A-Za-z0-9\-_]/', '-', $filename);
        
        // Remove multiple consecutive dashes
        $filename = preg_replace('/-+/', '-', $filename);
        
        // Trim dashes from ends
        $filename = trim($filename, '-');
        
        // Ensure not empty
        if (empty($filename)) {
            $filename = 'course';
        }

        return $filename;
    }

public static function estimate_export_size($course_id) {
        global $wpdb;

        $total_size = 0;
        $file_count = 0;

        // Get course thumbnail
        $thumbnail_id = get_post_thumbnail_id($course_id);
        if ($thumbnail_id) {
            $file_path = get_attached_file($thumbnail_id);
            if ($file_path && file_exists($file_path)) {
                $total_size += filesize($file_path);
                $file_count++;
            }
        }

        // Get chapters and contents
        $chapters = $wpdb->get_results($wpdb->prepare(
            "SELECT chapter_id FROM {$wpdb->prefix}omlms_chapter_relationship WHERE course_id = %d",
            $course_id
        ), ARRAY_A);

        foreach ($chapters as $chapter) {
            // Chapter thumbnail
            $chapter_thumb = get_post_thumbnail_id($chapter['chapter_id']);
            if ($chapter_thumb) {
                $file_path = get_attached_file($chapter_thumb);
                if ($file_path && file_exists($file_path)) {
                    $total_size += filesize($file_path);
                    $file_count++;
                }
            }

            // Get contents
            $contents = $wpdb->get_results($wpdb->prepare(
                "SELECT content_id FROM {$wpdb->prefix}omlms_content_relationship WHERE chapter_id = %d",
                $chapter['chapter_id']
            ), ARRAY_A);

            foreach ($contents as $content) {
                // Content media
                $content_thumb = get_post_thumbnail_id($content['content_id']);
                if ($content_thumb) {
                    $file_path = get_attached_file($content_thumb);
                    if ($file_path && file_exists($file_path)) {
                        $total_size += filesize($file_path);
                        $file_count++;
                    }
                }

                // Video files
                $video_id = get_post_meta($content['content_id'], '_video_id', true);
                if ($video_id) {
                    $file_path = get_attached_file($video_id);
                    if ($file_path && file_exists($file_path)) {
                        $total_size += filesize($file_path);
                        $file_count++;
                    }
                }
            }
        }

        return [
            'size_bytes' => $total_size,
            'size_formatted' => size_format($total_size),
            'file_count' => $file_count,
        ];
    }

public static function clean_old_temp_files($days = 1) {
        $upload_dir = wp_upload_dir();
        $base_dir = $upload_dir['basedir'];
        
        $deleted = 0;
        $cutoff_time = time() - ($days * DAY_IN_SECONDS);

        // Clean temp directories
        $pattern = $base_dir . '/scorm-temp-*';
        $temp_dirs = glob($pattern);

        foreach ($temp_dirs as $dir) {
            if (is_dir($dir) && filemtime($dir) < $cutoff_time) {
                self::delete_directory($dir);
                $deleted++;
            }
        }

        // Clean ZIP files
        $pattern = $base_dir . '/scorm-package-*.zip';
        $zip_files = glob($pattern);

        foreach ($zip_files as $file) {
            if (is_file($file) && filemtime($file) < $cutoff_time) {
                @unlink($file);
                $deleted++;
            }
        }

        return $deleted;
    }

private static function delete_directory($dir) {
        if (!is_dir($dir)) {
            return false;
        }

        $files = array_diff(scandir($dir), ['.', '..']);
        
        foreach ($files as $file) {
            $path = $dir . '/' . $file;
            is_dir($path) ? self::delete_directory($path) : @unlink($path);
        }

        return @rmdir($dir);
    }
}
