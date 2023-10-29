
// Este código de JavaScript permite a un usuario seleccionar productos y agregarlos a un carrito de compras a través de un proceso interactivo. Luego, el usuario puede elegir el método de pago (efectivo o tarjeta) y se muestra el detalle de la compra, incluyendo el total a pagar y cualquier descuento aplicado. El programa permite al usuario realizar múltiples compras.
alert(
  "Bienvenido a la Cerrajería Online! A continuación, podrá elegir las llaves a copiar."
);

let productos = [
  { nombre: "Llave Yale", precio: 1500 },
  { nombre: "Llave Doble Paleta", precio: 1500 },
  { nombre: "Llave Computada", precio: 3500 },
  { nombre: "Llave Cruz", precio: 2000 },
  { nombre: "Llave Auto", precio: 4500 }
];

function realizarCompra() {
  let total = 0;

  while (true) {
    let opcionesProductos = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
      opcionesProductos += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    const seleccion = prompt(
      opcionesProductos +
        "Seleccione el modelo de llave (ingrese el número) o escriba 'pagar' para finalizar la compra:"
    );

    if (seleccion.toLowerCase() === "pagar") {
      if (total === 0) {
        alert("El carrito está vacío. Seleccione algún modelo de llave.");
        continue;
      }
      break;
    }

    let productoSeleccionado = productos.find((producto, index) => index === seleccion - 1);

    if (productoSeleccionado) {
      total += productoSeleccionado.precio;
      alert(`Llave seleccionada - $${productoSeleccionado.precio}.`);
    } else {
      alert("Selección no válida. Por favor, ingrese un número válido.");
    }
  }

  return total;
}

function obtenerMetodoPago() {
  let metodoPago;
  while (true) {
    metodoPago = prompt("¿Desea pagar en efectivo o tarjeta?");
    if (metodoPago.toLowerCase() === "efectivo" || metodoPago.toLowerCase() === "tarjeta") {
      break;
    } else {
      alert("Ese método de pago es incorrecto. Por favor, ingrese 'efectivo' o 'tarjeta'.");
    }
  }
  return metodoPago;
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

const total = realizarCompra();
const metodoPago = obtenerMetodoPago();
const { total: totalConDescuento, descuento } = calcularDescuento(total, metodoPago);

alert(`Total a pagar: $${totalConDescuento}`);
alert(`Descuento aplicado: $${descuento}`);
alert("Gracias por su compra");
