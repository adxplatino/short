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
function agregarEnlace(src, texto) {
      var enlace = document.createElement('a');
      enlace.href = src;
      enlace.textContent = texto;
      enlace.target = '_blank';
      var container = document.getElementById('enlaceContainer');
      container.appendChild(enlace);
  }

if (urlActual.includes('?descargar-archivo-1')) {
  if (urlActual.includes('imagen-2')) {
    agregarImagen('https://i.imgur.com/E8q6w6Z.jpg');
    agregarEnlace('?descargar-archivo-1#imagen-3', 'siguiente >');
  } else if (urlActual.includes('imagen-3')) {
    agregarImagen('https://i.imgur.com/j8xqi3k.jpg');
    agregarEnlace('?descargar-archivo-1#imagen-4', 'siguiente >');
  } else if (urlActual.includes('imagen-4')) {
    agregarImagen('https://i.imgur.com/H4KN1jW.jpg');
    agregarEnlace('?descargar-archivo-1#imagen-5', 'siguiente >');
  } else if (urlActual.includes('imagen-5')) {
    agregarImagen('https://i.imgur.com/iqsA0A9.jpg');
    agregarEnlace('?descargar-archivo-1', '< ir al principio');
  } else {
    agregarImagen('https://i.imgur.com/Bsc93nB.jpg');
    agregarEnlace('?descargar-archivo-1#imagen-2', 'siguiente >');
  }
}

if (urlActual.includes('?descargar-archivo-2')) {
  if (urlActual.includes('imagen-2')) {
    agregarImagen('https://i.imgur.com/FN3CQI8.png');
    agregarEnlace('https://drive.google.com/file/d/14enwoMjZd27S5ggHymvLWqBpJRFg7fW-', '< descargar >');
  } else {
    agregarImagen('https://i.imgur.com/esVt08j.png');
    agregarEnlace('?descargar-archivo-2#imagen-2', '< ver archivo >');
  }
}

if (urlActual.includes('?descargar-archivo-3')) {
  if (urlActual.includes('imagen-2')) {
    agregarImagen('https://i.imgur.com/Swu32EI.jpg');
    agregarEnlace('?descargar-archivo-3#imagen-3', 'siguiente >');
  } else if (urlActual.includes('imagen-3')) {
    agregarImagen('https://i.imgur.com/nLOoQdC.png');
    agregarEnlace('?descargar-archivo-3#imagen-4', 'siguiente >');
  } else if (urlActual.includes('imagen-4')) {
    agregarImagen('https://i.imgur.com/Btnhg28.png');
    agregarEnlace('?descargar-archivo-3#imagen-5', 'siguiente >');
  } else if (urlActual.includes('imagen-5')) {
    agregarImagen('https://i.imgur.com/BYoSAHQ.png');
    agregarEnlace('https://drive.google.com/file/d/101xVzDec6JMbzJ7Kqa3isk3RXf7N-TSt', '<< DESCARGAR >>');
  } else {
    agregarImagen('https://i.imgur.com/eahaDme.png');
    agregarEnlace('?descargar-archivo-3#imagen-2', '< ver archivo >');
  }
}


if (urlActual.includes('?archivo-1')) {
  var randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex] + '?descargar-archivo-1';
} else if (urlActual.includes('?archivo-2')) {
  var randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex] + '?descargar-archivo-2';
} else if (urlActual.includes('?archivo-3')) {
  var randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex] + '?descargar-archivo-3';
}
