const mensajeContainer = document.getElementById("mensaje");
const mensajeContainer2 = document.getElementById("mensaje2");
const Aporte = document.getElementById("pregunta");
const boton_enviar= document.getElementById("enviar");
const boton_volver = document.getElementById("volver");

const registered_mails=["mikaGonzalez@gmail.com", "JuliSabioli@gmail.com", "ClerMartinez@gmail.com", "SolCarlos@gmail.com"];

function mensajeBienvenida() {
    const nuevoParrafo = document.createElement("p");
    const nuevoParrafo2 = document.createElement("p");

    nuevoParrafo.textContent = "¡Hola! ¡Bienvenidx a nuestra comunidad!";
    mensajeContainer.appendChild(nuevoParrafo);

    nuevoParrafo2.textContent = "¡Ya somos " + registered_mails.length + " miembrxs!";
    mensajeContainer2.appendChild(nuevoParrafo2);
}
function enviarAporte() {
  
    const aporteValue = Aporte.value.trim();

    if (aporteValue.trim() !== "") {
        const nuevoAporte = document.createElement("p");
        nuevoAporte.innerHTML = `<i>"${aporteValue}"</i>`;

    
        mensajeContainer.appendChild(nuevoAporte);


        Aporte.value = "";
    } else {
        alert("Por favor, escribe una pregunta antes de enviar.");
    }
}

function Volver() {
    boton_volver.addEventListener("click", () => {
       
        window.location.href = "Inicio.html";
    });
}

mensajeBienvenida();  
boton_enviar.addEventListener("click", enviarAporte);   
Volver();


