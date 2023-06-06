var registrar = () =>{
    let econtenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById('nombre');
    let eEdad = document.getElementById('edad');
    let eFNacimiento = document.getElementById('fNacimiento');
    let eEmail = document.getElementById('email');
    let eTelefono = document.getElementById('telefono');
    let eGenero = document.getElementById('genero');
    let nombre = eNombre.value;
    let edad = eEdad.value;
    let fNacimiento = eFNacimiento.value;
    let email = eEmail.value;
    let telefono = eTelefono.value;
    let genero = eGenero.value;
    let alumno = {"nombre":nombre, "edad":edad, "fNacimiento":fNacimiento, "email":email, "telefono":telefono, "genero":genero};
    let listaAlumnos = localStorage.getItem('alumnos');
    let listaAntigua = JSON.parse(listaAlumnos);
    if(listaAntigua == null){
        listaNueva = [alumno];
    }
    else{
        listaNueva = [...listaAntigua, alumno];
    }
    console.log(listaAntigua);
    console.log(listaNueva);
    localStorage.setItem('alumnos',JSON.stringify(listaNueva));
    render = "<table>"
    render += "<tr><th>Nombre</th><th>Edad</th><th>Fecha Nacimiento</th><th>Email</th><th>Telefono</th><th>Genero</th><th>Accion</th></tr>"
    for (let i = 0; i < listaNueva.length; i++) {
        const element = listaNueva[i];
        render += "<tr>"
        render += "<td>"+element.nombre+"</td>"
        render += "<td>"+element.edad+"</td>"
        render += "<td>"+element.fNacimiento+"</td>"
        render += "<td>"+element.email+"</td>"
        render += "<td>"+element.telefono+"</td>"
        render += "<td>"+element.genero+"</td>"
        render += "<td>"
        render += "<button id='btnEditar"+i+"'>Editar</button>"
        render += "<button>Eliminar</button>"
        render += "</td>"
        render += "</tr>"
    }
    render += "</table>";
    econtenedorTabla.innerHTML = render;
    for (let i = 0; i < listaNueva.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i);
        let element = listaNueva[i];
        eBtn.addEventListener('click',()=>{alert("Hola "+element.nombre+" Edad: "+element.edad+" que nacio el "+element.fNacimiento+" que su email es: "+element.email+", su numero es: "+element.telefono+" y su genero es: "+element.genero)})
    }
}

document.getElementById('btn').addEventListener('click', registrar)