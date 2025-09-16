let listaProductos = [];
let producto_id =new URLSearchParams(window.location.search).get("id");


const definirProducto = (producto_id) =>{
    listaProductos.forEach(prod =>{
        if (prod.id == producto_id) {
            document.getElementById("nombre_dprod").textContent = prod.nombre
            document.getElementById("precio_dprod").textContent = "$"+prod.precio
            document.getElementById("imagen_dprod").setAttribute("src", prod.imagen)
        }
    })
}

const initApp = () => {
    fetch("productos.json")
    .then(response => response.json())
    .then(data=>{
        listaProductos = data;
    })
    definirProducto(producto_id);
}
initApp();







// var d_productos = JSON.parse(window.localStorage.getItem("productos"))
// var id_html = window.localStorage.getItem("id_html")


// function getNombre(id){
//     var nom = "REDACTED"
//     d_productos.forEach(prod =>{
//         if (prod.id == id){
//             console.log(prod.nombre)
//             nom = prod.nombre
//         }
//     })

//     return nom
// }

// function getPrecio(id){
//     var pre = "REDACTED"
//     d_productos.forEach(prod =>{
//         if (prod.id == id){
//             console.log(prod.pre)
//             pre = prod.precio
//         }
//     })

//     return pre
// }
// function getIMG(id){
//     console.log("a")
//     var img = "IMG/redacted.png"
//     d_productos.forEach(prod =>{
//         if (prod.id == id){
//             console.log(prod.img)
//             img = prod.imagen
//         }
//     })

//     return img
// }




// document.getElementById("IMG_producto").setAttribute("src", getIMG(id_html))
// document.getElementById("IMG_producto").setAttribute("width", "250")
// document.getElementById("IMG_producto").setAttribute("heigtht", "100")
// document.getElementById("PRE_producto").textContent = "$"+getPrecio(id_html)
// document.getElementById("NOM_producto").textContent = getNombre(id_html)