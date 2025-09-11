var opcionesComuna ={
    Santiago:["Puente alto","La florida","La granja"],
    Araucania:["Cautín", "Angol", "Malleco"],
    Ñuble:["Bulnes", "Chillan", "Ñiquén"]
}


document.getElementById("select1").addEventListener("change", function(e){
    var select2 = document.getElementById("select2")
    var Optsel = e.target.value;
    
    if (Optsel !== "null"){
        if (select2.length <= 1){
            opcionesComuna[Optsel].forEach(item => {
                var opcion = document.createElement('option')
                opcion.value = item.toLowerCase();
                opcion.textContent = item;
                select2.appendChild(opcion);
            });
            
        }else{
            for (var i = select2.length - 1; i >= 1; i--) {
            select2.remove(i);
        }
        opcionesComuna[Optsel].forEach(item => {
                var opcion = document.createElement('option')
                opcion.value = item.toLowerCase();
                opcion.textContent = item;
                select2.appendChild(opcion);
            });
        }
    }else{
        return false;
    }

});