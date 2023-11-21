document.addEventListener("DOMContentLoaded", function () {
  cargarProductos();
  mostrarCarrito(); // Muestra el carrito cuando carga
});

let carritoElemento = document.createElement("table");
document.body.appendChild(carritoElemento);

let totalElemento = document.createElement("p");
document.body.appendChild(totalElemento);

async function cargarProductos() {
  try {
    const response = await fetch("./data.json");
    const productos = await response.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

// Crear boton de pagar

let botonPagar = document.getElementById("boton-pagar");
botonPagar.addEventListener("click", () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.length === 0) {
    Swal.fire({
      icon: "error",
      title: "El carrito está vacío",
      text: "Por favor selecciona el producto deseado",
    });
  } else {
    let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    let metodoPago = document.getElementById("metodo-pago").value;

    if (metodoPago === "efectivo") {
      let descuento = parseInt(total * 0.2);
      total *= 0.8;

      Swal.fire({
        title: "Descuento Aplicado",
        text: `Se ha aplicado un descuento de 20%. El total ahora es: $${total}`,
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        mostrarResumenCompra(parseInt(total));
      });
    } else if (metodoPago === "tarjeta") {
      Swal.fire({
        title: "Pago con Tarjeta",
        text: "Redirigiendo a la pasarela de pago...",
        icon: "info",
        confirmButtonText: "Aceptar",
      }).then(() => {
        mostrarResumenCompra(parseInt(total));
      });
    }
  }
});

function mostrarResumenCompra(total) {
  Swal.fire({
    title: "Finalizar",
    text: `Total a pagar: $${parseInt(total)}`,
    icon: "success",
    confirmButtonText: "Aceptar",
  }).then(() => {
    Swal.fire({
      title: "Gracias por su compra!",
      text: "Galaxy Games",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    localStorage.removeItem("carrito");
    mostrarCarrito();
  });
}

function agregarAlCarrito(producto) {
  // Obtener el carrito actual de localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificar si el producto ya está en el carrito
  const productoExistenteIndex = carrito.findIndex((p) => p.id === producto.id);

  if (productoExistenteIndex !== -1) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    carrito[productoExistenteIndex].cantidad += 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    producto.cantidad = 1;
    carrito.push(producto);
  }

  // Actualizar el carrito en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mostrar el carrito actualizado
  mostrarCarrito();
}

function mostrarCarrito() {
  // Obtener el carrito actual de localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carritoElemento.innerHTML = "";

  carrito.forEach((producto, index) => {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;
    fila.appendChild(celdaNombre);

    let celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = `$${producto.precio} x ${producto.cantidad}`;
    fila.appendChild(celdaPrecio);

    let celdaEliminar = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
      eliminarDelCarrito(index);
    });
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);

    carritoElemento.appendChild(fila);
  });

  let total = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
  totalElemento.textContent = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (index >= 0 && index < carrito.length) {
    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
  } else {
    console.error("Índice de carrito fuera de rango");
  }
}
