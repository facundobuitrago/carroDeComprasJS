// Este código de JavaScript permite a un usuario seleccionar productos y agregarlos a un carrito de compras a través de un proceso interactivo. Luego, el usuario puede elegir el método de pago (efectivo o tarjeta) y se muestra el detalle de la compra, incluyendo el total a pagar y cualquier descuento aplicado. El programa permite al usuario realizar múltiples compras.


let saludo = alert("Bienvenido a la Cerrajeria Online! a continuación podra elegir las llaves a copiar ");
  
  const productos =  [
    {nombre: "Llave Yale", precio: 1500},
    {nombre: "Llave Doble Paleta", precio: 1500},
    {nombre: "Llave Computada", precio: 3500},
    {nombre: "Llave Cruz", precio: 2000},
    {nombre: "Llave Auto", precio: 4500},
 ]

function realizarCompra() {
  const carrito = [];
  let total = 0;

  while (true) {
    let opcionesProductos = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
      opcionesProductos += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }

    const seleccion = prompt(opcionesProductos + "Seleccione el modelo de llave (ingrese el número) o escriba 'pagar' para finalizar la compra:");

    if (seleccion.toLowerCase() === "pagar") {
      if (carrito.length === 0) {
        alert("El carrito está vacío. Seleccione algún modelo de llave.");
        continue; 
      }
      break;
    }

    const indice = parseInt(seleccion) - 1;

    if (indice >= 0 && indice < productos.length) {
      carrito.push(productos[indice]);
      total += productos[indice].precio;
      alert(`"${productos[indice].nombre}" se ha añadido al carrito.`);
    } else {
      alert("Producto no válido. Por favor, seleccione un número válido.");
    }
  }

  return { carrito, total };
}

function calcularDescuento(total, metodoPago) {
  if (metodoPago.toLowerCase() === "efectivo") {
    const descuento = total * 0.2;
    total -= descuento;
    return { total, descuento };
  } else {
    return { total, descuento: 0 };
  }
}

const compra = realizarCompra();
const carrito = compra.carrito;
const total = compra.total;
const metodoPago = prompt("¿Desea pagar en efectivo o tarjeta?");
const { total: totalConDescuento, descuento } = calcularDescuento(total, metodoPago);



let listaProductos = "Productos en el carrito:\n";
for (const producto of carrito) {
  listaProductos += `- ${producto.nombre} - $ ${producto.precio}\n`;
}

alert(listaProductos);
alert(`Total de productos: ${carrito.length}`);
alert(`Total a pagar: $ ${totalConDescuento}`);
alert(`Descuento aplicado: $ ${descuento}`);
alert(`Gracias por su compra`);
