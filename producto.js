productos.forEach((producto, index) => {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'card';
    tarjeta.style.width = '20rem';
  
    let imagen = document.createElement('img');
    imagen.className = 'card-img-top';
    imagen.alt = producto.nombre;
    imagen.src = producto.imagen || '...';
    imagen.style.width = '200px'; 
    imagen.style.height = '200px';
    tarjeta.appendChild(imagen);
  
    let cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.className = 'card-body';
  
    let titulo = document.createElement('h5');
    titulo.className = 'card-title';
    titulo.innerText = producto.nombre;
    cuerpoTarjeta.appendChild(titulo);
  
    let texto = document.createElement('p');
    texto.className = 'card-text';
    texto.innerText = `Precio: $${producto.precio}`;
    cuerpoTarjeta.appendChild(texto);
  
    let boton = document.createElement('a');
    boton.href = '#';
    boton.className = 'btn btn-primary';
    boton.innerText = `Agregar ${producto.nombre} al carrito`;
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto);
    });
    cuerpoTarjeta.appendChild(boton);
  
    tarjeta.appendChild(cuerpoTarjeta);
  
    document.getElementById('productos').appendChild(tarjeta);
  });
  