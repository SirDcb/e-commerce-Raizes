let modoRegistro = false;

function alternarFormulario() {
  modoRegistro = !modoRegistro;

  const titulo = document.getElementById("form-title");
  const boton = document.getElementById("boton-enviar");
  const extra = document.getElementById("registro-extra");
  const linkTexto = document.getElementById("cambiar-formulario");

  if (modoRegistro) {
    titulo.textContent = "Registro";
    boton.textContent = "Registrarse";
    extra.classList.remove("oculto");
    linkTexto.innerHTML = '¿Ya tienes cuenta? <a href="#" onclick="alternarFormulario()">Inicia sesión aquí</a>';
  } else {
    titulo.textContent = "Iniciar Sesión";
    boton.textContent = "Ingresar";
    extra.classList.add("oculto");
    linkTexto.innerHTML = '¿No tienes cuenta? <a href="#" onclick="alternarFormulario()">Regístrate aquí</a>';
  }
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (modoRegistro) {
    const email = document.getElementById("email").value;
    alert(`Registrado:\nUsuario: ${usuario}\nCorreo: ${email}`);
  } else {
    alert(`Inicio de sesión:\nUsuario: ${usuario}`);
  }

  // Aquí podrías enviar los datos al backend con fetch/AJAX
});
