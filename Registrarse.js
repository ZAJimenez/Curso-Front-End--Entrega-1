const lname_elegido = document.getElementById("last-name-elegido");
const edad = document.getElementById("edad");
const mail_elegido = document.getElementById("mail-elegido");
const psw_creada = document.getElementById("psw-creada");
const boton_enviar_registro = document.getElementById("boton-enviar-registro");
const mensajeContainer = document.getElementById("mensaje");

const registered_mails = ["mikaGonzalez@gmail.com", "JuliSabioli@gmail.com", "ClerMartinez@gmail.com", "SolCarlos@gmail.com"];
const registered_psw = ["Scaloneta9%", "AmoACET$", "GatitosPasion12#", "ALovecraft199&"];

function RegistrarUsuaria() {
    boton_enviar_registro.addEventListener("click", () => {
        const mailValue = mail_elegido.value;
        const pswValue = psw_creada.value;
        const edadValue = parseInt(edad.value); 

        if (registered_mails.includes(mailValue)) {
            alert("¡Este mail ya está registrado!");
        } else if (edadValue < 18) {
            alert("¡Debes ser mayor de edad para registrarte!");
        } else {
           
            registered_mails.push(mailValue);
            registered_psw.push(pswValue);
          

            window.location.href = "Aportes.html";
           
        }
    });
}

RegistrarUsuaria();