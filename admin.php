<?php
session_start();
if(!isset($_SESSION["login"])){
echo "Hatalı giriş yaptınız.";
}else{
header("Refresh: 2; url=hakkimda.html");
}
?>