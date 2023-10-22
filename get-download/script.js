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
"/p/get-download.html#gsc.tab=0&gsc.q=online%20mba%20programs%20for%20international%20students",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20business%20schools",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20information",
"/p/get-download.html#gsc.tab=0&gsc.q=accredited%20online%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20masters%20in%20business",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20mba%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20programs%20near%20me",
"/p/get-download.html#gsc.tab=0&gsc.q=distance%20mba%20course",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20mba%20finance%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20healthcare%20management%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20in%20business%20analytics%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20near%20me",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20degree%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20of%20business%20administration%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20on%20line",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20marketing%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=distance%20learning%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=best%20online%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=top%20online%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=top%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20mba%20courses",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20mba%20for%20working%20professionals",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20in%20healthcare%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=one%20year%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=1%20year%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20finance%20online",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20admissions%20consulting",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20distance%20education",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20colleges%20near%20me",
"/p/get-download.html#gsc.tab=0&gsc.q=accelerated%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=lsu%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=executive%20mba%20for%20working%20professionals",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20degree%20in%20business%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=distance%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=best%20online%20marketing%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=getting%20an%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=affordable%20online%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=affordable%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=online%20executive%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20for%20working%20professionals",
"/p/get-download.html#gsc.tab=0&gsc.q=bachelor%20degree%20business%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=best%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=ba%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20classes%20near%20me",
"/p/get-download.html#gsc.tab=0&gsc.q=master's%20degree%20in%20business%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20business%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20master%20of%20business%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20of%20business%20admin",
"/p/get-download.html#gsc.tab=0&gsc.q=part%20time%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20without%20degree",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20marketing%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20consulting",
"/p/get-download.html#gsc.tab=0&gsc.q=asu%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20in%20business%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20healthcare%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20accounting%20and%20finance",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20sustainability%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20hr",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20human%20resource%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20hr%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20human%20resources",
"/p/get-download.html#gsc.tab=0&gsc.q=marketing%20week%20mini%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=marketing%20schools",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20supply%20chain%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=one%20year%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=1%20year%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20supply%20chain",
"/p/get-download.html#gsc.tab=0&gsc.q=pursuing%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20healthcare%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20logistics%20and%20supply%20chain%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20of%20hospital%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=master%20in%20healthcare%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20marketing",
"/p/get-download.html#gsc.tab=0&gsc.q=international%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=msn%20mba%20dual%20degree",
"/p/get-download.html#gsc.tab=0&gsc.q=masters%20in%20business",
"/p/get-download.html#gsc.tab=0&gsc.q=cheapest%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=affordable%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20business%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=business%20masters%20degrees",
"/p/get-download.html#gsc.tab=0&gsc.q=best%20online%20mba%20in%20the%20world",
"/p/get-download.html#gsc.tab=0&gsc.q=fast%20track%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=healthcare%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=accelerated%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=cheapest%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=most%20affordable%20online%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20master%20degree",
"/p/get-download.html#gsc.tab=0&gsc.q=business%20school",
"/p/get-download.html#gsc.tab=0&gsc.q=b%20schools",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20hospitality%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20accounting",
"/p/get-download.html#gsc.tab=0&gsc.q=mark%20ritson%20mini%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mini%20mba%20mark%20ritson",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20business%20analytics",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20hospital%20management",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20hospital%20administration",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20in%20hospital%20and%20healthcare%20management"];

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
