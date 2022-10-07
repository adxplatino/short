var keyword = [
"?manual-excel-basico",
"?manual-electricidad-basica"
]

var randomUrl = 
["https://webupflex.blogspot.com/p/kim-kardashian-paga-un-millon-de.html",
"https://webupflex.blogspot.com/p/urgente-elon-musk-vuelve-por-twitter.html"
]

function getTiempo(e){
    var timer = $('#timer');
                window.setTimeout(function () {
                    let time = 5000,
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
        //document.getElementById("LINK").innerHTML = '</br><div class="text-center"><p><b>Wait a moment please...</b></p><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"></h2><button btn-captcha="" class="btn btn-primary" id="enlacecaptcha botonLink" m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">5</span></b></button></div>';
        //sessionStorage.clear(setTimeout(1000));
        //getTiempo('Click here to continue');
        document.getElementById("articuloImg").innerHTML = '<b>NO HAY IMG</b>';
        //function getLink() {
                    //location.reload();
                    //sessionStorage.setItem("getPagina", getPagina);
        //}
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-electricidad-basica") {
           sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL DE ELECTRICIDAD BASICA PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">5</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');
document.getElementById("articuloImg").removeAttribute("src");
        function getLink() {
                    location.href = "https://drive.google.com/file/d/1FX2JxEL5CQzrS13SPxeZbJuzCgofMZlA";
        }
        
        }else if (sessionStorage.getItem("getPagina") === "?manual-excel-basico") {
            sessionStorage.clear(setTimeout(1000));
        document.getElementById("LINK").innerHTML = '</br><div class="text-center"><center><div id="adsContenedor"></div></center><h2 text-center id="titulo"><b>MANUAL BASICO DE EXCEL MICROSOFT PDF</b></h2><button class="btn btn-primary"  m-2="" style="width: 300px;" disabled="disabled"><b>Please wait ... <span id="timer">5</span></b></button></div>';
        getTiempo('<i class="fa-solid fa-up-right-from-square"></i> GET LINK');

        function getLink() {
                    location.href = "https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR";
        }
          
        }else {
            console.log("N/link");
        }    

}
