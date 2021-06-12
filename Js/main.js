import contactFormValidation from "./modules/form-validation.js"
import hamburgerBtn from "./modules/hamburger_btn.js"
import scrollTopBtn from "./modules/scroll-to-top-btn.js"



//DOMContentLoaded
document.addEventListener("DOMContentLoaded", e => {
    hamburgerBtn(".panel-btn", ".panel", ".nav-bar a")
    scrollTopBtn(".scroll-top")
    contactFormValidation()
    typed()
})

window.onload = function() {
    setTimeout(() => {
        let loader = document.getElementById("loader")
        loader.style.visibility = "hidden";
        loader.style.opacity = "0"
        
    }, 5000);

}

const typed = new Typed(".typed", {
    // strings: [
    //     '<i class="service">Marketing Digital</i>', 
    //     '<i class="service">Diseño de páginas Web</i>', 
    //     '<i class="service">Fotografía</i>', 
    //     '<i class="service">Desarrollo de Tienda Nube</i>'
    // ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
})

