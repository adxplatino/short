<script>
function getLink(){
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
var keyword = [
&quot;?coleccion-de-circuitos-de-electronica&quot;,
&quot;?manual-de-electronica-basica-en-pdf&quot;,
]
var randomUrl = 
[&quot;/p/download-file.html&quot;,
]
var setPagina = window.location.search;
var indice = setPagina.indexOf(&#39;=1&#39;);
var extraida = setPagina.substring(0, indice);

if (keyword.includes(extraida)) {
    sessionStorage.setItem(&quot;setPagina&quot;, extraida);
    var i = parseInt(Math.random() * randomUrl.length);
    location.href = randomUrl[i];

} else if(keyword.includes(setPagina)) {
    sessionStorage.setItem(&quot;setPagina&quot;, setPagina);
    var i = parseInt(Math.random() * randomUrl.length);
    location.href = randomUrl[i];
}else{
  
 if (sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?coleccion-de-circuitos-de-electronica&quot;) {
        document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui La Colección de circuitos de electrónica Totalmente Gratis&quot;;
        document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Colección de circuitos de electrónica&quot;;
        document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
        document.getElementById(&quot;downloads&quot;).innerHTML = &quot;12654&quot;;
        document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(65 MB)&quot;;
        document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);
   
        }else if(sessionStorage.getItem(&quot;setPagina&quot;) === &quot;?manual-de-electronica-basica-en-pdf&quot;) {
        document.getElementById(&quot;donwload-title&quot;).innerHTML = &quot;Descarga Aqui El Manual de electrónica básica Totalmente Gratis&quot;;
        document.getElementById(&quot;downtitle&quot;).innerHTML = &quot;Manual de electrónica básica&quot;;
        document.getElementById(&quot;downtype&quot;).innerHTML = &quot;PDF&quot;;
        document.getElementById(&quot;downloads&quot;).innerHTML = &quot;4656&quot;;
        document.getElementById(&quot;downsize&quot;).innerHTML = &quot;(28 MB)&quot;;
        document.getElementById(&quot;LINK&quot;).setAttribute(&quot;href&quot;, &quot;https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j&quot;);
        }else{
         console.log(&quot;N/link&quot;);
        }
  
}
</script>
