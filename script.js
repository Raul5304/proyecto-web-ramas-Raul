document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");

    titulo.addEventListener("click", () => {
        titulo.textContent = "Has hecho clic en el título";
        titulo.style.color = "blue";
    });
});
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
    alert("Botón pulsado correctamente");
});
