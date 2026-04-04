import { db } from "./firebase.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

window.registrar = async function(){

let nombre = document.getElementById("nombre").value
let correo = document.getElementById("correo").value
let telefono = document.getElementById("telefono").value
let especialidad = document.getElementById("especialidad").value
let puesto = document.getElementById("puesto").value

try {

await addDoc(collection(db, "solicitudes"), {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    especialidad: especialidad,
    puesto: puesto,
    fecha: new Date()
})

alert("Registro enviado correctamente")

} catch (error) {

console.error("Error al registrar: ", error)

}

}