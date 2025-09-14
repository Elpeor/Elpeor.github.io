var d_productos = JSON.parse(window.localStorage.getItem("productos"))
var id_html = window.localStorage.getItem("id_html")


function getNombre(id){
    var nom = "REDACTED"
    d_productos.forEach(prod =>{
        if (prod.id == id){
            console.log(prod.nombre)
            nom = prod.nombre
        }
    })

    return nom
}

function getPrecio(id){
    var pre = "REDACTED"
    d_productos.forEach(prod =>{
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
    d_productos.forEach(prod =>{
        if (prod.id == id){
            console.log(prod.img)
            img = prod.imagen
        }
    })

    return img
}




document.getElementById("IMG_producto").setAttribute("src", getIMG(id_html))
document.getElementById("IMG_producto").setAttribute("width", "250")
document.getElementById("IMG_producto").setAttribute("heigtht", "100")
document.getElementById("PRE_producto").textContent = "$"+getPrecio(id_html)
document.getElementById("NOM_producto").textContent = getNombre(id_html)