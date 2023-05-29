var registrar = () =>{
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
}

document.getElementById('btn').addEventListener('click', registrar)