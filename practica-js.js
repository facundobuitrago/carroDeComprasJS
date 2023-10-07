/* let entrada = prompt("Ingrese el usuario");

while(entrada != "pepito"){
    alert("Usuario incorrecto");

    entrada = prompt("Ingrese el usuario");
}

alert("BIENVENIDO");
 */

let moneda = "ars";

switch(moneda){
    case "ars":
        console.log("moneda Argentina");
        case "cop":
            console.log("Moneda de Colombia");
            default:
                console.log("moneda no reconocida");
                break;
}