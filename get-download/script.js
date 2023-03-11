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
"??curso-reparacion-herramientas-electricas"
]

var randomUrl = [
"/p/get-download.html#gsc.tab=0&gsc.q=estudiar%20mba",  
"/p/get-download.html#gsc.tab=0&gsc.q=ranking%20mba%20latinoamérica%202023",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20españa",
"/p/get-download.html#gsc.tab=0&gsc.q=ranking%20mba%202023",
"/p/get-download.html#gsc.tab=0&gsc.q=ranking%20mba%20latinoamérica%20qs",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20del%20mundo",
"/p/get-download.html#gsc.tab=0&gsc.q=ranking%20mba%20argentina",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20online%20latinoamérica",
"/p/get-download.html#gsc.tab=0&gsc.q=ucema%20mba%20ranking"
"/p/get-download.html#gsc.tab=0&gsc.q=estudiar%20mba%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=egade%20mba%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20online%20economico",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20en%20business%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20international",
"/p/get-download.html#gsc.tab=0&gsc.q=maestria%20en%20administración%20de%20empresas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mejores%20mba%20del%20mundo",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20finanzas",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20virtual"
]

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
    document.getElementById("downtitle").innerHTML = "Manual de Electricidad Básica Para Viviendas";
    document.getElementById("downdesc").innerHTML = "Aprende a hacer una instalación eléctrica para viviendas paso a paso y de forma sencilla con este manual conocerás todos los elementos de una vivienda y su instalación explicados de formas clara y sencilla."; 
    document.getElementById("downtype").innerHTML = "PDF";
    document.getElementById("downloads").innerHTML = "8295";
    document.getElementById("downsize").innerHTML = "(5 MB)";
    document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/14enwoMjZd27S5ggHymvLWqBpJRFg7fW-");

       } else if (sessionStorage.getItem("setPagina") === "?contenido-vip") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Contenido Exclusivo Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Contenido Exclusivo";
      document.getElementById("downdesc").innerHTML = "¡No te pierdas esta oportunidad de disfrutar de nuestro contenido de alta calidad que NO encontrarás en ningún otro lugar! ¡Accede ahora y comienza a disfrutar de todo lo que tenemos para ti."; 
      document.getElementById("downtype").innerHTML = "Galery";
      document.getElementById("downloads").innerHTML = "5600";
      document.getElementById("downsize").innerHTML = "(132 MB)";
      document.getElementById("LINK").setAttribute("href", "https://t.co/irtg2rIWIM");

       } else if (sessionStorage.getItem("setPagina") === "?tecnico-electricista") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Pack de Técnico Electricista Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Técnico Electricista [PACK PDF]";
      document.getElementById("downdesc").innerHTML = "Técnico electricista Pack en PDF uno de los mejores contenidos para conocer todo sobre la electricidad.";   
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3123";
      document.getElementById("downsize").innerHTML = "(76 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/drive/folders/1yFYhzoAA-ZiezYXo1ACbLR56f1jgsu_c");

       } else if (sessionStorage.getItem("setPagina") === "?antena-wifi-largo-alcance") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Cómo construir una ANTENA WIFI CASERA de largo alcance Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Potente ANTENA WIFI CASERA de largo alcance, fácil de hacer!";
      document.getElementById("downdesc").innerHTML = "Aprende a cómo hacer una antena WiFi de largo alcance para mejorar la señal de wifi. Con este tutorial en video de alta calidad, podrás seguir paso a paso las instrucciones y tener una antena funcionando en poco tiempo.";   
      document.getElementById("downtype").innerHTML = "MP4";
      document.getElementById("downloads").innerHTML = "9715";
      document.getElementById("downsize").innerHTML = "(76 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

       } else if (sessionStorage.getItem("setPagina") === "?manual-reparacion-de-celulares") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Para Reparaciones de Teléfonos Celulares Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Para Reparaciones de Teléfonos Celulares";
      document.getElementById("downdesc").innerHTML = "Aprende a reparar celulares de la forma mas fácil y didáctica con este manual de reparación de celulares en español completo.";    
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3628";
      document.getElementById("downsize").innerHTML = "(9 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/101xVzDec6JMbzJ7Kqa3isk3RXf7N-TSt");

       } else if (sessionStorage.getItem("setPagina") === "?manual-basico-excel") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Excel Basico Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Excel Basico";
      document.getElementById("downdesc").innerHTML = "¿Necesitas aprender a utilizar Excel?, no te preocupes, con este manual te lo ponemos muy fácil, hoy te traemos este excelente manual que te ayudara a aprender mejor la herramienta de Microsoft Excel.";   
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "4685";
      document.getElementById("downsize").innerHTML = "(2 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR");

       } else if (sessionStorage.getItem("setPagina") === "?manual-reparacion-refrigeradores") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Reparación de Refrigeradores Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Reparación de Refrigeradores";
      document.getElementById("downdesc").innerHTML = "Descarga gratis el Manual de Reparación de Refrigeradores en PDF. Este fabuloso manual nos presenta información necesaria, para aprender a reparar todo tipo de refrigerados de manera ilustrada, didáctica y sencilla.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7430";
      document.getElementById("downsize").innerHTML = "(4.3 MB)";
      document.getElementById("LINK").setAttribute("href", "https://tiposdetecnologia.online/wp-content/uploads/2020/09/Manual-de-reparaci%C3%B3n-de-refrigeradores-manualesydiagramas.blogspot.com_.pdf");

       } else if (sessionStorage.getItem("setPagina") === "?manual-elecrticidad-basica") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual De Electricidad Básica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual De Electricidad Básica";
      document.getElementById("downdesc").innerHTML = "Aprende electricidad básica con este manual gratuito y conoce todos los aspectos de esta bonita profesión.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7430";
      document.getElementById("downsize").innerHTML = "(5 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1FX2JxEL5CQzrS13SPxeZbJuzCgofMZlA");

       } else if (sessionStorage.getItem("setPagina") === "?manual-word-excel-power-point-avanzado") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Word, Excel y Power Point Avanzado Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Word, Excel y Power Point Avanzado";
      document.getElementById("downdesc").innerHTML = "Destacate con este manual gratuito aprendiendo Word, Excel y Power Point que son unas herramientas imprescindibles en tu carrera profesional.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7430";
      document.getElementById("downsize").innerHTML = "(3.92 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1HkIiN9didjubtqneYoOqGPTOFL5fs0MP");
          
       } else if (sessionStorage.getItem("setPagina") === "?manual-sobre-manejo-multimetro") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Sobre El Manejo Del Multímetro Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Sobre El Manejo Del Multímetro";
      document.getElementById("downdesc").innerHTML = "Aprende el uso y el manejo del multímetro con este manual gratuito donde conocerás todas las funciones de esta herramienta.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7986";
      document.getElementById("downsize").innerHTML = "(828 KB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1onE_iJrEZnvxkldMffFHGArUGu5QtYR1");

       } else if (sessionStorage.getItem("setPagina") === "?200-proyectos-carpinteria-libro") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui Los 200 Planos de Carpintería Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "200 Planos de Carpintería Gratis";
      document.getElementById("downdesc").innerHTML = "Aprende a fabricar muebles de madera con estos 200 planos de carpintería totalmente gratuitos.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7566";
      document.getElementById("downsize").innerHTML = "(44 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1nIqExY9VXxB8_oE_T5Zad6_Xb40wlOJo");
          
       } else if (sessionStorage.getItem("setPagina") === "?como-ahorrar-electricidad") {
      document.getElementById("donwload-title").innerHTML = "Descubre Aqui Como Ahorrar 40% en tu factura eléctrica aplicando este simple truco! Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Ahorra 40% en tu factura eléctrica aplicando este simple truco!";
      document.getElementById("downdesc").innerHTML = "Descubre cómo reducir tu consumo de energía y ahorrar dinero en tu factura mensual sin sacrificar el confort de tu hogar.";
      document.getElementById("downtype").innerHTML = "MP4";
      document.getElementById("downloads").innerHTML = "5832";
      document.getElementById("downsize").innerHTML = "(107 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1lAqXIp95q1ZEjjvyaVPU_Iis76DIrm3V");
            
       } else if (sessionStorage.getItem("setPagina") === "?1000-palabras-usadas-ingles") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui Las 1000 Palabras Más Usadas en Inglés en PDF Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Las 1000 Palabras Más Usadas en Inglés en PDF";
      document.getElementById("downdesc").innerHTML = "Aprende las 1000 palabras más usadas en inglés con este listado en PDF totalmente gratuito.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "4998";
      document.getElementById("downsize").innerHTML = "(622 KB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/17mC3IbtXxQhTq3d6TpuE33Zzi655XvXK");
            
       } else if (sessionStorage.getItem("setPagina") === "?manual-instalacion-tableros-electricos") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Instalación para tableros eléctricos Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Instalación para tableros eléctricos";
      document.getElementById("downdesc").innerHTML = "En este manual tecnico aprenderas como realizar el montaje y cableado de un tablero de Distribución básico para una vivienda.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "5694";
      document.getElementById("downsize").innerHTML = "(2 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/175urzSQj_OlGxzYdBgxRq-3tpRywgGuP");
            
       } else if (sessionStorage.getItem("setPagina") === "?curso-reparacion-herramientas-electricas") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Curso de Reparación de Herramientas Eléctricas Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Curso de Reparación de Herramientas Eléctricas";
      document.getElementById("downdesc").innerHTML = "Cuidar y reparar sus herramientas eléctricas es muy importante, con esto tendrán una vida útil mas larga y realizarán perfectamente las labores que necesite.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "6923";
      document.getElementById("downsize").innerHTML = "(1.1 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1G3G184vYzkLDPLDJkbOBG1F3WupZy7IN");
            
       } else {
        console.log("N/link");
      }
}
