function valUsuario(mail, pass){
    let mensajeLog = document.getElementById("mensajeLog");
    mensajeLog.innerText = "";
    let users = JSON.parse(window.localStorage.getItem("users")|| "[]");
    let user = users.find(u => u.correo === mail && u.password === pass);
    console.log(users);
    if (user){
        console.log("Usuario: "+user.correo+" logueado");
        mensajeLog.innerText = "Login exitoso";
        return true;
    }
    console.log("Mail o password incorrectos");
    mensajeLog.innerText = "Mail o password incorrectos";
    return false;
}

// Listener login usuario
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    var data = Object.fromEntries(formData);

    valUsuario(data["correoLog"], data["passLog"])
    e.target.reset();
    
})
let iconoCarro = document.querySelector(".icon-cart")
let cerrarCarro = document.querySelector(".cerrar");
let body = document.querySelector("body");
// Listener para abrir y cerrar el carro
iconoCarro.addEventListener("click", ()=>{
    body.classList.toggle("mostrarCarro")
})
cerrarCarro.addEventListener("click", ()=>{
    body.classList.toggle("mostrarCarro")
})