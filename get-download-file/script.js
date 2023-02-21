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
"?the-definitive-chatgpt-guide",
"?excel-manual"  
]

var randomUrl = [
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20student%20profile",
"/p/get-download.html#gsc.tab=0&gsc.q=best%20mba%20degree",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20master%20of",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20hrm",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20leadership",
"/p/get-download.html#gsc.tab=0&gsc.q=wharton%20executive%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20requirements",
"/p/get-download.html#gsc.tab=0&gsc.q=fast%20track%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20graduate",
"/p/get-download.html#gsc.tab=0&gsc.q=part%20time%20mba%20colleges",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20grad",
"/p/get-download.html#gsc.tab=0&gsc.q=cornell%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=xlri%20executive%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=an%20mba%20degree",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20colleges",
"/p/get-download.html#gsc.tab=0&gsc.q=distance%20mba%20programs",
"/p/get-download.html#gsc.tab=0&gsc.q=open%20university%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=mba%20degree%20salary",
"/p/get-download.html#gsc.tab=0&gsc.q=iese%20mba",
"/p/get-download.html#gsc.tab=0&gsc.q=an%20mba"
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

  if (sessionStorage.getItem("setPagina") === "?electronic-manual") {
    document.getElementById("donwload-title").innerHTML = "titulo de arriba";
    document.getElementById("downtitle").innerHTML = "titulo principal";
    document.getElementById("downdesc").innerHTML = "descripcion"; 
    document.getElementById("downtype").innerHTML = "PDF";
    document.getElementById("downloads").innerHTML = "8295";
    document.getElementById("downsize").innerHTML = "(5 MB)";
    document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/14enwoMjZd27S5ggHymvLWqBpJRFg7fW-");

       } else if (sessionStorage.getItem("setPagina") === "?excel-manual") {
      document.getElementById("donwload-title").innerHTML = "Full Download Here The Microsoft Excel Manual for Beginners For Free";
      document.getElementById("downtitle").innerHTML = "Microsoft Excel Manual for Beginners";
      document.getElementById("downdesc").innerHTML = "Excel is a powerful tool that can help you organize, analyze and present your data in a meaningful way. To truly master it, you need to know all the formulas, functions, shortcuts, and tips that it offers.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "9653";
      document.getElementById("downsize").innerHTML = "(1 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/19DSIWNboZFqHtY3B1KRr3C1bHtPYHXH0");
            
       } else if (sessionStorage.getItem("setPagina") === "?the-definitive-chatgpt-guide") {
      document.getElementById("donwload-title").innerHTML = "Full Download Here The Definitive ChatGPT Guide For Free";
      document.getElementById("downtitle").innerHTML = "The Definitive ChatGPT Guide";
      document.getElementById("downdesc").innerHTML = "ChatGPT is a powerful tool that can help you organize, analyze and present your data in a meaningful way. To truly master it, you need to know all the formulas, functions, shortcuts, and tips that it offers.";
      document.getElementById("downtype").innerHTML = "PDF";
      document.getElementById("downloads").innerHTML = "3689";
      document.getElementById("downsize").innerHTML = "(7 MB)";
      document.getElementById("LINK").setAttribute("href", "https://drive.google.com/file/d/1gMeSFz6uBMVwf8tA-fJgw-zP809Kr_TR");
            
       } else {
        console.log("N/link");
      }
}
