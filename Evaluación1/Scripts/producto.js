var productos = [
    {"id":1, "nombre":"Lasagna","tipo":"pasta", "precio":"9990", "imagen":"IMG/lasagna.jpg"},
    {"id":2, "nombre":"Pizza margarita","tipo":"pizza", "precio":"7990", "imagen":"IMG/pizza.jpg"}
];

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