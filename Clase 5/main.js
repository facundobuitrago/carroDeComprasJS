/* let nombre = "pepito";
let edad = 45;
let direccion = "AV"; */

/* 
estructura de un objeto

{clave1: valor 1, cavle2: valor 2, ..., calven: valorm};
*/

// const persona = {
//     nombre: "pepito", 
//     edad: 45, 
//     direccion: "AV"
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["direccion"]);
// console.log(persona["edad"]);

// let propiedad = prompt("Ingrtese la propiedad que quieres consultar del objeto");
// alert(persona[propiedad]);

// el punto busca literalmente en el objeto lo que hay despues de el
//los corchetes reemplazan la variable antes de buscar en el objeto

// function Persona(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;

// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 55, "AV1");
// console.log(persona1);
// console.log(persona2.nombre);

// function Persona(info){
//     this.nombre = info.nombre;
//     this.edad = info.edad;
//     this.direccion = info.direccion;
//     this.altura = info.altura;
//     this.peso = info.peso;

// }

// const persona1 = new Persona({
//     peso: 45,
//     altura: 180,
//     nombre: "pepito",
//     direccion: "AV",
//     edad: 45,
// });

// console.log(persona1);

class Producto {
    constructor(nombre, precio, imagen,cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.cantidad = cantidad;
    }
  
    vender() {
      this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    }
    comprar() {
        this.cantidad += 1; // this.cantidad = this.cantidad + 1
      }
  }
  
  const producto1 = new Producto(
    "Nintendo",
    1000,
    "http:as.d,fjhasf",
    5,
  );
  
  console.log(producto1);
  producto1.vender();
  console.log(producto1);
  producto1.comprar();
  console.log(producto1);

  
