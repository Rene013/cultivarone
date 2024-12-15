<?php
	DEFINE('_SECURE_', 2);
	$path = dirname(__FILE__);
	require_once('vendor/autoload.php');
	include("{$path}/inc/shortener.inc.php");
	include("{$path}/inc/api.inc.php");
	$server = $_SERVER['SERVER_NAME'];
	use chillerlan\QRCode\{QRCode, QROptions};
	$options = new QROptions([
		'version' => 5,
		'outputType' => QRCode::OUTPUT_MARKUP_HTML,
		'eccLevel' => QRCode::ECC_L,
		'moduleValues' => [
			// finder
			1536 => '#A71111', // dark (true)
			6    => '#FFBFBF', // light (false)
			// alignment
			2560 => '#A70364',
			10   => '#FFC9C9',
			// timing
			3072 => '#98005D',
			12   => '#FFB8E9',
			// format
			3584 => '#003804',
			14   => '#00FB12',
			// version
			4096 => '#650098',
			16   => '#E0B8FF',
			// data
			1024 => '#4A6000',
			4    => '#ECF9BE',
			// darkmodule
			512  => '#080063',
			// separator
			8    => '#AFBFBF',
			// quietzone
			18   => '#FFFFFF',
		],
	]);
	
	$QR_generator = new QRCode();
?>