<?php

// HTTP
$host = $_SERVER['HTTP_HOST'];
define('HTTP_SERVER', 'http://'.$host.'/');

// HTTPS
define('HTTPS_SERVER', 'http://'.$host.'/');


// DIR
$dir = dirname(__FILE__);
define('DIR_APPLICATION', $dir . '/catalog/');
define('DIR_SYSTEM', $dir . '/system/');
define('DIR_LANGUAGE', $dir . '/catalog/language/');
define('DIR_TEMPLATE', $dir . '/catalog/view/theme/');
define('DIR_CONFIG', $dir . '/system/config/');
define('DIR_IMAGE', $dir . '/image/');
define('DIR_CACHE', $dir . '/system/cache/');
define('DIR_DOWNLOAD', $dir . '/system/download/');
define('DIR_UPLOAD', $dir . '/system/upload/');
define('DIR_MODIFICATION', $dir . '/system/modification/');
define('DIR_LOGS', $dir . '/system/logs/');

// DB
define('DB_DRIVER', 'mysqli');
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'cdmydev13714');
define('DB_PASSWORD', '441146b91a');
define('DB_DATABASE', 'cdmydev13714');
define('DB_PREFIX', 'oc_');
