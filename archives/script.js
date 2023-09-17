var urls = [
  "https://www.infoproyectos.com/p/beneficios-estudiar-mba.html",
  "https://www.infoproyectos.com/p/que-es-un-mba.html",
  "https://www.infoproyectos.com/p/que-es-mba-para-que-sirve.html"
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
  if (urlActual.includes('item-2')) {
    agregarImagen('https://i.imgur.com/8jrPIqH.png');
    agregarEnlace('#', '< Descargar >');
  } else {
    agregarImagen('https://i.imgur.com/IuSBl4J.png');
    agregarEnlace('?descargar-archivo-1#item-2', '< Ver archivo >');
  }
}

if (urlActual.includes('?descargar-archivo-2')) {
  if (urlActual.includes('item-2')) {
    agregarImagen('https://i.imgur.com/8jrPIqH.png');
    agregarEnlace('https://www.infoproyectos.com/?manual-electricidad-viviendas', '< Descargar >');
  } else {
    agregarImagen('https://i.imgur.com/esVt08j.png');
    agregarEnlace('?descargar-archivo-2#item-2', '< Ver archivo >');
  }
}

if (urlActual.includes('?descargar-archivo-3')) {
  if (urlActual.includes('item-2')) {
    agregarImagen('https://i.imgur.com/8jrPIqH.png');
    agregarEnlace('https://www.infoproyectos.com/?manual-reparacion-de-celulares', '< Descargar >');
  } else {
    agregarImagen('https://i.imgur.com/6tvCcK5.png');
    agregarEnlace('?descargar-archivo-3#item-2', '< Ver archivo >');
  }
}

if (urlActual.includes('?descargar-archivo-4')) {
  if (urlActual.includes('item-2')) {
    agregarImagen('https://i.imgur.com/8jrPIqH.png');
    agregarEnlace('https://www.infoproyectos.com/?mecanica-automotriz', '< Descargar >');
  } else {
    agregarImagen('https://i.imgur.com/0ZudrUt.png');
    agregarEnlace('?descargar-archivo-4#item-2', '< Ver archivo >');
  }
}

if (urlActual.includes('?archivo-1')) {
  var randomUrls = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomUrls] + '?descargar-archivo-1';
} else if (urlActual.includes('?archivo-2')) {
  var randomUrls = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomUrls] + '?descargar-archivo-2';
} else if (urlActual.includes('?archivo-3')) {
  var randomUrls = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomUrls] + '?descargar-archivo-3';
} else if (urlActual.includes('?archivo-4')) {
  var randomUrls = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomUrls] + '?descargar-archivo-4';
}
