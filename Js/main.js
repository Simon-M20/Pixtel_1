import alerta from "./modules/alert.js"
import hamburgerBtn from "./modules/hamburger_btn.js"


//DOMContentLoaded
document.addEventListener("DOMContentLoaded", e => {
    console.log(alerta)
    hamburgerBtn(".panel-btn", ".panel", ".nav-bar a")
})