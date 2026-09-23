<?php
/** Run from CLI before enabling the renamed plugin. Pass --apply to migrate. */
if (PHP_SAPI !== 'cli') { exit; }
define('SHORTINIT', true);
require dirname(__DIR__, 4) . '/wp-load.php';
global $wpdb;
$apply = in_array('--apply', $argv, true);
$quote = static function ($name) { return '`' . str_replace('`', '``', $name) . '`'; };
$run = static function ($sql) use ($wpdb) {
    $result = $wpdb->query($sql);
    if ($result === false) { throw new RuntimeException($wpdb->last_error); }
    return $result;
};
$tables = $wpdb->get_col($wpdb->prepare('SHOW TABLES LIKE %s', $wpdb->esc_like($wpdb->prefix) . '%'));
$renames = [];
$updates = [];
foreach ($tables as $table) {
    $new = str_replace(['crlms', 'CRLMS'], ['omlms', 'OMLMS'], $table);
    if ($new !== $table) {
        if (in_array($new, $tables, true)) { throw new RuntimeException('Destination table already exists: ' . $new); }
        $renames[] = $quote($table) . ' TO ' . $quote($new);
    }
    foreach ($wpdb->get_results('SHOW FULL COLUMNS FROM ' . $quote($table)) as $column) {
        if (!preg_match('/char|text|enum|set|json/i', $column->Type)) { continue; }
        $field = $quote($column->Field);
        $condition = $field . " LIKE '%crlms%'";
        $count = (int) $wpdb->get_var('SELECT COUNT(*) FROM ' . $quote($table) . ' WHERE ' . $condition);
        if (!$count) { continue; }
        echo $table . '.' . $column->Field . ': ' . $count . " rows\n";
        // Both prefixes have five bytes, preserving PHP serialized string lengths.
        $updates[] = 'UPDATE ' . $quote($table) . ' SET ' . $field . " = REPLACE(REPLACE($field, 'crlms', 'omlms'), 'CRLMS', 'OMLMS') WHERE " . $condition;
    }
}
echo count($renames) . " tables to rename; " . count($updates) . " columns to migrate.\n";
if (!$apply) { exit; }
$run('START TRANSACTION');
try {
    foreach ($updates as $sql) { $run($sql); }
    $run('COMMIT');
    // One atomic rename statement; run after committing the content updates.
    if ($renames) { $run('RENAME TABLE ' . implode(', ', $renames)); }
    echo "Migration complete. Flush WordPress caches and rewrite rules.\n";
} catch (Throwable $error) {
    $wpdb->query('ROLLBACK');
    throw $error;
}
