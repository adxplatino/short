function captchaAds(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://www.google.com/recaptcha/api.js?hl=es";
document.getElementById('captchascriptAds').appendChild(externalScript);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";  
document.getElementById('captchascriptAds').appendChild(inlineScript); 
}
  
function CaptchaCheckedAds() {
jQuery('#Linkcaptcha').removeClass('disabled').removeAttr('disabled');
}

function setAdsUp(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);
var comment = document.createComment(" infoproyectos_300x250 ");
document.getElementById('adsContenedor').appendChild(comment);
var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9029296375');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
document.getElementById('adsContenedor').appendChild(ins);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 
}

function setAdsDown(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor2').appendChild(externalScript);
var comment = document.createComment(" infoproyectos_300x250 ");
document.getElementById('adsContenedor2').appendChild(comment);
var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9029296375');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
document.getElementById('adsContenedor2').appendChild(ins);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor2').appendChild(inlineScript); 
}
  
function getTiempo(e){
    var timer = $('#timer');
                window.setTimeout(function () {
                    let time = 20000,
                        delta = 1000,
                        tid;
                    tid = setInterval(function () {
                        if (window.blurred) {
                            return;
                        }
                        time -= delta;
                        timer.text(time / 1000);
                        if (time <= 0) {
                            clearInterval(tid); 
                            document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"></h2><button onClick="getLink();" class="btn btn-primary" m-2="" style="width: 300px;"><b>'+e+'</b></button></br></br></div>';
                            setAdsUp();
                        }
                    }, delta);
                }, 500);
}
  
function getTiempoCaptcha(e){
    var timer = $('#timer');
                window.setTimeout(function () {
                    let time = 20000,
                        delta = 1000,
                        tid;
                    tid = setInterval(function () {
                        if (window.blurred) {
                            return;
                        }
                        time -= delta;
                        timer.text(time / 1000);
                        if (time <= 0) {
                            clearInterval(tid); 
                            document.getElementById("LINK").innerHTML = '</br><div class="text-center"><p><b>Please solve the captcha below to proceed to the destination page.</b></p><center><div id="adsContenedor"></div></center><div class="g-recaptcha m-2" data-callback="CaptchaCheckedAds" data-sitekey="6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin" style="display: inline-block;"></div></br><h2 text-center id="titulo"></h2><button onClick="getLink();" btn-captcha="" class="btn btn-primary" disabled="disabled" id="Linkcaptcha" m-2="" style="width: 300px;"><b>'+e+'</b></button></div></div><div id="captchascriptAds">';
                            captchaAds();
                            setAdsUp();
                        }
                    }, delta);
                }, 500);
}

var keyword = [
"?manual-excel-basico",
"?manual-electricidad-basica",
"?grupo-privado-whatsapp",
"?como-tener-wifi-gratis",
"?manual-instalacion-sistema-fotovoltaico",
"?DBSSHLATHD-Drive",
"?DBSSHLATHD-Media",
"?DBSSHLATHD-Mega",
"?the-beginners-guide-to-microsoft-excel",
"?manual-reparacion-de-fuente-de-pc",
"?manual-reparacion-de-celulares",
"?manual-instalaciones-electricas-para-viviendas",
"?manual-interpretacion-planos-electricos",
"?manual-manejo-multimetro"
]

var randomUrl = 
["https://www.infoproyectos.com/p/types-of-insurance.html",
"https://www.infoproyectos.com/p/the-importance-of-insurance.html",
"https://www.infoproyectos.com/p/definition-of-insurance.html",
"https://www.infoproyectos.com/p/fire-insurance-types.html",
"https://www.infoproyectos.com/p/divisions-of-fire-insurance.html",
"https://www.infoproyectos.com/p/the-concept-of-life-insurance.html",
"https://www.infoproyectos.com/p/types-of-life-insurance-policies.html",
"https://www.infoproyectos.com/p/insurance-companies.html",
"https://www.infoproyectos.com/p/insurance-principles-legal-principles.html",
"https://www.infoproyectos.com/p/technical-principles-insurance.html",
"https://www.infoproyectos.com/p/tips-choosing-right-insurance-company.html",
"https://www.infoproyectos.com/p/health-insurance-important-than-you.html",
"https://www.infoproyectos.com/p/right-age-purchase-health-insurance.html",
"https://www.infoproyectos.com/p/right-time-buy-health-insurance.html",
"https://www.infoproyectos.com/p/cost-health-insurance-family.html",
"https://www.infoproyectos.com/p/factors-family-health-insurance.html",
"https://www.infoproyectos.com/p/health-insurance-cover-death.html",
"https://www.infoproyectos.com/p/accident-insurance-coverage-buy.html"
]

var setPagina = window.location.search;
var indice = setPagina.indexOf("&m=1");
var extraida = setPagina.substring(0, indice);

if (keyword.includes(extraida)) {
    sessionStorage.setItem("setPagina", extraida);
    var i = parseInt(Math.random() * randomUrl.length);
  document.getElementById("articuloImg").removeAttribute("src");
    location.href = randomUrl[i];

} else if(keyword.includes(setPagina)) {
    sessionStorage.setItem("setPagina", setPagina);
    var i = parseInt(Math.random() * randomUrl.length);
  document.getElementById("articuloImg").removeAttribute("src");
    location.href = randomUrl[i];
  
}else{
  
    if (sessionStorage.getItem("setPagina")) {
        var getPagina = sessionStorage.getItem("setPagina");
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><p><b>Wait a moment please...</b></p><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"></h2><button btn-captcha="" class="btn btn-primary" id="enlacecaptcha botonLink" m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        sessionStorage.clear(setTimeout(1000));
        getTiempoCaptcha('Click here to continue');
        setAdsUp();
      document.getElementById("articuloImg").removeAttribute("src");
        function getLink() {
                    location.reload();
                    sessionStorage.setItem("getPagina", getPagina);
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-electricidad-basica") {
           sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL DE ELECTRICIDAD BASICA PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
      document.getElementById("articuloImg").removeAttribute("src");    
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1FX2JxEL5CQzrS13SPxeZbJuzCgofMZlA";
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-excel-basico") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL BASICO DE EXCEL MICROSOFT PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?grupo-privado-whatsapp") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>GRUPO PRIVADO WHATSAPP</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://www.infoproyectos.com/p/result.html?q=grupos%20whatsapp%20amistad#gsc.tab=0&gsc.q=grupos%20whatsapp%20amistad&gsc.page=1";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?como-tener-wifi-gratis") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>Potente ANTENA CASERA de largo alcance, fácil de hacer!</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-instalacion-sistema-fotovoltaico") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL DE INSTALACION DE SISTEMAS FOTOVOLTAICOS PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1FvgxW-_S2cSvTW4x1NQOvr-ZoPMwxcPL";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?DBSSHLATHD-Drive") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>DBSSH (2022) GDRIVE</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1SJwUDgJFGaHU4nrMjMZYZz3bEAa9EBQn";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?DBSSHLATHD-Media") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>DBSSH (2022) MEDIA</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');  
        setAdsUp();
        function getLink() {
                    location.href = "https://www.mediafire.com/file/8srntxakradpy4c/DBSSHLAT.mp4/file";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?DBSSHLATHD-Mega") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>DBSSH (2022) MEGA</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></br></br><center></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://mega.nz/file/C7ITVCgI#4tM9xqqsgglmln7h4qVLG1W4IzD4fMUlDjVW2Lf-HcI";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?the-beginners-guide-to-microsoft-excel") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>The Beginners Guide to Microsoft Excel PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1P-kIJNdT9HNSy-_e3b9Tpd1F8IzEaPcW";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-reparacion-de-fuente-de-pc") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL DE REPARACION DE FUENTES DE PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/13J0rlpho46qnrYl1xUTts68189t1ULg-";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-reparacion-de-celulares") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL DE REPARACION DE CELULARES PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/101xVzDec6JMbzJ7Kqa3isk3RXf7N-TSt";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-instalaciones-electricas-para-viviendas") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL INSTALACIONES ELECTRICAS PARA VIVIENDAS PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/14enwoMjZd27S5ggHymvLWqBpJRFg7fW-";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-interpretacion-planos-electricos") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL INTERPRETACION DE PLANOS ELECTRICOS PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1vogfzFa1ajmUksQdxxRmxiI0Hfjr_olH";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-manejo-multimetro") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL MANEJO DEL MULTIMETRO PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1onE_iJrEZnvxkldMffFHGArUGu5QtYR1";
        }
          
        }else {
            console.log("N/link");
        }    

}
