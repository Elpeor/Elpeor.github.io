var blogs = [
    {"id":1, "titulo":"Pronto a anunciarse ganador del concurso","descripcion":"En unas horas se anunciará al ganador del sortéo de un mes gratis de pedidos en El Italiano", "imagen":"IMG/sorteo.jpg", "boton":"BOT_sorte"},
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