const formulario = document.getElementById("formulario");

formulario.addEventListener('submit',mostrarDatos)

function mostrarDatos(a){
    a.preventDefault();
    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const fnacimiento = document.getElementById('fnacimiento').value
    const email = document.getElementById('email').value
    const telefono = document.getElementById('telefono').value
    const documentoRsh = document.getElementById('documentoRsh').value

    console.log(nombre,edad,fnacimiento,email,telefono,documentoRsh)
}