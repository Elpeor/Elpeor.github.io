var opcionesComuna ={
    Santiago:["Puente alto","La florida","La granja"],
    Araucania:["Cautín", "Angol", "Malleco"],
    Ñuble:["Bulnes", "Chillan", "Ñiquén"]
}


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