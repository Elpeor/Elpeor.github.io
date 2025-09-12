// Lista con dominios de correo validos
const dominioCorreo = ["@duoc.cl","@gmail.com","@profesor.duoc.cl"];
function valNombreContacto(){
    const characters = /^[\p{L}\s]+$/u;
    let nombre = document.getElementById("contactoNombre").value;
    if(!characters.test(nombre)){
        console.log("nombre invalido, solo puede contener letras");
        return false;
    }
    console.log("nombre valido")
    return true;
}
function valCorreoContacto(){
    let correo = document.getElementById("contactoEmail").value.toLowerCase();
    let mensajeError = document.getElementById("mensajeError");

    mensajeError.innerText = "";
    // Recorrer la lista de dominios validos
    for(let i=0; i<dominioCorreo.length; i++){
        if(correo.endsWith(dominioCorreo[i])){
            console.log(correo + " valido");
            return true;
        }
    }
    // Si no se encuentra mostrar error en pantalla y retornar falso
    console.log(correo + " no valido");
    mensajeError.innerText = "Correo no valido, debe terminar en @duoc.cl, @gmail.com o @profesor.duoc.cl";
    return false;
}

document.getElementById("contactoForm").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    var data = Object.fromEntries(formData);
    valNombreContacto(data["contactoNombre"]);
    valCorreoContacto(data["contactoEmail"]);
})