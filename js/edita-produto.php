<?php

require_once "config.php";

$id = $_POST["id"];
$nome = $_POST["produto"];
$marca = $_POST["marca"];
$categoria = $_POST["categoria"];
$sexo = $_POST["sexo"];
$preco = $_POST["preco"];

$con = new PDO("mysql:dbname=". DB_BASE .";host=". DB_HOST .";charset=utf8", DB_USER, DB_SENHA);

$sql = "UPDATE produtos 
SET sexo = '$sexo', marca = '$marca', categoria = '$categoria', nome = '$nome', preco = '$preco'  
WHERE produtos.id = $id";

$res = $con->exec($sql);

if ($res === false){
    echo "ocorreu um erro ao editar o produto";
} else {
    echo "ok";
}


?>