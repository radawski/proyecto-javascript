// VARIABLES
let productos = [];
let carrito = [];


// FUNCIONES

// Cargar productos desde productos.json
fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data;
    actualizarProductos();
  })
  .catch(error => console.error('Error al cargar productos:', error));


function actualizarProductos() {
  const contenedorProductos = document.getElementById('productos');
  contenedorProductos.innerHTML = '';
  productos.forEach((producto, index) => {
    const item = document.createElement('div');
    item.classList.add('col-md-4');
    item.innerHTML = `
      <div class="card mb-3">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(item);
  });
}

function agregarAlCarrito(index) {
  const producto = productos[index];
  const productoEnCarrito = carrito.find(p => p.titulo === producto.titulo);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarEnLocalStorage();
  actualizarCarrito();
}

function actualizarCarrito() {
  const contenedorCarrito = document.getElementById('carrito');
  contenedorCarrito.innerHTML = ''; // Limpiar carrito
  let subtotal = 0;
  carrito.forEach(producto => {
    const item = document.createElement('div');
    item.classList.add('col-md-4');
    item.innerHTML = `
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${producto.imagen}" class="card-img" alt="${producto.titulo}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text"><strong>$${producto.precio}</strong></p>
              <div class="d-flex justify-content-between">
                <input type="number" class="form-control w-25" value="${producto.cantidad}" min="1" onchange="cambiarCantidad(event, '${producto.titulo}')">
                <button class="btn btn-danger" onclick="eliminarDelCarrito('${producto.titulo}')">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    contenedorCarrito.appendChild(item);
    subtotal += producto.precio * producto.cantidad;
  });
  document.getElementById('subtotal').innerText = `Subtotal: $${subtotal}`;
}

function cambiarCantidad(event, titulo) {
  const nuevaCantidad = event.target.value;
  const producto = carrito.find(p => p.titulo === titulo);
  if (producto) {
    producto.cantidad = parseInt(nuevaCantidad);
    guardarEnLocalStorage();
    actualizarCarrito();
  }
}

function eliminarDelCarrito(titulo) {
  const index = carrito.findIndex(p => p.titulo === titulo);
  if (index > -1) {
    carrito.splice(index, 1);
    guardarEnLocalStorage();
    actualizarCarrito();
  }
}

// Funcion para simular la compra
document.addEventListener('DOMContentLoaded', function () {
  const reload = document.getElementById('reload');

  reload.addEventListener('click', function () {
      Swal.fire({
          title: 'Formulario de Compra',
          html: `
              <div class="form-group">
                  <label for="name">Nombre Completo</label>
                  <input type="text" id="name" class="swal2-input" value="Juan Pérez">
              </div>
              <div class="form-group">
                  <label for="email">Correo Electrónico</label>
                  <input type="email" id="email" class="swal2-input" value="juan.perez@ejemplo.com">
              </div>
              <div class="form-group">
                  <label for="address">Dirección</label>
                  <input type="text" id="address" class="swal2-input" value="Calle Falsa 123, Ciudad Fantasía">
              </div>
              <div class="form-group">
                  <label for="paymentMethod">Método de Pago</label>
                  <select id="paymentMethod" class="swal2-input">
                      <option value="credit_card">Tarjeta de Crédito</option>
                      <option value="paypal">PayPal</option>
                      <option value="bank_transfer">Transferencia Bancaria</option>
                  </select>
              </div>
          `,
          focusConfirm: false,
          preConfirm: () => {
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const address = document.getElementById('address').value;
              const paymentMethod = document.getElementById('paymentMethod').value;

              if (!name || !email || !address || !paymentMethod) {
                  Swal.showValidationMessage('Por favor, complete todos los campos.');
                  return false;
              }

              return { name, email, address, paymentMethod };
          }
      }).then((result) => {
          if (result.isConfirmed) {
              const { name, email, address, paymentMethod } = result.value;
              Swal.fire(
                  'Compra Realizada',
                  `¡Compra realizada con éxito!<br><br>
                  <strong>Detalles:</strong><br>
                  Nombre: ${name}<br>
                  Email: ${email}<br>
                  Dirección: ${address}<br>
                  Método de Pago: ${paymentMethod}`,
                  'success'
              ).then(() => {
                  // Limpiar el carrito y recargar la página
                  carrito = [];
                  localStorage.clear();
                  location.reload();
              });
          }
      });
  });
});


// Función para guardar el carrito en localStorage
function guardarEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }
}

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarDesdeLocalStorage();
});

