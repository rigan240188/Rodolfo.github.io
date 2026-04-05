import { db } from "./firebase.js"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const tabla = document.getElementById("tablaSolicitudes")

async function cargarSolicitudes(){

const querySnapshot = await getDocs(collection(db, "solicitudes"))

querySnapshot.forEach((doc) => {

const datos = doc.data()

tabla.innerHTML += `
<tr>
<td>${datos.nombre}</td>
<td>${datos.correo}</td>
<td>${datos.telefono}</td>
<td>${datos.especialidad}</td>
<td>${datos.puesto}</td>
</tr>
`

})

}

cargarSolicitudes()

window.buscar = async function(){

const especialidad = document.getElementById("buscarEspecialidad").value

tabla.innerHTML=""

const querySnapshot = await getDocs(collection(db, "solicitudes"))

querySnapshot.forEach((doc)=>{

const datos = doc.data()

if(especialidad=="" || datos.especialidad == especialidad){

tabla.innerHTML += `
<tr>
<td>${datos.nombre}</td>
<td>${datos.correo}</td>
<td>${datos.telefono}</td>
<td>${datos.especialidad}</td>
<td>${datos.puesto}</td>
</tr>
`

}

})

}