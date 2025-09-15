var d_blog = JSON.parse(window.localStorage.getItem("blogs"))
var id_blog_html = window.localStorage.getItem("id_blog_html")


function getTitulo(id){
    var tit = "REDACTED"
    d_blog.forEach(blog =>{
        if (blog.id == id){
            console.log(blog.titulo)
            tit = blog.titulo
        }
    })

    return tit
}

function getDescripcion(id){
    var des = "REDACTED"
    d_blog.forEach(blog =>{
        if (blog.id == id){
            console.log(blog.des)
            des = blog.descripcion
        }
    })

    return des
}
function getIMG(id){
    console.log("a")
    var img = "IMG/redacted.png"
    d_blog.forEach(blog =>{
        if (blog.id == id){
            console.log(blog.img)
            img = blog.imagen
        }
    })

    return img
}




document.getElementById("IMG_blog").setAttribute("src", getIMG(id_blog_html))
document.getElementById("TIT_blog").textContent = getTitulo(id_blog_html)
document.getElementById("DES_blog").textContent = getDescripcion(id_blog_html)