let listaProductos = [];
let producto_id =new URLSearchParams(window.location.search).get("id");

document.getElementById("temporal").setAttribute("id", producto_id)

// -- variables de carrito--
let listaCarrosHTML = document.querySelector(".listaCarro");
let iconoCarro = document.querySelector(".icon-cart")
let cerrarCarro = document.querySelector(".cerrar");
let body = document.querySelector("body");
let iconoCarroCantidad = document.getElementById("icon-cart-quantity");
let productosCarro = [];


iconoCarro.addEventListener("click", ()=>{
    body.classList.toggle("mostrarCarro")
})
cerrarCarro.addEventListener("click", ()=>{
    body.classList.toggle("mostrarCarro")
})

document.getElementById("agregarCarro").addEventListener("click", (event)=>{
    let posicionClick = event.target;
    if(posicionClick.classList.contains("btn-dark")){
        let productoCol = posicionClick.closest(".col");
        if(productoCol){
            let productoId = productoCol.id;
            agregarCarrito(productoId);
        }
    }
})

const agregarCarrito = (producto_id) =>{
    let posicionEnCarro = productosCarro.findIndex((value) => value.productoId == producto_id);
    if(productosCarro.length <= 0){
        productosCarro = [{
            productoId : producto_id,
            cantidad : 1
        }]
    }else if(posicionEnCarro < 0){
        productosCarro.push({
            productoId : producto_id,
            cantidad : 1
        })
    }else{
        productosCarro[posicionEnCarro].cantidad += 1;
    }
    agregarCarritoHTML();
}

const agregarCarritoHTML = () => {
    listaCarrosHTML.innerHTML = "";
    let cantidadTotal = 0;
    if(productosCarro.length > 0){
        productosCarro.forEach(produCarro=>{
            cantidadTotal += produCarro.cantidad;
            let nuevoProductoCarro = document.createElement("div");
            nuevoProductoCarro.classList.add("producto");
            nuevoProductoCarro.dataset.id = produCarro.productoId;
            let posicionProducto = listaProductos.findIndex((value) => value.id == produCarro.productoId);
            let productoInfo = listaProductos[posicionProducto];
            //productoInfo = undefined
            nuevoProductoCarro.innerHTML = `
            <div class="image">
                <img src="${productoInfo.imagen}" class="img-fluid" >
            </div>
            <div class="name">
                ${productoInfo.nombre}
            </div>
            <div class="totalPrice">$${productoInfo.precio * produCarro.cantidad}</div>
            <div class="cantidad">
                <span class="menos"><</span>
                <span>${produCarro.cantidad}</span>
                <span class="mas">></span>
            </div>
            `;
            listaCarrosHTML.appendChild(nuevoProductoCarro);
        })
    }
    iconoCarroCantidad.innerText = cantidadTotal;
}

listaCarrosHTML.addEventListener("click", (e)=>{
    let posicionClick = e.target;
    if(posicionClick.classList.contains("mas")||posicionClick.classList.contains("menos")){
        let productoId = posicionClick.parentElement.parentElement.dataset.id;
        let type = "menos";
        if(posicionClick.classList.contains("mas")){
            type = "mas";
        }
        cambiarCantidad(productoId, type);
    }
})
const cambiarCantidad = (productoId, type)=>{
    let posicionEnCarro = productosCarro.findIndex((value)=> value.productoId == productoId);
    if(posicionEnCarro >= 0){
        switch(type){
            case "mas":
                productosCarro[posicionEnCarro].cantidad += 1;
                break;
            default:
                let valor = productosCarro[posicionEnCarro].cantidad - 1;
                if(valor > 0){
                    productosCarro[posicionEnCarro].cantidad = valor;
                }else{
                    productosCarro.splice(posicionEnCarro, 1);
                }
                break;
        }
    }
    agregarCarritoHTML();
    
}




//-------------------------------------------------------------------------------


const definirProducto = (producto_id) =>{
    listaProductos.forEach(prod =>{
        if (prod.id == producto_id) {
            document.getElementById("titulo_dprod").textContent = prod.nombre
            document.getElementById("precio_dprod").textContent = "$"+prod.precio
            document.getElementById("imagen_dprod").setAttribute("src", prod.imagen)
            document.getElementById("descripcion_dprod").textContent = prod.descripcion
        }
    })
}

const initApp = () => {
    fetch("productos.json")
    .then(response => response.json())
    .then(data=>{
        listaProductos = data;
        definirProducto(producto_id);
    })
    
}
initApp();