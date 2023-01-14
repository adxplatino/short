var keyword = [
&quot;?coleccion-de-circuitos-de-electronica&quot;,
&quot;?manual-de-electronica-basica-en-pdf&quot;,
&quot;?manual-de-circuitos-electricos-en-pdf&quot;,
&quot;?como-construir-tu-propio-ordenador&quot;,
&quot;?manual-definitivo-de-soldadura&quot;,
&quot;?manual-de-reparacion-de-lavadoras-en-pdf&quot;,
&quot;?manual-reparacion-refrigeradores&quot;
]
var randomUrl = [&quot;/p/get-download.html&quot;,
  &quot;/p/get-download.html&quot;
]
var setPagina = window.location.search;
var indice = setPagina.indexOf(&#39;=1&#39;);
var extraida = setPagina.substring(0, indice);

if (keyword.includes(extraida)) {
  sessionStorage.setItem(&quot;setPagina&quot;, extraida);
  var i = parseInt(Math.random() * randomUrl.length);
  location.href = randomUrl[i];

} else if (keyword.includes(setPagina)) {
  sessionStorage.setItem(&quot;setPagina&quot;, setPagina);
  var i = parseInt(Math.random() * randomUrl.length);
  location.href = randomUrl[i];
} else {

  if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?coleccion-de-circuitos-de-electronica&quot;) {
    document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui La Colección de circuitos de electrónica Totalmente Gratis&quot;;
    document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Colección de circuitos de electrónica&quot;;
    document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
    document.getElementById(&quot;downloads&quot;).innerHTML = &quot;8295&quot;;
    document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(20 MB)&quot;;
    document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);
    function getLink() {
      sessionStorage.clear(setTimeout(1000));
      document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
      document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
      let time_out = 1000;
      let counter_id;
      let seconds = 15;
      counter_id = setInterval(update_counter_link, time_out);
      function update_counter_link() {
        document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
        if (!seconds) {
          clearInterval(counter_id);
          document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
          document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
        }
      }
    }
    
    } else if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?manual-de-electronica-basica-en-pdf&quot;) {
      document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual de electrónica básica Totalmente Gratis&quot;;
      document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Manual de electrónica básica&quot;;
      document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
      document.getElementById(&quot;downloads&quot;).innerHTML = &quot;5600&quot;;
      document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(12 MB)&quot;;
      document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);

      function getLink() {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
        document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
        let time_out = 1000;
        let counter_id;
        let seconds = 15;
        counter_id = setInterval(update_counter_link, time_out);
        function update_counter_link() {
          document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
          if (!seconds) {
            clearInterval(counter_id);
            document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
            document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
          }
        }
      }
      } else if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?manual-de-circuitos-electricos-en-pdf&quot;) {
      document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual de Circuitos Eléctricos Totalmente Gratis&quot;;
      document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Manual de Circuitos Eléctricos&quot;;
      document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
      document.getElementById(&quot;downloads&quot;).innerHTML = &quot;3123&quot;;
      document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(14 MB)&quot;;
      document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);

      function getLink() {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
        document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
        let time_out = 1000;
        let counter_id;
        let seconds = 15;
        counter_id = setInterval(update_counter_link, time_out);
        function update_counter_link() {
          document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
          if (!seconds) {
            clearInterval(counter_id);
            document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
            document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
          }
        }
      }
      } else if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?como-construir-tu-propio-ordenador&quot;) {
      document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual de Cómo construir tu propio ordenador desde cero: una guía para principiantes Totalmente Gratis&quot;;
      document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Cómo construir tu propio ordenador desde cero: una guía para principiantes&quot;;
      document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
      document.getElementById(&quot;downloads&quot;).innerHTML = &quot;9715&quot;;
      document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(6 MB)&quot;;
      document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);

      function getLink() {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
        document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
        let time_out = 1000;
        let counter_id;
        let seconds = 15;
        counter_id = setInterval(update_counter_link, time_out);
        function update_counter_link() {
          document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
          if (!seconds) {
            clearInterval(counter_id);
            document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
            document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
          }
        }
      }
       } else if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?manual-definitivo-de-soldadura&quot;) {
      document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual Definitivo de Soldadura Electrónica Totalmente Gratis&quot;;
      document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Manual Definitivo de Soldadura Electrónica&quot;;
      document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
      document.getElementById(&quot;downloads&quot;).innerHTML = &quot;1142 &quot;;
      document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(47 MB)&quot;;
      document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);

      function getLink() {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
        document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
        let time_out = 1000;
        let counter_id;
        let seconds = 15;
        counter_id = setInterval(update_counter_link, time_out);
        function update_counter_link() {
          document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
          if (!seconds) {
            clearInterval(counter_id);
            document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
            document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
          }
        }
      }
       } else if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?manual-de-reparacion-de-lavadoras-en-pdf&quot;) {
      document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual de reparación de lavadoras Totalmente Gratis&quot;;
      document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Manual de reparación de lavadoras&quot;;
      document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
      document.getElementById(&quot;downloads&quot;).innerHTML = &quot;6978&quot;;
      document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(98 MB)&quot;;
      document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);

      function getLink() {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
        document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
        let time_out = 1000;
        let counter_id;
        let seconds = 15;
        counter_id = setInterval(update_counter_link, time_out);
        function update_counter_link() {
          document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
          if (!seconds) {
            clearInterval(counter_id);
            document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
            document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
          }
        }
      }
       } else if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?manual-reparacion-refrigeradores&quot;) {
      document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual de Reparación de Refrigeradores Totalmente Gratis&quot;;
      document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Manual de Reparación de Refrigeradores&quot;;
      document.getElementById(&quot;downdesc&quot;).innerHTML = &quot;Descarga gratis el Manual de Reparación de Refrigeradores en PDF. Este fabuloso manual nos presenta información necesaria, para aprender a reparar todo tipo de refrigerados de manera ilustrada, didáctica y sencilla.&quot;;
      document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
      document.getElementById(&quot;downloads&quot;).innerHTML = &quot;7430&quot;;
      document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(4.3 MB)&quot;;
      document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://tiposdetecnologia.online/wp-content/uploads/2020/09/Manual-de-reparaci%C3%B3n-de-refrigeradores-manualesydiagramas.blogspot.com_.pdf&quot;);

      function getLink() {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById(&quot;contador&quot;).style.display = &quot;inline&quot;;
        document.getElementById(&quot;downboton&quot;).style.display = &quot;none&quot;;
        let time_out = 1000;
        let counter_id;
        let seconds = 15;
        counter_id = setInterval(update_counter_link, time_out);
        function update_counter_link() {
          document.getElementById(&#39;link_button&#39;).innerHTML = (--seconds);
          if (!seconds) {
            clearInterval(counter_id);
            document.getElementById(&quot;contador&quot;).style.display = &quot;none&quot;;
            document.getElementById(&quot;linkDownload&quot;).style.display = &quot;inline&quot;;
          }
        }
      }
      } else {
        console.log(&quot;N/link&quot;);
      }

    }
