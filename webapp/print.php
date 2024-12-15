<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<style>
.print {
	display:none
}
 @media print {
	.print {display:block}
	.btn-print {display:none;}
}
</style>
</head>

<body>
<button  onclick="javascript:window.print()" class="btn-print">Print</button>
<div class="print">
  <p>I will only be printed</p>
</div>
</body>
</html>