<?php
$conexion = new mysqli("localhost", "root", "", "usuariosdb");

if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

$sql = "SELECT * FROM usuarios WHERE usuario='$usuario'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
  $row = $resultado->fetch_assoc();
  if (password_verify($clave, $row['clave'])) {
    echo "Inicio de sesión exitoso";
  } else {
    echo "Contraseña incorrecta";
  }
} else {
  echo "Usuario no encontrado";
}

$conexion->close();
?>
