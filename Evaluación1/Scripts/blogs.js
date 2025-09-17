var blogs = [
    {"id":1, "titulo":"Proximamente sorteo de cena gratis","descripcion":"En los siguientes dias daremos a conocer las bases de nuestro concurso que ofrecerá una cena gratis en El Italiano. Esta cena será una experiencia única, con un menú exclusivo preparado por nuestros chefs. ¡Mantente atento a nuestras redes sociales para más detalles!", "imagen":"IMG/sorteo.jpg", "boton":"BOT_sorte"},
    {"id":2, "titulo":"El plato mejor calificado por Anthony Bourdain","descripcion":"Te contamos sobre el plato que enamoró al chef mundialmente conocido, Anthony Bourdain. El chef lo describió como una explosión de sabores y una verdadera obra maestra de la cocina italiana. Al degustar nuestra Lasagna, se siente una combinación perfecta de sabores y texturas que la hacen inolvidable. El chef Anthony Bourdain exclamó \"¡Esta lasagna es increíble!\".", "imagen":"IMG/lasagna.jpg", "boton":"BOT_recal"}
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
