function captcha(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://www.google.com/recaptcha/api.js?hl=es";
document.getElementById('captchascript').appendChild(externalScript);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";  
document.getElementById('captchascript').appendChild(inlineScript); 
}
  
function CaptchaChecked() {
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
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

var keyword = [
"?manual-excel-basico",
"?manual-electricidad-basica",
"?grupo-privado-whatsapp",
"?como-tener-wifi-gratis",
"?manual-instalacion-sistema-fotovoltaico",
"?DBSSHLATHD-Drive",
"?DBSSHLATHD-Media",
"?DBSSHLATHD-Mega",
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
"https://www.infoproyectos.com/p/health-insurance-cover-death.html"
]

function getTiempo(e){
    var timer = $('#timer');
                window.setTimeout(function () {
                    let time = 10000,
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
                            document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button onClick="getLink();" class="btn btn-primary"   m-2="" style="width: 300px;"><b>'+e+'</b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
                            setAdsUp();
                            setAdsDown();
                        }
                    }, delta);
                }, 500);
}
function getTiempoCaptcha(e){
    var timer = $('#timer');
                window.setTimeout(function () {
                    let time = 10000,
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
                            document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><p><b>Please solve the captcha below to proceed to the destination page.</b></p><center><div id="adsContenedor"></div></center><div class="g-recaptcha m-2" data-callback="CaptchaChecked" data-sitekey="6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin" style="display: inline-block;"></div></div><center><div id="adsContenedor2"></div></center><div style="text-align: center;"><button onClick="getLink();" btn-captcha="" class="btn btn-primary" disabled="disabled" id="enlacecaptcha" m-2="" style="width: 300px;"><b>'+e+'</b></button></div><br /></div><div id="captchascript"></div></section>';
                            captcha();
                            setAdsUp();
                            setAdsDown();
                        }
                    }, delta);
                }, 500);
}

var setPagina = window.location.search;
var indice = setPagina.indexOf("&m=1");
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

    if (sessionStorage.getItem("setPagina")) {
        var getPagina = sessionStorage.getItem("setPagina");
        sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><p><b>Wait a moment please...</b></p><center><div id="adsContenedor"></div></center><div style="text-align: center;"><button btn-captcha="" class="btn btn-primary" id="enlacecaptcha" m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center><br /></div></section>';
        getTiempoCaptcha('Click here to continue');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.reload();
                    sessionStorage.setItem("getPagina", getPagina);
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-electricidad-basica") {
        sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1FX2JxEL5CQzrS13SPxeZbJuzCgofMZlA";
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-excel-basico") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?grupo-privado-whatsapp") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://www.infoproyectos.com/p/result.html?q=grupos%20whatsapp%20amistad#gsc.tab=0&gsc.q=grupos%20whatsapp%20amistad&gsc.page=1";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?como-tener-wifi-gratis") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1EvjzoTooiYtMt3r9JqBDUEqN8TlPR50j";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?manual-instalacion-sistema-fotovoltaico") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1FvgxW-_S2cSvTW4x1NQOvr-ZoPMwxcPL";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?DBSSHLATHD-Drive") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1SJwUDgJFGaHU4nrMjMZYZz3bEAa9EBQn";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?DBSSHLATHD-Media") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://www.mediafire.com/file/8srntxakradpy4c/DBSSHLAT.mp4/file";
        }
          
        }else if (sessionStorage.getItem("getPagina") === "?DBSSHLATHD-Mega") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"<center><div id="adsContenedor"></div></center><div style="text-align: center;"><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">10</span></b></button></div></br><center><div id="adsContenedor2"></div></center></br></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        setAdsUp();
        setAdsDown();
        function getLink() {
                    location.href = "https://mega.nz/file/C7ITVCgI#4tM9xqqsgglmln7h4qVLG1W4IzD4fMUlDjVW2Lf-HcI";
        }
          
        }else {
            console.log("No hay link de descarga");
        }    

}
