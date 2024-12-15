<?php
	include('core/init.php');

	if (isset($_GET['key']) === false || ($url = get_url($_GET['key'])) === false){
		echo 'INVALID URL KEY';
	} else {
		header ("Location: {$url}");
	}
	
	$base = rtrim(dirname($_SERVER['SCRIPT_NAME']), '\/'); die($base);
	$url_key = explode('/', utf8_decode(substr(urldecode(explode('?', $_SERVER['REQUEST_URI'])[0]), strlen($base+ 1))))[count(explode('/', utf8_decode(substr(urldecode(explode('?', $_SERVER['REQUEST_URI'])[0]), strlen($base+ 1)))))-1];
	die($url_key);
	
	$url = get_url($url_key);
?>