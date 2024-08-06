// variables
const productos = [
  {
    titulo: "Bestiario - Julio Cortazar",
    imagen: "img/bestiario Cortazar.webp",
    precio: 49900
  },
  {
    titulo: "Cuentos de amor de locura y de muerte - Horacio Quiroga",
    imagen: "img/Cuentos de amor de locura y de muerte by Horacio Quiroga.webp",
    precio: 4550
  },
  {
    titulo: "El Aleph - Jorge Luis Borges",
    imagen: "img/El Aleph by Jorge Luis Borges.webp",
    precio: 23669
  },
  {
    titulo: "El Tunel - Ernesto Sabato",
    imagen: "img/el tunel.webp",
    precio: 12300
  },
  {
    titulo: "Ficciones - Jorge Luis Borges",
    imagen: "img/Ficciones by Jorge Luis Borges.webp",
    precio: 14299
  },
  {
    titulo: "Martín Fierro - José Hernández",
    imagen: "img/Martín Fierro by José Hernández.webp",
    precio: 3850
  },
  {
    titulo: "Operación Masacre - Rodolfo Walsh",
    imagen: "img/Operación Masacre by Rodolfo Walsh.webp",
    precio: 12500
  },
  {
    titulo: "Rayuela - Julio Cortázar",
    imagen: "img/Rayuela by Julio Cortázar.webp",
    precio: 23000
  },
  {
    titulo: "Toda Mafalda - Quino",
    imagen: "img/Toda Mafalda by Quino.webp",
    precio: 33000
  }
];

let carrito = [];


// funciones
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

// funcion para simular compra (reload a la pagina)
const reload = document.getElementById("reload");

reload.addEventListener("click", () => {
  carrito=[];
  localStorage.clear();
  location.reload();
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