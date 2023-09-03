var urls = [
  "https://www.infoproyectos.com/p/cost-health-insurance-family.html",
  "https://www.infoproyectos.com/p/right-age-purchase-health-insurance.html",
  "https://www.infoproyectos.com/p/tips-choosing-right-insurance-company.html"
];

var urlActual = window.location.href;

// Función para crear y agregar una imagen
function agregarImagen(src) {
  var imagen = document.createElement("img");
  imagen.src = src;
  var divImagenPost = document.getElementById("imagen-post");
  divImagenPost.appendChild(imagen);
}
// Función para crear y agregar un enlace
function agregarEnlace(src) {
  var enlace = document.createElement('a');
  enlace.href = src;
  enlace.textContent = 'SIGUIENTE >>>>';
  var container = document.getElementById('enlaceContainer');
  container.appendChild(enlace);
}  

if (urlActual.includes('?descargar-archivo-1')) {
  if (urlActual.includes('imagen-2')) {
    agregarImagen('https://i.imgur.com/MOuDyxK.jpg');
    agregarEnlace('?descargar-archivo-1?imagen-3');
  } else if (urlActual.includes('imagen-3')) {
    agregarImagen('https://i.imgur.com/SYqTa4C.jpg');
    agregarEnlace('?descargar-archivo-1?imagen-4');
  } else if (urlActual.includes('imagen-4')) {
    agregarImagen('https://i.imgur.com/PF2a6LN.jpg');
    agregarEnlace('?descargar-archivo-1?imagen-5');
  } else if (urlActual.includes('imagen-5')) {
    agregarImagen('https://i.imgur.com/JnwiHJU.jpg');
    agregarEnlace('?descargar-archivo-1');
  } else {
    agregarImagen('https://i.imgur.com/0qN7zxE.jpg');
    agregarEnlace('?descargar-archivo-1?imagen-2');
  }
} 

if (urlActual.includes('?archivo-1')) {
  var randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex] + '?descargar-archivo-1';
} else if (urlActual.includes('?archivo-2')) {
  // Redirigir a una URL aleatoria
  var randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex] + '?descargar-archivo-2';
} else if (urlActual.includes('?archivo-3')) {
  // Redirigir a una URL aleatoria
  var randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex] + '?descargar-archivo-3';
}
