<?php

// Logs the request form given IP address.
function log_api_request($ip){
	$mysqli = new mysqli('localhost', 'root', '','url_shortener');
	if($mysqli -> connect_errno){
		echo "Failed  to connect to MySQL : ". $mysqli -> connect_error;
		exit();
	}
	$ip='44.58.236.11';
	$ip = $mysqli->real_escape_string($ip);
	$sql = "INSERT INTO `api_log` (`ip`, `date`, `requests`) VALUES (INET_ATON('{$ip}'), DATE(NOW()), 0) ON DUPLICATE KEY UPDATE `requests` = `requests` + 1";
	$mysqli->query($sql);
	$mysqli->close();
}
//Gets the total number requests that have been made today.
function get_todays_api_requests($ip){
	$mysqli = new mysqli('localhost', 'root', '','url_shortener');
	if($mysqli -> connect_errno){
		echo "Failed  to connect to MySQL : ". $mysqli -> connect_error;
		exit();
	}
	$ip = $mysqli->real_escape_string($ip);
	$sql = "SELECT `requests` FROM `api_log` WHERE `ip` = INET_ATON('{$ip}') AND `date` = DATE(NOW())";
	$total = $mysqli->query($sql);
	$mysqli->close();
	return ($total->num_rows == 1) ? $total->num_rows[0] : 0;
	
}
?>