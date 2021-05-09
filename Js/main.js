import alerta from "./modules/alert.js"
import hamburgerBtn from "./modules/hamburger_btn.js"
import scrollTopBtn from "./modules/scroll-to-top-btn.js"


//DOMContentLoaded
document.addEventListener("DOMContentLoaded", e => {
    console.log(alerta)
    hamburgerBtn(".panel-btn", ".panel", ".nav-bar a")
    scrollTopBtn(".scroll-top")
})
