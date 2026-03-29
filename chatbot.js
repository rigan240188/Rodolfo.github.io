console.log("chatbot cargado");
import { db } from "./firebase.js"
import { collection, getDocs } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const enviar = document.getElementById("enviar");

enviar.onclick = () => {

let entrada = document.getElementById("entrada")
let mensaje = entrada.value

console.log("mensaje enviado:", mensaje)

document.getElementById("mensajes").innerHTML +=
"<p><b>Tú:</b> "+mensaje+"</p>"

}
const boton = document.getElementById("abrirChat")
const chat = document.getElementById("chat")
const enviar = document.getElementById("enviar")

boton.onclick = () =>{
chat.style.display = chat.style.display === "none" ? "flex":"none"
}

enviar.onclick = async () =>{

let entrada = document.getElementById("entrada")
let mensaje = entrada.value.toLowerCase()

document.getElementById("mensajes").innerHTML +=
"<p><b>Tú:</b> "+mensaje+"</p>"

let respuesta = "No entiendo tu pregunta"

const querySnapshot = await getDocs(collection(db,"chatbot"))

querySnapshot.forEach((doc)=>{

let data = doc.data()

if(mensaje.includes(data.palabra)){
respuesta = data.respuesta
}

})

document.getElementById("mensajes").innerHTML +=
"<p><b>Bot:</b> "+respuesta+"</p>"

entrada.value=""
}
