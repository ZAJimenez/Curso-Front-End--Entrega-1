const boton_enviar = document.getElementById("boton-enviar");
const mail_inserted = document.getElementById("mail-variable");
const psw_inserted = document.getElementById("psw-variable");
const registered_mails=["mikaGonzalez@gmail.com", "JuliSabioli@gmail.com", "ClerMartinez@gmail.com", "SolCarlos@gmail.com"]
const registered_psw=["Scaloneta9%", "AmoACET$", "GatitosPasion12#", "ALovecraft199&"];


function IniciarSesion (){
    boton_enviar.addEventListener("click", () => {
    const mailValue=mail_inserted.value;
    const pswValue=psw_inserted.value;

    let i=registered_mails.indexOf(mailValue);  
    if (registered_mails.includes(mailValue) && registered_psw[i]==pswValue) {
        window.location.href = "Aportes.html"; 
        alert("Mail correcto y contraseñas!");
    }
    else {
        alert("Mail o contraseña incorrecta. Por favor ingrese nuevamente.");

    }
});
}
    

IniciarSesion();


