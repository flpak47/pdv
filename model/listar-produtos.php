<?php

require_once "config.php";

$con = new PDO("mysql:dbname=".DB_BASE.";host=".DB_HOST.";charset=utf8", DB_USER, DB_SENHA);

$sql = "SELECT * FROM produtos";

$res = $con->query($sql);

$produtos = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($produtos); 

?>