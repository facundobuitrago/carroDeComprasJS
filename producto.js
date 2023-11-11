productos.forEach((producto, index) => {
  let tarjeta = document.createElement('div');
  tarjeta.className = 'card';
  tarjeta.style.width = '18rem'; // Ajuste al ancho original de la tarjeta

  let imagen = document.createElement('img');
  imagen.className = 'card-img-top';
  imagen.alt = producto.nombre;
  imagen.src = producto.imagen || '...';
  imagen.style.height = '230px'; // Mantenemos la altura del estilo original
  imagen.style.objectFit = 'contain'; // Estilo original

  tarjeta.appendChild(imagen);

  let cuerpoTarjeta = document.createElement('div');
  cuerpoTarjeta.className = 'card-body';

  let titulo = document.createElement('h5');
  titulo.className = 'card-title';
  titulo.innerText = producto.nombre;
  cuerpoTarjeta.appendChild(titulo);

  let texto = document.createElement('p');
  texto.className = 'card-text';
  texto.innerText = 'Llega gratis mañana'; // Texto del estilo original
  cuerpoTarjeta.appendChild(texto);

  let lista = document.createElement('ul');
  lista.className = 'list-group list-group-flush';

  let precio = document.createElement('li');
  precio.className = 'list-group-item';
  precio.innerText = `$${producto.precio}`;
  lista.appendChild(precio);

  tarjeta.appendChild(lista);

  let botonCarrito = document.createElement('a');
  botonCarrito.href = '#';
  botonCarrito.className = 'card-link';
  botonCarrito.innerText = 'Añadir al carrito';
  cuerpoTarjeta.appendChild(botonCarrito);

  tarjeta.appendChild(cuerpoTarjeta);

  document.getElementById('productos').appendChild(tarjeta);

  botonCarrito.addEventListener('click', function() {
    agregarAlCarrito(producto);
  });
  
  cuerpoTarjeta.appendChild(botonCarrito);
  
  tarjeta.appendChild(cuerpoTarjeta);
  
  document.getElementById('productos').appendChild(tarjeta);
});
