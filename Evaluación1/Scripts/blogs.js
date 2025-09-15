var blogs = [
    {"id":1, "titulo":"Monstruo de spaghetti suelto","descripcion":"Monstruo de spaghetti corre libre tras su escape de los bunkers subterraneos de chernobyl", "imagen":"IMG/espageti.png", "boton":"BOT_mon_spa"},
    {"id":2, "titulo":"Comida recalentada?","descripcion":"Se sospecha que El italiano utiliza platos pre-hechos y que los recalienta en microondas a la hora de servirlos", "imagen":"IMG/recalentao.jpg", "boton":"BOT_recal"}
];

window.localStorage.setItem("blogs",JSON.stringify(blogs))
var id_blog_html =  1;

blogs.forEach(blog =>{
        const button = document.getElementById(blog.boton)
        if (button) {
            button.addEventListener("click", function(){
                id_blog_html = blog.id
                window.localStorage.setItem("id_blog_html",id_blog_html)
                window.location.href = 'd_blog.html'
            })
        }
    })