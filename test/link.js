var keyword = [
"?manual-excel-basico",
"?manual-electricidad-basica"
]

var randomUrl = 
["https://infoproyectos2020.blogspot.com/p/batalla-de-campeones-la-invasion.html",
"https://infoproyectos2020.blogspot.com/p/final-god-level-grand-slam-mexico-vs.html"
]

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
                            document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"></h2><button onClick="getLink();" class="btn btn-primary" m-2="" style="width: 300px;"><b>'+e+'</b></button></br></br><center><div id="adsContenedor2"></div></center></div></div></section>';

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
                            document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><p><b>Please solve the captcha below to proceed to the destination page.</b></p><center><div id="adsContenedor"></div></center><div class="g-recaptcha m-2" data-callback="CaptchaChecked" data-sitekey="6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin" style="display: inline-block;"></div></br><h2 text-center id="titulo"></h2><button onClick="getLink();" btn-captcha="" class="btn btn-primary" disabled="disabled" id="enlacecaptcha" m-2="" style="width: 300px;"><b>'+e+'</b></button></br></br><center><div id="adsContenedor2"></div></center></div></div><div id="captchascript"></div></section>';

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
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><p><b>Wait a moment please...</b></p><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"></h2><button btn-captcha="" class="btn btn-primary" id="enlacecaptcha botonLink" m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></br></br><center><div id="adsContenedor2"></div></center></div></div></section>';
        sessionStorage.clear(setTimeout(1000));
        function getLink() {
                    location.reload();
                    sessionStorage.setItem("getPagina", getPagina);
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-electricidad-basica") {
           sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL DE ELECTRICIDAD BASICA PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></br></br><center><div id="adsContenedor2"></div></center></div></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1FX2JxEL5CQzrS13SPxeZbJuzCgofMZlA";
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-excel-basico") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '<section class="content-container" style="height: auto;"><div class="card"><div class="card-body text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL BASICO DE EXCEL MICROSOFT PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">20</span></b></button></br></br><center><div id="adsContenedor2"></div></center></div></div></section>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR";
        }
          
        }else {
            console.log("No hay link");
        }    

}
