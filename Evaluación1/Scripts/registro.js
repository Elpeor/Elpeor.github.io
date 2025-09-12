var opcionesComuna ={
    Santiago:["Puente alto","La florida","La granja"],
    Araucania:["Cautín", "Angol", "Malleco"],
    Ñuble:["Bulnes", "Chillan", "Ñiquén"]
}
const dominioCorreo = ["@duoc.cl","@gmail.com","@profesor.duoc.cl"];

function valCorreoReg(){
    let correo = document.getElementById("correoReg").value.toLowerCase();
    let mensajeError = document.getElementById("mensajeErrorReg");

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