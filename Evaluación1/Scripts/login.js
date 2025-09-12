function valUsuario(mail, pass){
    let users = JSON.parse(window.localStorage.getItem("users")|| []);
    let user = users.find(u => u.correo === mail && u.contrasena === pass);
    
    if (user){
        console.log("Usuario: "+user.correo+" logueado");
        return true;
    }else{
        console.log("Mail o password incorrectos");
        return false
    }
}

// Listener login usuario
document.getElementById("login").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    var data = Object.fromEntries(formData);

    valUsuario(data["logCorreo"], data["logPass"]);
})