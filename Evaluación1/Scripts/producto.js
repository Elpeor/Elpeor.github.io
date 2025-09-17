/* obtencion de elementos HTML con id*/ 
let listaProductosHTML = document.getElementById("listaProductos");
let iconoCarroCantidad = document.getElementById("icon-cart-quantity");
// obtencion de elementos HTML con clase
let listaCarrosHTML = document.querySelector(".listaCarro");
let iconoCarro = document.querySelector(".icon-cart")
let cerrarCarro = document.querySelector(".cerrar");
let body = document.querySelector("body");
//listas 
let listaProductos = [];
let productosCarro = [];

// Listener para abrir y cerrar el carro
iconoCarro.addEventListener("click", ()=>{
    body.classList.toggle("mostrarCarro")
})
cerrarCarro.addEventListener("click", ()=>{
    body.classList.toggle("mostrarCarro")
})
// Funcion para crear productos atraves de JSON creado
const addDataToHTML = () => {
    listaProductosHTML.innerHTML = "";
    if(listaProductos.length > 0){
        listaProductos.forEach(produ =>{
            let nuevoProducto = document.createElement("div");
            //Crea un div y agrega un col(clase de bootstrap)
            nuevoProducto.classList.add("col");
            //Agrega un atributo de tipo id con el id del producto 
            nuevoProducto.dataset.id = produ.id;
            // Creacion de la carta del producto
            nuevoProducto.innerHTML = `
            <div id="producto" class="card h-100">
                <a href= "d_producto.html?id=${produ.id}">
                    <img src="${produ.imagen}" class="card-img-top" alt="">
                </a>
                <h5 class="card-title">${produ.nombre}</h5>
                <p class="card-text">$${produ.precio}</p>
                <button id="agregarCarro" class="btn btn-dark w-100">Agregar al carrito</button>
            </div>
        `;
        // Agrega la nueva carta a la lista de productos HTML
            listaProductosHTML.appendChild(nuevoProducto);
        })
    }
}
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
    carroALocal();
}

const carroALocal = () => {
    window.localStorage.setItem("productosCarrito", JSON.stringify(productosCarro))
}

const agregarCarritoHTML = () => {
    listaCarrosHTML.innerHTML = "";
    let cantidadTotal = 0;
    var precioTotal = 0;
    if(productosCarro.length > 0){
        productosCarro.forEach(produCarro=>{
            cantidadTotal += produCarro.cantidad;
            let nuevoProductoCarro = document.createElement("div");
            nuevoProductoCarro.classList.add("producto");
            nuevoProductoCarro.dataset.id = produCarro.productoId;
            let posicionProducto = listaProductos.findIndex((value) => value.id == produCarro.productoId);
            let productoInfo = listaProductos[posicionProducto];
            precioTotal += productoInfo.precio * produCarro.cantidad
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
    document.getElementById("precioTotal").textContent = "Precio total: $" + precioTotal;
    iconoCarroCantidad.innerText = cantidadTotal;
}

listaProductosHTML.addEventListener("click", (event)=>{
    let posicionClick = event.target;
    if(posicionClick.classList.contains("btn-dark")){
        let productoCol = posicionClick.closest(".col");
        if(productoCol){
            let productoId = productoCol.dataset.id;
            agregarCarrito(productoId);
        }
    }
})
listaCarrosHTML.addEventListener("click", (e)=>{
    let posicionClick = e.target;
    if(posicionClick.classList.contains("mas")||posicionClick.classList.contains("menos")){
        let productoId = posicionClick.parentElement.parentElement.dataset.id;
        let type = "menos";
        if(posicionClick.classList.contains("mas")){
            type = "mas";
        }
        cambiarCantidad(productoId, type);
        carroALocal();
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
const initApp = () => {
    fetch("productos.json")
    .then(response => response.json())
    .then(data=>{
        listaProductos = data;
        addDataToHTML();

        if (JSON.parse(window.localStorage.getItem("productosCarrito"))){
            productosCarro = JSON.parse(window.localStorage.getItem("productosCarrito"))
            agregarCarritoHTML()
        }

    })
}
initApp();



/*
window.localStorage.setItem("productos",JSON.stringify(productos))

function getNombre(id){
    var nom = "REDACTED"
    productos.forEach(prod =>{
        if (prod.id == id){
            console.log(prod.nombre)
            nom = prod.nombre
        }
    })

    return nom
}

function getPrecio(id){
    var pre = "REDACTED"
    productos.forEach(prod =>{
        if (prod.id == id){
            console.log(prod.pre)
            pre = prod.precio
        }
    })

    return pre
}
function getIMG(id){
    console.log("a")
    var img = "IMG/redacted.png"
    productos.forEach(prod =>{
        if (prod.id == id){
            console.log(prod.img)
            img = prod.imagen
        }
    })

    return img
}




document.getElementById("IMG_pizza1").setAttribute("src", getIMG(2))
document.getElementById("IMG_pizza1").setAttribute("width", "250")
document.getElementById("IMG_pizza1").setAttribute("heigtht", "100")
document.getElementById("PRE_pizza1").textContent = "$"+getPrecio(2)
document.getElementById("NOM_pizza1").textContent = getNombre(2)


document.getElementById("IMG_lasagna1").setAttribute("src", getIMG(1))
document.getElementById("IMG_lasagna1").setAttribute("width", "250")
document.getElementById("IMG_lasagna1").setAttribute("heigtht", "100")
document.getElementById("PRE_lasagna1").textContent = "$"+getPrecio(1)
document.getElementById("NOM_lasagna1").textContent = getNombre(1)



productos.forEach(prod =>{
        const button = document.getElementById(prod.boton)
        if (button) {
            button.addEventListener("click", function(){
                id_html = prod.id
                window.localStorage.setItem("id_html",id_html)
                window.location.href = 'd_producto.html'
            })
        }
    })*/