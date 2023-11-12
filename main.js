
let productos = [
  {
    nombre: "Sony PlayStation 3 Super Slim 500GB Standard color charcoal black",
    precio: 110500,
    imagen: "img/consola_001.jpg",
  },
  {
    nombre: "Microsoft Xbox 360 Arcade 512MB Standard color matte white",
    precio: 200200,
    imagen: "img/consola_002.jpg",
  },
  {
    nombre: "Ps2 Slim Matrix 32gb 2 Joystick",
    precio: 103500,
    imagen: "img/consola_003.jpg",
  },
  {
    nombre: "Microsoft Xbox Series S 512GB Standard color blanco",
    precio: 122000,
    imagen: "img/consola_004.jpg",
  },
  {
    nombre: "Consola Kanji KJ-PSPX6 color negro",
    precio: 44500,
    imagen: "img/consola_005.jpg",
  },
];

productos.push({
  nombre: "Nintendo Switch Platinum 128gb Limited Edition",
  precio: 255267,
  imagen: "img/consola_009.jpg",
});

document.addEventListener("DOMContentLoaded", function () {
  // Muestra el carrito cuando carga
  mostrarCarrito();
});

let carritoElemento = document.createElement("table");
document.body.appendChild(carritoElemento);

let totalElemento = document.createElement("p");
document.body.appendChild(totalElemento);

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
        mostrarResumenCompra(total);
      });
    } else if (metodoPago === "tarjeta") {
  
      Swal.fire({
        title: "Pago con Tarjeta",
        text: "Redirigiendo a la pasarela de pago...",
        icon: "info",
        confirmButtonText: "Aceptar",
      }).then(() => {
  
        mostrarResumenCompra(total);
      });
    }
  }
});

function mostrarResumenCompra(total) {
  Swal.fire({
    title: "Finalizar",
    text: `Total a pagar: $${total}`,
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

  carrito.push(producto);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito();
}
function mostrarCarrito() {
  // Obtener el carrito actual de localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Vaciar el carrito actual
  carritoElemento.textContent = "";

  // Crear una fila de tabla para cada producto en el carrito
  carrito.forEach((producto, index) => {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;
    fila.appendChild(celdaNombre);

    let celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = `$${producto.precio}`;
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

  let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  totalElemento.textContent = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}
