document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;
    const email = document.getElementById("email")?.value;
  
    const datos = new FormData();
    datos.append("usuario", usuario);
    datos.append("clave", clave);
    if (modoRegistro) datos.append("email", email);
  
    const url = modoRegistro ? "registro.php" : "login.php";
  
    fetch(url, {
      method: "POST",
      body: datos,
    })
      .then(res => res.text())
      .then(data => {
        alert(data);
      })
      .catch(err => {
        console.error(err);
        alert("Error en la petición");
      });
  });
  