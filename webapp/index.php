<?php
	include('core/init.php');
	$errors = array();
	$message = '';
	$url_key = null;
	if (isset($_POST['url'])){
		if (strlen($_POST['url']) > 1436){
			$errors[] .= 'There is a limited number of characters for a valid URL, maximum allowed is 1436.';
		}
		if (filter_var($_POST['url'], FILTER_VALIDATE_URL) === false){
			$errors[] .= 'The URL you provided is not a valid';
		}
		if (empty($errors)){
			try{
				$url_key = Shorten_url($_POST['url']);
			} catch(Exception $e){
				$message = $e->getMessage();
				$url_key = get_url_key($_POST['url']);
			}
			
		}
	}
?>
<?php include('templates/header.php');?>
			<div class="lead">
				<div class="card border-0">
					<div class="card-body">
						<h1 class="card-title mt-3 mb-3 text-center">Make QRCODE</h1>
						<?php
						if (empty($errors) === false && $url_key === null){
								echo'<div class="d-flex justify-content-center"><ul class="">';
								foreach ($errors as $error){
									echo"<li>{$error}</li>";
								}
								echo'</ul></div>';
							} else if(isset($url_key)){
								$shortened_url = $server .'/'. $url_key;
								if($message !=''){
									echo '<div class="d-flex mb-3 text-warning justify-content-center errors">'. $message . '</div>';
								}
								echo '<div class="d-flex flex-wrap justify-content-around">';
									echo '<div class="py-5 text-center flex-column">
									Click or Copy the Link <br>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
										<path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
										<path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
									</svg>
									<a href="'.$url_key.'">'. $shortened_url .'</a></div>';
									echo '<div class="text-center">
											<h3 class="text-center">QR-CODE</h3>
											<h2 class="hidden-title">SCAN</h2>
											<div class="avatar avatar-lg d-flex justify-content-between">
												<div class="print">
													<img src="'.($QR_generator)->render($shortened_url).'"/>
												</div>
												<button onclick="javascript:window.print()" type="button" class="btn btn-sm btn-outline-secondary btn-print" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
													<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title>Icon</title><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path></svg>
													Print
												</button>
											</div>
										  </div>
									  </div>';
								
							}
						?>						
						
					</div>
					<div class="card-footer border-0">
						<div class="w-100">
							<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" class="mx-auto needs-validation" novalidate>
								<div class="input-group mb-3">
									<input type="text" name="url" class="form-control" placeholder="https://www.shorten.me" aria-label="shorten_url" aria-describedby="shorten_url">
									<button class="btn btn-outline-secondary" type="submit" value="Shorten">Shorten</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
<?php include('templates/footer.php');?>