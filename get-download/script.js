var keyword = [
"?manual-electricidad-viviendas",
"?manual-de-electronica-basica-en-pdf",
"?manual-de-circuitos-electricos-en-pdf",
"?como-construir-tu-propio-ordenador",
"?manual-definitivo-de-soldadura",
"?manual-de-reparacion-de-lavadoras-en-pdf",
"?manual-reparacion-refrigeradores"
]
var randomUrl = ["/p/get-download.html",
  "/p/get-download.html"
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
    
    } else if (sessionStorage.getItem("setPagina") === "2") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de electrónica básica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de electrónica básica";
      document.getElementById("downdesc").innerHTML = "descripcion"; 
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "5600";
      document.getElementById("downsize").innerHTML = "(12 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

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
      } else if (sessionStorage.getItem("setPagina") === "3") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Circuitos Eléctricos Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Circuitos Eléctricos";
      document.getElementById("downdesc").innerHTML = "descripcion";   
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3123";
      document.getElementById("downsize").innerHTML = "(14 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

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
      } else if (sessionStorage.getItem("setPagina") === "4") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Cómo construir tu propio ordenador desde cero: una guía para principiantes Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Cómo construir tu propio ordenador desde cero: una guía para principiantes";
      document.getElementById("downdesc").innerHTML = "descripcion";   
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "9715";
      document.getElementById("downsize").innerHTML = "(6 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

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
       } else if (sessionStorage.getItem("setPagina") === "5") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Definitivo de Soldadura Electrónica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Definitivo de Soldadura Electrónica";
      document.getElementById("downdesc").innerHTML = "descripcion";    
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "1142 ";
      document.getElementById("downsize").innerHTML = "(47 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

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
       } else if (sessionStorage.getItem("setPagina") === "6") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de reparación de lavadoras Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de reparación de lavadoras";
      document.getElementById("downdesc").innerHTML = "descripcion";   
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "6978";
      document.getElementById("downsize").innerHTML = "(98 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");

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
       } else if (sessionStorage.getItem("setPagina") === "?manual-reparacion-refrigeradores") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Reparación de Refrigeradores Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Reparación de Refrigeradores";
      document.getElementById("downdesc").innerHTML = "Descarga gratis el Manual de Reparación de Refrigeradores en PDF. Este fabuloso manual nos presenta información necesaria, para aprender a reparar todo tipo de refrigerados de manera ilustrada, didáctica y sencilla.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7430";
      document.getElementById("downsize").innerHTML = "(4.3 MB)";
      document.getElementById("LINK").setAttribute("href", "https://tiposdetecnologia.online/wp-content/uploads/2020/09/Manual-de-reparaci%C3%B3n-de-refrigeradores-manualesydiagramas.blogspot.com_.pdf");

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
      } else {
        console.log("N/link");
      }

    }
