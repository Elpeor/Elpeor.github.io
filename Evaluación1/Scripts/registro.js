//declaracion de constantes
var opcionesComuna ={
    Santiago:["Puente alto","La florida","La granja"],
    Araucania:["Cautín", "Angol", "Malleco"],
    Ñuble:["Bulnes", "Chillan", "Ñiquén"]
}
const dominioCorreo = ["@duoc.cl","@gmail.com","@profesor.duoc.cl"];
var users = []

function valNombreReg(){
    const characters = /^[\p{L}\s]+$/u;
    let nombre = document.getElementById("nombreReg").value;
    if(!characters.test(nombre)){
        console.log("nombre invalido, solo puede contener letras");
        return null;
    }
    console.log("nombre valido")
    return nombre;
}
// Validacion correo
function valCorreoReg(){
    let correo = document.getElementById("correoReg").value.toLowerCase();
    let mensajeError = document.getElementById("mensajeErrorReg");
    mensajeError.innerText = "";
    // Recorrer la lista de dominios validos
    for(let i=0; i<dominioCorreo.length; i++){
        if(correo.endsWith(dominioCorreo[i])){
            console.log(correo + " valido");
            return correo;
        }
    }
    // Si no se encuentra mostrar error en pantalla y retornar falso
    console.log(correo + " no valido");
    mensajeError.innerText = "Correo no valido, debe terminar en @duoc.cl, @gmail.com o @profesor.duoc.cl";
    return null;
}
function valPasswordReg(){
    //Lista de caracteres especiales
    const specialChar = /[-_!#$&.,*+|¡¿?'()]/;
    var pass1 = document.getElementById("pass1Reg").value;
    var pass2 = document.getElementById("pass2Reg").value;
    // Condicion de contraseñas iguales
    if(pass1 != pass2){
        console.log("Contraseñas no coinciden");
        return null;
    }
    // Si contraseña no contiene caracteres especiales retorna null
    if(!specialChar.test(pass1)){
        console.log("Contraseña debe contener algun caracter especial");
        return null;
    }
    return pass2;
}
document.getElementById("Registro").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    var data = Object.fromEntries(formData);
    valNombreReg(data["nombreReg"])
    valCorreoReg(data["correoReg"])
    valPasswordReg(data["pass1Reg"])
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