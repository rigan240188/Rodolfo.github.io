import { auth } from "./firebase.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

window.login = function(){

let correo = document.getElementById("correo").value
let password = document.getElementById("password").value

signInWithEmailAndPassword(auth, correo, password)
.then(() => {

alert("Acceso correcto")
window.location.href = "solicitudes.html"

})
.catch(() => {

alert("Usuario o contraseña incorrectos")

})

}