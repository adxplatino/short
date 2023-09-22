function rotarPalabrasClave() {
const palabrasClave = [
"#gsc.tab=0&gsc.q=estudiar%20mba",  
"#gsc.tab=0&gsc.q=ranking%20mba%20latinoamérica%202023",
"#gsc.tab=0&gsc.q=mejores%20mba%20españa",
"#gsc.tab=0&gsc.q=ranking%20mba%202023",
"#gsc.tab=0&gsc.q=ranking%20mba%20latinoamérica%20qs",
"#gsc.tab=0&gsc.q=mejores%20mba%20del%20mundo",
"#gsc.tab=0&gsc.q=ranking%20mba%20argentina",
"#gsc.tab=0&gsc.q=mejores%20mba%20online%20latinoamérica",
"#gsc.tab=0&gsc.q=ucema%20mba%20ranking",
"#gsc.tab=0&gsc.q=estudiar%20mba%20online",
"#gsc.tab=0&gsc.q=egade%20mba%20online",
"#gsc.tab=0&gsc.q=mba%20online%20economico",
"#gsc.tab=0&gsc.q=master%20en%20business%20management",
"#gsc.tab=0&gsc.q=mba%20international",
"#gsc.tab=0&gsc.q=maestria%20en%20administración%20de%20empresas",
"#gsc.tab=0&gsc.q=mba%20online",
"#gsc.tab=0&gsc.q=mejores%20mba%20del%20mundo",
"#gsc.tab=0&gsc.q=mba%20finanzas",
"#gsc.tab=0&gsc.q=mba%20virtual"];

// Obtener un índice aleatorio
const indiceAleatorio = Math.floor(Math.random() * palabrasClave.length); 
// Obtener el enlace del botón
const enlace = document.getElementById("randKey");
// Agregar la palabra clave al enlace
enlace.href = palabrasClave[indiceAleatorio];
        }

// Agregar un evento de clic al botón
const boton = document.getElementById("randKey");
boton.addEventListener("click", rotarPalabrasClave);

