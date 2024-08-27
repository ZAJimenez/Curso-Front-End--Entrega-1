for (let i=0; i<4; i++){
    let mesa= i+1;
    let nombre=prompt("¿A nombre de quién está reservada?");
    let cant=prompt("¿Cuántos comensales son?");
    alert("La mesa"+mesa+",La reserva está a nombre de:"+ nombre+", Cantidad de comensales:"+cant );

}

let nombre_elegido="Camila";
nombre_input=prompt("Ingrese nombre:");
while (nombre_input!=nombre_elegido){
    nombre_input=prompt("Nombre incorrcto. ingrese nuevamente:");
}
alert("Hola "+ nombre_input+ "!")