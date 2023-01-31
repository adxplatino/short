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
"?coleccion-de-circuitos-de-electronica",
"?manual-de-electronica-basica-en-pdf",
"?manual-de-circuitos-electricos-en-pdf",
"?como-construir-tu-propio-ordenador",
"?manual-definitivo-de-soldadura",
"?manual-de-reparacion-de-lavadoras-en-pdf",
"?manual-de-reparacion-de-refrigeradores",
"?manual-electricidad-basica",
"?manual-electricidad-domiciliaria",
"?manual-instalacion-tableros-electricos",
"??manual-basico-excel"
]
var randomUrl = ["/p/download-file.html",
  "/p/download-file.html"
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

  if (sessionStorage.getItem("setPagina") === "?coleccion-de-circuitos-de-electronica") {
    document.getElementById("donwload-title").innerHTML = "Descarga Aqui La Colección de circuitos de electrónica Totalmente Gratis";
    document.getElementById("downtitle").innerHTML = "Colección de circuitos de electrónica";
    document.getElementById("downtype").innerHTML = "PDF";
    document.getElementById("downloads").innerHTML = "8295";
    document.getElementById("downsize").innerHTML = "(4 MB)";
    document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1LgKBMQp-M7pO1IwcxLbJSOIxJk98iQfN/");
    
       } else if (sessionStorage.getItem("setPagina") === "?manual-de-electronica-basica-en-pdf") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de electrónica básica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de electrónica básica";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "5600";
      document.getElementById("downsize").innerHTML = "(2 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1eiCSu0EWpG_cSgUTDcDCR0LwY2EZgyFo");
      
       } else if (sessionStorage.getItem("setPagina") === "?manual-de-circuitos-electricos-en-pdf") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Circuitos Eléctricos Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Circuitos Eléctricos";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3123";
      document.getElementById("downsize").innerHTML = "(15 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1PHB7yV8VSAuAsq4bk9nlLhfdIQsKaruV");

       } else if (sessionStorage.getItem("setPagina") === "?como-construir-tu-propio-ordenador") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Cómo construir tu propio ordenador desde cero: una guía para principiantes Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Cómo construir tu propio ordenador desde cero: una guía para principiantes";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "9715";
      document.getElementById("downsize").innerHTML = "(2 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/173D0DAeWDz0lKInKXTvkLni5JsNnSA5W");
        
       } else if (sessionStorage.getItem("setPagina") === "?manual-definitivo-de-soldadura") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Definitivo de Soldadura Electrónica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Definitivo de Soldadura Electrónica";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "1142 ";
      document.getElementById("downsize").innerHTML = "(1 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/14pKUsAwxg3qGbJD0fAOrU6LXusYeyiIB");

       } else if (sessionStorage.getItem("setPagina") === "?manual-de-reparacion-de-lavadoras-en-pdf") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de reparación de lavadoras Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de reparación de lavadoras";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "6978";
      document.getElementById("downsize").innerHTML = "(754 kB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1Ac9hhzVJJzHowbLkDHj7kyNFmzxJAVAk");
         
       } else if (sessionStorage.getItem("setPagina") === "?manual-de-reparacion-de-refrigeradores") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Reparación de Refrigeradores Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Reparación de Refrigeradores";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "6594";
      document.getElementById("downsize").innerHTML = "(2 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1WUaXXGzfoKhAufWj5xSQGAENYrNJvnBd");
         
       } else if (sessionStorage.getItem("setPagina") === "?manual-electricidad-basica") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Electricidad Básica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Electricidad Básica";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7430";
      document.getElementById("downsize").innerHTML = "(7 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1FC2r0w56SEN7UzL6WfTF0HecX36qDr2l");

       } else if (sessionStorage.getItem("setPagina") === "?manual-electricidad-domiciliaria") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Electricidad Domiciliaria Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Electricidad Domiciliaria";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "5649";
      document.getElementById("downsize").innerHTML = "(7 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1xkJaMHleRH_auC2sx3SHpQcVsiGIo8nW");

       } else if (sessionStorage.getItem("setPagina") === "?manual-instalacion-tableros-electricos") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Instalación de Tableros Eléctricos Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Instalación de Tableros Eléctricos";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "9946";
      document.getElementById("downsize").innerHTML = "(2 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1rejReWvAOWJj-NuDCRJO6LWIkhMJgKWo");
          
       } else if (sessionStorage.getItem("setPagina") === "?manual-basico-excel") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Básico de Excel Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Básico de Excel en PDF";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "5963";
      document.getElementById("downsize").innerHTML = "(2.5 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1DIcGiJ0fWqzOBX8rFgJOI7T_KlciVU_L");
          
       } else {
        console.log("N/link");
       }

}
