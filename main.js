
let productos = [
  { nombre: "Llave Yale", precio: 1500, imagen: "img/llaveYale.jpg" },
  { nombre: "Llave Doble Paleta", precio: 1500, imagen: "img/doblePaleta.jpg" },
  { nombre: "Llave Computada", precio: 3500, imagen: "img/llaveComputada.jpg" },
  { nombre: "Llave Cruz", precio: 2000, imagen: "img/llaveCruz.jpg" },
  { nombre: "Llave Auto", precio: 4500, imagen: "img/llaveAuto.jpg" },
];
document.addEventListener('DOMContentLoaded', function () {
  // Muestra el carrito al cargar la página
  mostrarCarrito();
})

let carritoElemento = document.createElement('table');
document.body.appendChild(carritoElemento);

let totalElemento = document.createElement('p');
document.body.appendChild(totalElemento);

// Crear un botón para pagar
let botonPagar = document.getElementById('boton-pagar');
botonPagar.addEventListener('click', () => {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
  } else {
    let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    if (document.getElementById('metodo-pago').value === 'efectivo') {
      total *= 0.8; 
      alert('Se ha aplicado un descuento del 20%.');
      
    }
    alert(`Total a pagar: $${total}`);
  
    Swal.fire({
      title: "Gracias por su compra!",
      text: "Cerrajeria",
      icon: "success"
      
    });
    localStorage.removeItem('carrito');
  }})

function agregarAlCarrito(producto) {
  // Obtener el carrito actual de localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  carrito.push(producto);


  localStorage.setItem('carrito', JSON.stringify(carrito));

  mostrarCarrito();
}

function mostrarCarrito() {
  // Obtener el carrito actual de localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Limpiar el carrito actual
  carritoElemento.textContent = '';

  // Crear una fila de tabla para cada producto en el carrito
  carrito.forEach((producto, index) => {
    let fila = document.createElement('tr');

    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = producto.nombre;
    fila.appendChild(celdaNombre);

    let celdaPrecio = document.createElement('td');
    celdaPrecio.textContent = producto.precio;
    fila.appendChild(celdaPrecio);

    let celdaEliminar = document.createElement('td');
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      eliminarDelCarrito(index);
    });
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);

    carritoElemento.appendChild(fila);
  });

  // Mostrar el total
  let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  totalElemento.textContent = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
  // Obtener el carrito actual de localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


  carrito.splice(index, 1);

 
  localStorage.setItem('carrito', JSON.stringify(carrito));

  mostrarCarrito()
}
