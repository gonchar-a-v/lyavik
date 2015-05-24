<?php

$root = dirname(__FILE__) . '/..';

// HTTP
define('HTTP_SERVER', 'http://' . $_SERVER['HTTP_HOST'] . '/admin/');
define('HTTP_CATALOG', 'http://' . $_SERVER['HTTP_HOST'] . '/');

// HTTPS
define('HTTPS_SERVER', 'http://' . $_SERVER['HTTP_HOST'] . '/admin/');
define('HTTPS_CATALOG', 'http://' . $_SERVER['HTTP_HOST'] . '/');

// DIR
define('DIR_APPLICATION', $root . '/admin/');
define('DIR_SYSTEM', $root . '/system/');
define('DIR_LANGUAGE', $root . '/admin/language/');
define('DIR_TEMPLATE', $root . '/admin/view/template/');
define('DIR_CONFIG', $root . '/system/config/');
define('DIR_IMAGE', $root . '/image/');
define('DIR_CACHE', $root . '/system/cache/');
define('DIR_DOWNLOAD', $root . '/system/download/');
define('DIR_UPLOAD', $root . '/system/upload/');
define('DIR_LOGS', $root . '/system/logs/');
define('DIR_MODIFICATION', $root . '/system/modification/');
define('DIR_CATALOG', $root . '/catalog/');

// DB
define('DB_DRIVER', 'mysqli');
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'cdmydev13714');
define('DB_PASSWORD', '441146b91a');
define('DB_DATABASE', 'cdmydev13714');
define('DB_PREFIX', 'oc_');
