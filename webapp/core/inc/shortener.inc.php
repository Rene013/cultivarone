<?php
// gets the total number of URLS in the table.

function get_total_urls(){
	$mysqli = new mysqli('localhost', 'root', '','url_shortener');
	if($mysqli -> connect_errno){
		echo "Failed  to connect to MySQL : ". $mysqli -> connect_error;
		exit();
	}
	$total = $mysqli->query('SELECT COUNT(`url_key`) FROM `urls`');
	$mysqli->close();
	return (int)$total->fetch_array()[0];
}
// gets the url for the given key
function get_url($url_key){
	$mysqli = new mysqli('localhost', 'root', '','url_shortener');
	if($mysqli -> connect_errno){
		echo "Failed  to connect to MySQL : ". $mysqli -> connect_error;
		exit();
	}
	$url_key = $mysqli->real_escape_string($url_key);
	$result = $mysqli->query("SELECT `url` FROM `urls` WHERE `url_key` = '{$url_key}'");
	$mysqli->close();
	$obj = $result->fetch_object();
	return $obj->url;
}
// gets the url if exist
function get_url_key($url){
	$mysqli = new mysqli('localhost', 'root', '','url_shortener');
	if($mysqli -> connect_errno){
		echo "Failed  to connect to MySQL : ". $mysqli -> connect_error;
		exit();
	}
	$url = $mysqli->real_escape_string($url);
	$result = $mysqli->query("SELECT `url_key` FROM `urls` WHERE `url` = '{$url}'");
	$mysqli->close();
	$obj = $result->fetch_object();
	return $obj->url_key;
}
// adds a new url to the table, returning its key

function shorten_url($url){
	$mysqli = new mysqli('localhost', 'root', '','url_shortener');
	if($mysqli -> connect_errno){
		echo "Failed  to connect to MySQL : ". $mysqli -> connect_error;
		exit();
	}
	$url = $mysqli->real_escape_string($url);
	$sql = "SELECT `url_key` FROM `urls` WHERE `url` = '{$url}'";
	$result = $mysqli->query($sql);
	if($result->num_rows == 1){
		throw new Exception("URL already exist");
		return $result->free_result();
	}

	$url_key = base_convert((string)(get_total_urls() + 1), 10, 36);
	$sql = "INSERT INTO `urls` (`url_key` , `url`) VALUES ('{$url_key}', '{$url}')";
	if($mysqli->query($sql)){
		return $url_key;
	}
	$mysqli->close();
}

?>