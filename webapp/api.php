<?php
	include('core/init.php');
	header('Content-Type: application/json');
	if(isset($_POST['lookup'])){
		echo json_encode(array(
			'url'	=>	get_url($_POST['lookup']),
			'key'	=>	$_POST['lookup'],
		));
	} else if (isset($_POST['shorten'])){
		$errors = array();
		if(get_todays_api_requests($_SERVER['REMOTE_ADDR']) > 1){
			$errors[] = 'You have exceeded the limit for free API.';
		}
		if (strlen($_POST['shorten']) > 1436){
			$errors[] = 'The is a 1436 character for URL';
		}
		if (filter_var($_POST['shorten'], FILTER_VALIDATE_URL) === false){
			$errors[] = 'Your URL does not appear to be valid.';
		}
		try{
			$key = (empty($errors)) ? shorten_url($_POST['shorten']) : false;
		} catch(Exception $e){
			$key = get_url_key($_POST['shorten']);
			$error = $e->getMessage();
		}
		echo json_encode(array(
			'url'		=>	$_POST['shorten'],
			//'key'		=>	$key,
			'errors'	=>	$errors,
		));
		
		log_api_request($_SERVER['REMOTE_ADDR']);

	} else {
		echo json_encode(array(
			'lookup'	=> 'Gets the full URL for the given key',
			'shorten'	=>	'Adds the given URL to the system.',
		));
	}
?>