var modificar = (listaNueva)=>{
    let eNombre = document.getElementById('nombre');
    let eEdad = document.getElementById('edad');
    let eFNacimiento = document.getElementById('fNacimiento');
    let eEmail = document.getElementById('email');
    let eTelefono = document.getElementById('telefono');
    let eGenero = document.getElementById('genero');
    let eBtnEditarUp = document.getElementById('btnEditar');

    let nombre = eNombre.value;
    let edad = eEdad.value;
    let fNacimiento = eFNacimiento.value;
    let email = eEmail.value;
    let telefono = eTelefono.value;
    let genero = eGenero.value;
    let indice = eBtnEditarUp.value;

    listaNueva[indice].nombre = nombre;
    listaNueva[indice].edad = edad;
    listaNueva[indice].fNacimiento = fNacimiento;
    listaNueva[indice].email = email;
    listaNueva[indice].telefono = telefono;
    listaNueva[indice].genero = genero;

    localStorage.setItem('alumnos',JSON.stringify(listaNueva));

    cargarTabla(listaNueva)
}

var eliminar = (listaNueva)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    lista = listaNueva.filter((a)=>a.id!=indice)
    lista = lista.map((a,index)=>{return{...a,'id':index}})

    localStorage.setItem('alumnos',JSON.stringify(lista));
    cargarTabla(lista)
}

var cargarTabla = (listaNueva)=>{
    let econtenedorTabla = document.getElementById('contenedorTabla');
    let eNombre = document.getElementById("nombre");
    let eEdad = document.getElementById("edad");
    let eFNacimiento = document.getElementById("fNacimiento");
    let eEmail = document.getElementById("email");
    let eTelefono = document.getElementById("telefono");
    let eGenero = document.getElementById("genero");

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
        render += "<button id='btnEliminar"+i+"'>Eliminar</button>"
        render += "</td>"
        render += "</tr>"
    }
    render += "</table>";
    econtenedorTabla.innerHTML = render;
    for (let i = 0; i < listaNueva.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i);
        var eBtn2 = document.getElementById("btnEliminar"+i)
        let element = listaNueva[i];
        eBtn.addEventListener('click',()=>{
            eNombre.value = element.nombre;
            eEdad.value = element.edad;
            eFNacimiento.value = element.fNacimiento;
            eEmail.value = element.email;
            eTelefono.value = element.telefono;
            eGenero.value = element.genero;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listaNueva))
        })
        eBtn2.addEventListener('click',()=>{
            eNombre.value = element.nombre;
            eEdad.value = element.edad;
            eFNacimiento.value = element.fNacimiento;
            eEmail.value = element.email;
            eTelefono.value = element.telefono;
            eGenero.value = element.genero;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listaNueva));
        })
    }
}

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
    //let alumno = {"nombre":nombre, "edad":edad, "fNacimiento":fNacimiento, "email":email, "telefono":telefono, "genero":genero};
    let listaAlumnos = localStorage.getItem('alumnos');
    let listaAntigua = JSON.parse(listaAlumnos);
    if(listaAntigua == null){
        let alumno = {"id":0, "nombre":nombre, "edad":edad, "fNacimiento":fNacimiento, "email":email, "telefono":telefono, "genero":genero}
        listaNueva = [alumno];
    }
    else{
        let alumno = {"id":listaAntigua.length, "nombre":nombre, "edad":edad, "fNacimiento":fNacimiento, "email":email, "telefono":telefono, "genero":genero}
        listaNueva = [...listaAntigua, alumno];
    }
    console.log(listaAntigua);
    console.log(listaNueva);
    localStorage.setItem('alumnos',JSON.stringify(listaNueva));
    
    cargarTabla(listaNueva)
}

var cargarDatos = ()=>{
    let listaAlumnos = localStorage.getItem('alumnos');
    let listaAntigua = JSON.parse(listaAlumnos);
    cargarTabla(listaAntigua)
}

document.getElementById('btn').addEventListener('click', registrar);
addEventListener('load',cargarDatos)