var keyword = [
"?coleccion-de-circuitos-de-electronica",
"?manual-de-electronica-basica-en-pdf",
"?manual-de-circuitos-electricos-en-pdf",
"?como-construir-tu-propio-ordenador",
"?manual-definitivo-de-soldadura",
"?manual-de-reparacion-de-lavadoras-en-pdf",
"?manual-de-reparacion-de-refrigeradores"
]
var randomUrl = ["/p/download-file.html",
  "/p/download-file.html"
]
var setPagina = window.location.search;
var indice = setPagina.indexOf('=1');
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
    document.getElementById("downsize").innerHTML = "(20 MB)";
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
    
    } else if (sessionStorage.getItem("setPagina") === "?manual-de-electronica-basica-en-pdf") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de electrónica básica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de electrónica básica";
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
      } else if (sessionStorage.getItem("setPagina") === "?manual-de-circuitos-electricos-en-pdf") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Circuitos Eléctricos Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Circuitos Eléctricos";
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
      } else if (sessionStorage.getItem("setPagina") === "?como-construir-tu-propio-ordenador") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Cómo construir tu propio ordenador desde cero: una guía para principiantes Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Cómo construir tu propio ordenador desde cero: una guía para principiantes";
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
       } else if (sessionStorage.getItem("setPagina") === "?manual-definitivo-de-soldadura") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Definitivo de Soldadura Electrónica Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Definitivo de Soldadura Electrónica";
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
       } else if (sessionStorage.getItem("setPagina") === "?manual-de-reparacion-de-lavadoras-en-pdf") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de reparación de lavadoras Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de reparación de lavadoras";
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
       } else if (sessionStorage.getItem("setPagina") === "?manual-de-reparacion-de-refrigeradores") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Reparación de Refrigeradores Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual de Reparación de Refrigeradores";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "7430";
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
      } else {
        console.log("N/link");
      }

    }
