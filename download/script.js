function getLink(){
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
]
var randomUrl = 
["/p/download-file.html",
]
var setPagina = window.location.search;
var indice = setPagina.indexOf('=1');
var extraida = setPagina.substring(0, indice);

if (keyword.includes(extraida)) {
    sessionStorage.setItem("setPagina", extraida);
    var i = parseInt(Math.random() * randomUrl.length);
    location.href = randomUrl[i];

} else if(keyword.includes(setPagina)) {
    sessionStorage.setItem("setPagina", setPagina);
    var i = parseInt(Math.random() * randomUrl.length);
    location.href = randomUrl[i];
}else{
  
 if (sessionStorage.getItem("setPagina") === "?coleccion-de-circuitos-de-electronica") {
        document.getElementById("donwload-title").innerHTML = "Descarga Aqui La Colección de circuitos de electrónica Totalmente Gratis";
        document.getElementById("downtitle").innerHTML = "Colección de circuitos de electrónica";
        document.getElementById("downtype").innerHTML = "PDF";
        document.getElementById("downloads").innerHTML = "12654";
        document.getElementById("downsize").innerHTML = "(65 MB)";
        document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");
   
        }else if(sessionStorage.getItem("setPagina") === "?manual-de-electronica-basica-en-pdf") {
        document.getElementById("donwload-title").innerHTML = "Descarga Aqui El Manual de electrónica básica Totalmente Gratis";
        document.getElementById("downtitle").innerHTML = "Manual de electrónica básica";
        document.getElementById("downtype").innerHTML = "PDF";
        document.getElementById("downloads").innerHTML = "4656";
        document.getElementById("downsize").innerHTML = "(28 MB)";
        document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j");
        }else{
         console.log("N/link");
        }
  
}
