// Este código de JavaScript permite a un usuario seleccionar productos y agregarlos a un carrito de compras a través de un proceso interactivo. Luego, el usuario puede elegir el método de pago (efectivo o tarjeta) y se muestra el detalle de la compra, incluyendo el total a pagar y cualquier descuento aplicado. El programa permite al usuario realizar múltiples compras.

let saludo = alert(
  "Bienvenido a la Cerrajería Online! A continuación, podrá elegir las llaves a copiar."
);

function realizarCompra() {
  let total = 0;

  while (true) {
    let opcionesProductos =
      "Productos disponibles:\n" +
      "1. Llave Yale - $1500\n" +
      "2. Llave Doble Paleta - $1500\n" +
      "3. Llave Computada - $3500\n" +
      "4. Llave Cruz - $2000\n" +
      "5. Llave Auto - $4500\n";

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

    let precioProducto = 0;

    switch (seleccion) {
      case "1":
        precioProducto = 1500;
        break;
      case "2":
        precioProducto = 1500;
        break;
      case "3":
        precioProducto = 3500;
        break;
      case "4":
        precioProducto = 2000;
        break;
      case "5":
        precioProducto = 4500;
        break;
      default:
        alert("Selección no válida. Por favor, ingrese un número válido.");
        continue;
    }

    total += precioProducto;
    alert(`Llave seleccionada - $${precioProducto}.`);
  }

  return total;
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
const metodoPago = prompt("¿Desea pagar en efectivo o tarjeta?");
const { total: totalConDescuento, descuento } = calcularDescuento(
  total,
  metodoPago
);

alert(`Total a pagar: $${totalConDescuento}`);
alert(`Descuento aplicado: $${descuento}`);
alert("Gracias por su compra");
