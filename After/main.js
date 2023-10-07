/* let numero1 = Number(prompt("Ingrese un numero"));
let suma = 0;

for (let i = 0; i < 10; i ++){
    let numero2 = Number(prompt("Ingrese un numero a sumar"));
    suma = numero1 + numero2;
    alert(suma);
}
 */


let texto = prompt("Ingrese un texto");
let resultado = texto;
let textoConcatenar = " ";

while ( textoConcatenar != "ESC"){
    textoConcatenar = prompt("Ingrese texto a concatenar");
    resultado = (`${resultado} ${textoConcatenar}`);
    alert(resultado);
} 


// let numero = 6;
// let primo = true;

// for( let i = 2; i < numero; i++){
//     if(numero % i === 0){
//         primo = false;
//         break;
//     }
// }       

if(primo) {
    console.log("El numero es primo");
}else{
    console.log("El numero no es primo");
}