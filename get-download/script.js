var keyword = [
"?manual-electricidad-viviendas",
"?contenido-vip",
"?tecnico-electricista",
"?manual-reparacion-refrigeradores",
"?antena-wifi-largo-alcance",
"?manual-reparacion-de-celulares",
"?"
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
    
    } else if (sessionStorage.getItem("setPagina") === "?contenido-vip") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Contenido Exclusivo Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Contenido Exclusivo";
      document.getElementById("downdesc").innerHTML = "¡No te pierdas esta oportunidad de disfrutar de nuestro contenido de alta calidad que NO encontrarás en ningún otro lugar! ¡Accede ahora y comienza a disfrutar de todo lo que tenemos para ti."; 
      document.getElementById("downtype").innerHTML = "Galery";
      document.getElementById("downloads").innerHTML = "5600";
      document.getElementById("downsize").innerHTML = "(132 MB)";
      document.getElementById("LINK").setAttribute("href", "https://t.co/AYXYygxOfy");

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
      } else if (sessionStorage.getItem("setPagina") === "?tecnico-electricista") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Pack de Técnico Electricista Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Técnico Electricista [PACK PDF]";
      document.getElementById("downdesc").innerHTML = "Técnico electricista Pack en PDF uno de los mejores contenidos para conocer todo sobre la electricidad.";   
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3123";
      document.getElementById("downsize").innerHTML = "(76 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/drive/folders/1yFYhzoAA-ZiezYXo1ACbLR56f1jgsu_c");

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
      } else if (sessionStorage.getItem("setPagina") === "?antena-wifi-largo-alcance") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de Cómo construir una ANTENA WIFI CASERA de largo alcance Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Potente ANTENA WIFI CASERA de largo alcance, fácil de hacer!";
      document.getElementById("downdesc").innerHTML = "Aprende a cómo hacer una antena WiFi de largo alcance para mejorar la señal de wifi. Con este tutorial en video de alta calidad, podrás seguir paso a paso las instrucciones y tener una antena funcionando en poco tiempo.";   
      document.getElementById("downtype").innerHTML = "MP4";
      document.getElementById("downloads").innerHTML = "9715";
      document.getElementById("downsize").innerHTML = "(76 MB)";
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
       } else if (sessionStorage.getItem("setPagina") === "?manual-reparacion-de-celulares") {
      document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual Para Reparaciones de Teléfonos Celulares Totalmente Gratis";
      document.getElementById("downtitle").innerHTML = "Manual Para Reparaciones de Teléfonos Celulares";
      document.getElementById("downdesc").innerHTML = "Aprende a reparar celulares de la forma mas fácil y didáctica con este manual de reparación de celulares en español completo.";    
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3628";
      document.getElementById("downsize").innerHTML = "(9 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/101xVzDec6JMbzJ7Kqa3isk3RXf7N-TSt");

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
