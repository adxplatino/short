// Redirige a la URL destino después de un tiempo de espera
function redirigir(url) {
  window.location.href = url;
}

// Obtiene el parámetro 'url' de la URL actual
function obtenerURLParametro() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('url');
}

// Inicia el contador y redirige después de un tiempo determinado
function iniciarContador() {
  const tiempoEspera = 15; // Tiempo de espera en segundos
  const urlDestino = obtenerURLParametro();
  
  // Actualiza el contador en la página
  const contadorElemento = document.getElementById('contador');
  let segundosRestantes = tiempoEspera;
  contadorElemento.textContent = segundosRestantes;
  
  // Inicia el contador regresivo
  const contadorIntervalo = setInterval(() => {
    segundosRestantes--;
    contadorElemento.textContent = segundosRestantes;
    
    if (segundosRestantes <= 0) {
      clearInterval(contadorIntervalo);
      redirigir(urlDestino);
    }
  }, 1000);
}

// Cuando la página se carga, inicia el contador
window.onload = function() {
  iniciarContador();
};
