function getLink() {
sessionStorage.clear(setTimeout(1000));
document.getElementById("contador").style.display = "inline";
document.getElementById("downboton").style.display = "none";
let time_out = 1000;
let counter_id;
let seconds = 15;
counter_id = setInterval(update_counter_link, time_out);
function update_counter_link() {
document.getElementById('link_button').innerHTML = (--seconds);
if (!seconds) {
clearInterval(counter_id);
document.getElementById("contador").style.display = "none";
document.getElementById("linkDownload").style.display = "inline";
  }
 }
}

var keyword = [
"?manual-electricidad-viviendas",
"?contenido-vip",
"?tecnico-electricista",
"?manual-reparacion-refrigeradores",
"?antena-wifi-largo-alcance",
"?manual-reparacion-de-celulares",
"?manual-basico-excel",
"?manual-elecrticidad-basica",
"?manual-word-excel-power-point-avanzado",
"?manual-sobre-manejo-multimetro",
"?200-proyectos-carpinteria-libro",
"?1000-palabras-usadas-ingles",
"?como-ahorrar-electricidad",
"?manual-instalacion-tableros-electricos",
"?curso-reparacion-herramientas-electricas",
"?mecanica-automotriz",
"?contenido-vip"  
]

var randomUrl = [
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administracion%20de%20empresas%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20administracion%20de%20empresas%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20business%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20100%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20en%20business%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20on%20line",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20online%20international%20business",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administracion%20de%20empresas%20en%20linea",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20online%20uc",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20salud",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20en%20salud",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20online%20barato",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20barato%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=maestría%20en%20administración%20de%20empresas%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20mba%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20en%20administración%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20en%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20de%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20executive%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20en%20administracion%20y%20direccion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20master%20business%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mbamaster",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20san%20marcos",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20virtual",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20virtuales",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20finanzas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20en%20project%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=ma%20ms%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=programas%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20programas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20en%20linea",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20min",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=magister%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=posgrado%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=openmba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20business%20school",
"/p/get-download.html#gsc.tab=0&gsc.q=americas%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20business",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20ua",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20up",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20internacional",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20direccion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20retail",
"/p/get-download.html#gsc.tab=0&gsc.q=mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20social%20media",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20maestria",
"/p/get-download.html#gsc.tab=0&gsc.q=maestrias%20en%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20udc",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20global%20executive",
"/p/get-download.html#gsc.tab=0&gsc.q=mbauc",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20u%20catolica",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20estados%20unidos",
"/p/get-download.html#gsc.tab=0&gsc.q=estudiar%20mba%20en%20estados%20unidos",
"/p/get-download.html#gsc.tab=0&gsc.q=msc%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=amba%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20en%20recursos%20humanos",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20online%20ie",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20en%20business",
"/p/get-download.html#gsc.tab=0&gsc.q=digital%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20cerca%20de%20mi",
"/p/get-download.html#gsc.tab=0&gsc.q=candidate%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administracion%20de%20empresa",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20real%20madrid",
"/p/get-download.html#gsc.tab=0&gsc.q=micromba",
"/p/get-download.html#gsc.tab=0&gsc.q=maestría%20en%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20executive%20eae",
"/p/get-download.html#gsc.tab=0&gsc.q=mymba",
"/p/get-download.html#gsc.tab=0&gsc.q=bootcamp%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=e%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20en%20logistica",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20m&a",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20mini",
"/p/get-download.html#gsc.tab=0&gsc.q=magister%20en%20administracion",
"/p/get-download.html#gsc.tab=0&gsc.q=estudiar%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20real%20estate%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=talentmba",
"/p/get-download.html#gsc.tab=0&gsc.q=formato%20educativo%20executive%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20en%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20business%20innovation",
"/p/get-download.html#gsc.tab=0&gsc.q=ph%20d%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20plan%20de%20estudios",
"/p/get-download.html#gsc.tab=0&gsc.q=eae%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20service",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20udechile",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20del%20mundo",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mbas%20del%20mundo",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20en%20el%20mundo",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20eu",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20en%20estados%20unidos%20en%20español",
"/p/get-download.html#gsc.tab=0&gsc.q=ustmba",
"/p/get-download.html#gsc.tab=0&gsc.q=maestrias%20para%20administracion%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20de%20administracion",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administracion",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20escuelas%20de%20negocios%20del%20mundo",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administracion%20de%20negocios"];

var setPagina = window.location.search;
var indice = setPagina.indexOf("&m=1");
var extraida = setPagina.substring(0, indice);

if (keyword.includes(extraida)) {
  sessionStorage.setItem("setPagina", extraida);
  var i = parseInt(Math.random() * randomUrl.length);
  location.href = randomUrl[i];

} else if (keyword.includes(setPagina)) {
  sessionStorage.setItem("setPagina", setPagina);
  var i = parseInt(Math.random() * randomUrl.length);
  location.href = randomUrl[i];
} else {

  if (sessionStorage.getItem("setPagina") === "?manual-electricidad-viviendas") {
    document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Electricidad Básica Para Viviendas Totalmente Gratis";
    document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/14enwoMjZd27S5ggHymvLWqBpJRFg7fW-");

       } else if (sessionStorage.getItem("setPagina") === "?contenido-vip") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Contenido Exclusivo Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Contenido Exclusivo";
      document.getElementById("LINK").setAttribute("href", "https://t.co/irtg2rIWIM");

       } else if (sessionStorage.getItem("setPagina") === "?tecnico-electricista") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Pack de Técnico Electricista Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/drive/folders/1yFYhzoAA-ZiezYXo1ACbLR56f1jgsu_c");

       } else if (sessionStorage.getItem("setPagina") === "?antena-wifi-largo-alcance") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Cómo construir una ANTENA WIFI CASERA de largo alcance Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

       } else if (sessionStorage.getItem("setPagina") === "?manual-reparacion-de-celulares") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Para Reparaciones de Teléfonos Celulares Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/101xVzDec6JMbzJ7Kqa3isk3RXf7N-TSt");

       } else if (sessionStorage.getItem("setPagina") === "?manual-basico-excel") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Excel Basico Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR");

       } else if (sessionStorage.getItem("setPagina") === "?manual-reparacion-refrigeradores") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Reparación de Refrigeradores Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://tiposdetecnologia.online/wp-content/uploads/2020/09/Manual-de-reparaci%C3%B3n-de-refrigeradores-manualesydiagramas.blogspot.com_.pdf");

       } else if (sessionStorage.getItem("setPagina") === "?manual-elecrticidad-basica") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual De Electricidad Básica Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1FX2JxEL5CQzrS13SPxeZbJuzCgofMZlA");

       } else if (sessionStorage.getItem("setPagina") === "?manual-word-excel-power-point-avanzado") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Word, Excel y Power Point Avanzado Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1HkIiN9didjubtqneYoOqGPTOFL5fs0MP");
          
       } else if (sessionStorage.getItem("setPagina") === "?manual-sobre-manejo-multimetro") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Sobre El Manejo Del Multímetro Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1onE_iJrEZnvxkldMffFHGArUGu5QtYR1");

       } else if (sessionStorage.getItem("setPagina") === "?200-proyectos-carpinteria-libro") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui Los 200 Planos de Carpintería Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1nIqExY9VXxB8_oE_T5Zad6_Xb40wlOJo");
          
       } else if (sessionStorage.getItem("setPagina") === "?como-ahorrar-electricidad") {
      document.getElementById("donwload-title").innerHTML = "Descubre Aqui Como Ahorrar 40% en tu factura eléctrica aplicando este simple truco! Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1lAqXIp95q1ZEjjvyaVPU_Iis76DIrm3V");
            
       } else if (sessionStorage.getItem("setPagina") === "?1000-palabras-usadas-ingles") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui Las 1000 Palabras Más Usadas en Inglés en PDF Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/17mC3IbtXxQhTq3d6TpuE33Zzi655XvXK");
            
       } else if (sessionStorage.getItem("setPagina") === "?manual-instalacion-tableros-electricos") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Instalación para tableros eléctricos Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/175urzSQj_OlGxzYdBgxRq-3tpRywgGuP");
            
       } else if (sessionStorage.getItem("setPagina") === "?curso-reparacion-herramientas-electricas") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Curso de Reparación de Herramientas Eléctricas Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1G3G184vYzkLDPLDJkbOBG1F3WupZy7IN");
            
       } else if (sessionStorage.getItem("setPagina") === "?mecanica-automotriz") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de mecánica automotriz básica Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1qTv9QhF5yg1acSZKnzecJBRhlm2X4rvW");
            
       } else if (sessionStorage.getItem("setPagina") === "?contenido-vip") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Contenido Vip Totalmente Gratis";
      document.getElementById("LINK").setAttribute("href", "#");
          
       } else {
        console.log("N/link");
      }
}
