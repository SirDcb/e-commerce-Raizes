<?php
$conexion = new mysqli("localhost", "root", "", "usuariosdb");

if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}


// Cifrar la clave

$usuario = $_POST['usuario'];
$clave = password_hash($_POST['clave'], PASSWORD_DEFAULT); 
$email = $_POST['email'];

$sql = "INSERT INTO usuarios (usuario, clave, email) VALUES ('$usuario', '$clave', '$email')";

if ($conexion->query($sql) === TRUE) {
  echo "Registro exitoso";
} else {
  echo "Error: " . $conexion->error;
}

$conexion->close();
?>
