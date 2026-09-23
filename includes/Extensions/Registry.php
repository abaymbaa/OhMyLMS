<?php
namespace OMLMS\Extensions;

/** Registration is explicit; callbacks are supplied by trusted plugins or themes only. */
final class Registry {
    private static $items = ['layout'=>[], 'question'=>[], 'lesson'=>[], 'activity'=>[]];

    public static function register($kind, $id, array $definition) {
        if (!isset(self::$items[$kind]) || !is_string($id) || !preg_match('/^[a-z][a-z0-9_-]*$/D', $id)) {
            throw new \InvalidArgumentException('Invalid extension identifier.');
        }
        if (isset(self::$items[$kind][$id])) throw new \InvalidArgumentException('Extension already registered: '.$id);
        if (empty($definition['label'])) throw new \InvalidArgumentException('An extension label is required.');
        foreach ($kind === 'question' ? ['render','validate','grade'] : ['render'] as $callback) {
            if (!is_callable($definition[$callback] ?? null)) throw new \InvalidArgumentException('Missing callback: '.$callback);
        }
        if ($kind === 'layout' && (!isset($definition['contexts']) || array_diff($definition['contexts'], ['course','chapter','lesson','quiz']))) {
            throw new \InvalidArgumentException('Invalid layout contexts.');
        }
        self::$items[$kind][$id] = $definition;
    }
    public static function get($kind, $id) { return self::$items[$kind][$id] ?? null; }
    public static function all($kind) { return self::$items[$kind] ?? []; }
    public static function manifest() {
        $result=[];
        foreach (self::$items as $kind=>$items) foreach ($items as $id=>$definition) {
            $result[$kind][$id] = array_intersect_key($definition, array_flip(['label','contexts','editor']));
        }
        return $result;
    }
}
