//declaracion de constantes
var opcionesComuna ={
    Santiago:["Puente alto","La florida","La granja"],
    Araucania:["Cautín", "Angol", "Malleco"],
    Ñuble:["Bulnes", "Chillan", "Ñiquén"]
}
const dominioCorreo = ["@duoc.cl","@gmail.com","@profesor.duoc.cl"];
var users = []
//
function valNombreReg(){
    let mensajeNombre = document.getElementById("mensajeNombre");
    mensajeNombre.innerText = "";
    const characters = /^[\p{L}\s]+$/u;
    let nombre = document.getElementById("nombreReg").value;
    if(!characters.test(nombre)){
        console.log("nombre invalido, solo puede contener letras");
        mensajeNombre.innerText = "El nombre solo puede contener letras y espacios";
        return null;
    }
    console.log("nombre valido")
    return nombre;
}
// Validacion correo
function valCorreoReg(){
    let correo = document.getElementById("correoReg").value.toLowerCase();
    let mensajeCorreo = document.getElementById("mensajeCorreo");
    mensajeCorreo.innerText = "";
    // Recorrer la lista de dominios validos
    for(let i=0; i<dominioCorreo.length; i++){
        if(correo.endsWith(dominioCorreo[i])){
            console.log(correo + " valido");
            return correo;
        }
    }
    // Si no se encuentra mostrar error en pantalla y retornar falso
    console.log(correo + " no valido");
    mensajeCorreo.innerText = "Correo no valido, debe terminar en @duoc.cl, @gmail.com o @profesor.duoc.cl";
    return null;
}
function valPasswordReg(){
    let mensajePass1 = document.getElementById("mensajePass1");
    mensajePass1.innerText = "";
    let mensajePass2 = document.getElementById("mensajePass2");
    mensajePass2.innerText = "";
    //Lista de caracteres especiales
    const specialChar = /[-_!#$&.,*+|¡¿?'()]/;
    var pass1 = document.getElementById("pass1Reg").value;
    var pass2 = document.getElementById("pass2Reg").value;
    // Si contraseña no contiene caracteres especiales retorna null
    if(!specialChar.test(pass1)){
        console.log("Contraseña debe contener algun caracter especial");
        mensajePass1.innerText = "La contraseña debe contener al menos un caracter especial";
        return null;
    }
     // Condicion de contraseñas iguales
    if(pass1 != pass2){
        console.log("Contraseñas no coinciden");
        mensajePass2.innerText = "Las contraseñas no coinciden";
        return null;
    }
    return pass2;
}

function valRegistro(){
    let nombre = valNombreReg();
    let correo = valCorreoReg();
    let password = valPasswordReg();
    let mensajeReg = document.getElementById("mensajeReg");
    mensajeReg.innerText = "";
    if(nombre && correo && password){
        console.log("formulario valido");
        mensajeReg.innerText = "Registro exitoso";
        users.push({
        nombre: nombre,
        correo: correo,
        password: password
        });
        return true;
    }
    console.log("formulario invalido");
    mensajeReg.innerText = "Registro invalido, revise los campos";
    return false;
}

document.getElementById("Registro").addEventListener("submit", function(e){
    e.preventDefault();
    if (valRegistro()){
        window.localStorage.setItem("users", JSON.stringify(users));
        e.target.reset();
    }
    

})
// Listener para select region y comunas
document.getElementById("sel_region").addEventListener("change", function(e){
    var sel_comuna = document.getElementById("sel_comuna")
    var Optsel = e.target.value;
    
    if (Optsel !== "null"){
        if (sel_comuna.length <= 1){
            opcionesComuna[Optsel].forEach(item => {
                var opcion = document.createElement('option')
                opcion.value = item.toLowerCase();
                opcion.textContent = item;
                sel_comuna.appendChild(opcion);
            });
            
        }else{
            for (var i = sel_comuna.length - 1; i >= 1; i--) {
            sel_comuna.remove(i);
        }
        opcionesComuna[Optsel].forEach(item => {
                var opcion = document.createElement('option')
                opcion.value = item.toLowerCase();
                opcion.textContent = item;
                sel_comuna.appendChild(opcion);
            });
        }
    }else{
        for (var i = sel_comuna.length - 1; i >= 1; i--) {
            sel_comuna.remove(i);
        }
    }

});