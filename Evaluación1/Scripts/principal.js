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