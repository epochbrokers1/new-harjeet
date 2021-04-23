<?php 
$path='test';

echo $file_with_path = $_SERVER['DOCUMENT_ROOT'] . "/testing/";
unlink($file_with_path);

$path = "html/testing/";
if(!rmdir($path)) {
  echo ("Could not remove $path");
}
?>