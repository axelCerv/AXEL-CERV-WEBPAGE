<?php

$destino = "axelcervantes1610@gmail.com";
$asunto = "Correo de mi sitio";

$nombre = $_POST['name'];
$correo = $_POST['e-mail'];
$telefono = $_POST['phone'];
$empresa = $_POST['empresa'];
$mensaje = $_POST['message'];

$header = "Envío desde formilario de contacto en localhost";
$mensajeCompleto = "\n Nombre: " . $nombre . "\n" ."Correo: " $correo . "\n" . "Telefono: " $telefono . "\n" . "Empresa: " $empresa . "\n" . "\n" . "Mensaje: " $mensaje; 
mail($destino, $asunto, $mensajeCompleto, $header);
header('Location: index.html');

?>