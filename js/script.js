// ===============================
// MENÚ RESPONSIVE
// ===============================

const menuIcono = document.getElementById("menuIcono");
const menuLista = document.getElementById("menuLista");

menuIcono.addEventListener("click", () => {
    menuLista.classList.toggle("activo");
});

// ===============================
// BÚSQUEDA DE PRODUCTOS
// ===============================

const buscador = document.getElementById("buscarProducto");
const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    productos.forEach(producto => {

        const contenido = producto.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }

    });

});

// ===============================
// VALIDACIÓN DEL FORMULARIO
// ===============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();

    let correo = document.getElementById("correo").value.trim();

    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === ""){

        alert("Ingrese su nombre.");

        return;

    }

    if(correo === ""){

        alert("Ingrese su correo.");

        return;

    }

    if(!correo.includes("@")){

        alert("Ingrese un correo válido.");

        return;

    }

    if(mensaje === ""){

        alert("Escriba un mensaje.");

        return;

    }

    alert("Mensaje enviado correctamente.");

    formulario.reset();

});

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnArriba.style.display = "block";

    }else{

        btnArriba.style.display = "none";

    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// EFECTO HOVER EXTRA
// ===============================

productos.forEach(producto => {

    producto.addEventListener("mouseenter", () => {

        producto.style.transition = "0.3s";

    });

});

console.log("TechZone Store cargada correctamente.");