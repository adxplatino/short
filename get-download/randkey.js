const palabrasClave = [
"#gsc.tab=0&gsc.q=online%20mba%20programs%20for%20international%20students",
"#gsc.tab=0&gsc.q=online%20business%20schools",
"#gsc.tab=0&gsc.q=online%20mba%20programs",
"#gsc.tab=0&gsc.q=mba%20information",
"#gsc.tab=0&gsc.q=accredited%20online%20mba%20programs",
"#gsc.tab=0&gsc.q=online%20masters%20in%20business",
"#gsc.tab=0&gsc.q=master%20mba%20online",
"#gsc.tab=0&gsc.q=mba%20programs%20near%20me",
"#gsc.tab=0&gsc.q=distance%20mba%20course",
"#gsc.tab=0&gsc.q=online%20mba%20finance%20programs",
"#gsc.tab=0&gsc.q=mba%20healthcare%20management%20online",
"#gsc.tab=0&gsc.q=online%20mba",
"#gsc.tab=0&gsc.q=masters%20in%20business%20analytics%20online",
"#gsc.tab=0&gsc.q=mba%20near%20me",
"#gsc.tab=0&gsc.q=mba%20degree%20online",
"#gsc.tab=0&gsc.q=master%20of%20business%20administration%20online",
"#gsc.tab=0&gsc.q=mba%20on%20line",
"#gsc.tab=0&gsc.q=mba%20marketing%20online",
"#gsc.tab=0&gsc.q=distance%20learning%20mba",
"#gsc.tab=0&gsc.q=best%20online%20mba%20programs",
"#gsc.tab=0&gsc.q=top%20online%20mba%20programs",
"#gsc.tab=0&gsc.q=top%20online%20mba",
"#gsc.tab=0&gsc.q=online%20mba%20courses",
"#gsc.tab=0&gsc.q=online%20mba%20for%20working%20professionals",
"#gsc.tab=0&gsc.q=masters%20in%20healthcare%20management",
"#gsc.tab=0&gsc.q=one%20year%20online%20mba",
"#gsc.tab=0&gsc.q=1%20year%20online%20mba",
"#gsc.tab=0&gsc.q=mba%20finance%20online",
"#gsc.tab=0&gsc.q=mba%20admissions%20consulting",
"#gsc.tab=0&gsc.q=mba%20distance%20education",
"#gsc.tab=0&gsc.q=mba%20colleges%20near%20me",
"#gsc.tab=0&gsc.q=accelerated%20mba%20programs",
"#gsc.tab=0&gsc.q=lsu%20online%20mba",
"#gsc.tab=0&gsc.q=executive%20mba%20for%20working%20professionals",
"#gsc.tab=0&gsc.q=masters%20degree%20in%20business%20management",
"#gsc.tab=0&gsc.q=distance%20mba",
"#gsc.tab=0&gsc.q=mba%20programs",
"#gsc.tab=0&gsc.q=best%20online%20marketing%20mba",
"#gsc.tab=0&gsc.q=getting%20an%20mba",
"#gsc.tab=0&gsc.q=affordable%20online%20mba%20programs",
"#gsc.tab=0&gsc.q=affordable%20online%20mba",
"#gsc.tab=0&gsc.q=online%20executive%20mba",
"#gsc.tab=0&gsc.q=mba%20for%20working%20professionals",
"#gsc.tab=0&gsc.q=bachelor%20degree%20business%20administration",
"#gsc.tab=0&gsc.q=best%20online%20mba",
"#gsc.tab=0&gsc.q=ba%20mba",
"#gsc.tab=0&gsc.q=mba%20classes%20near%20me",
"#gsc.tab=0&gsc.q=master's%20degree%20in%20business%20administration",
"#gsc.tab=0&gsc.q=mba%20business%20administration",
"#gsc.tab=0&gsc.q=mba%20master%20of%20business%20administration",
"#gsc.tab=0&gsc.q=master%20of%20business%20admin",
"#gsc.tab=0&gsc.q=part%20time%20mba%20programs",
"#gsc.tab=0&gsc.q=mba%20without%20degree",
"#gsc.tab=0&gsc.q=mba%20in%20marketing%20management",
"#gsc.tab=0&gsc.q=mba%20consulting",
"#gsc.tab=0&gsc.q=asu%20online%20mba",
"#gsc.tab=0&gsc.q=masters%20in%20business%20management",
"#gsc.tab=0&gsc.q=mba%20in%20healthcare%20management",
"#gsc.tab=0&gsc.q=mba%20in%20accounting%20and%20finance",
"#gsc.tab=0&gsc.q=mba%20in%20sustainability%20management",
"#gsc.tab=0&gsc.q=mba%20in%20hr",
"#gsc.tab=0&gsc.q=mba%20in%20human%20resource%20management",
"#gsc.tab=0&gsc.q=mba%20in%20hr%20management",
"#gsc.tab=0&gsc.q=mba%20human%20resources",
"#gsc.tab=0&gsc.q=marketing%20week%20mini%20mba",
"#gsc.tab=0&gsc.q=marketing%20schools",
"#gsc.tab=0&gsc.q=mba%20in%20supply%20chain%20management",
"#gsc.tab=0&gsc.q=one%20year%20mba%20programs",
"#gsc.tab=0&gsc.q=1%20year%20mba%20programs",
"#gsc.tab=0&gsc.q=mba%20supply%20chain",
"#gsc.tab=0&gsc.q=pursuing%20mba",
"#gsc.tab=0&gsc.q=mba%20in%20healthcare%20administration",
"#gsc.tab=0&gsc.q=mba%20in%20logistics%20and%20supply%20chain%20management",
"#gsc.tab=0&gsc.q=master%20of%20hospital%20administration",
"#gsc.tab=0&gsc.q=master%20in%20healthcare%20administration",
"#gsc.tab=0&gsc.q=mba%20marketing",
"#gsc.tab=0&gsc.q=international%20mba%20programs",
"#gsc.tab=0&gsc.q=msn%20mba%20dual%20degree",
"#gsc.tab=0&gsc.q=masters%20in%20business",
"#gsc.tab=0&gsc.q=cheapest%20mba%20programs",
"#gsc.tab=0&gsc.q=affordable%20mba%20programs",
"#gsc.tab=0&gsc.q=mba%20in%20business%20management",
"#gsc.tab=0&gsc.q=business%20masters%20degrees",
"#gsc.tab=0&gsc.q=best%20online%20mba%20in%20the%20world",
"#gsc.tab=0&gsc.q=fast%20track%20mba",
"#gsc.tab=0&gsc.q=healthcare%20mba",
"#gsc.tab=0&gsc.q=accelerated%20mba",
"#gsc.tab=0&gsc.q=cheapest%20online%20mba",
"#gsc.tab=0&gsc.q=most%20affordable%20online%20mba",
"#gsc.tab=0&gsc.q=mba%20master%20degree",
"#gsc.tab=0&gsc.q=business%20school",
"#gsc.tab=0&gsc.q=b%20schools",
"#gsc.tab=0&gsc.q=mba%20in%20hospitality%20management",
"#gsc.tab=0&gsc.q=mba%20accounting",
"#gsc.tab=0&gsc.q=mark%20ritson%20mini%20mba",
"#gsc.tab=0&gsc.q=mini%20mba%20mark%20ritson",
"#gsc.tab=0&gsc.q=mba%20in%20business%20analytics",
"#gsc.tab=0&gsc.q=mba%20in%20hospital%20management",
"#gsc.tab=0&gsc.q=mba%20in%20hospital%20administration",
"#gsc.tab=0&gsc.q=mba%20in%20hospital%20and%20healthcare%20management"];
        
const indiceAleatorio = Math.floor(Math.random() * palabrasClave.length); 

// Obtener el enlace del botón utilizando querySelectorAll
const enlaces = document.querySelectorAll("#randKey");
if (enlaces.length > 0) {
    // Agregar la palabra clave aleatoria a todos los enlaces encontrados
    enlaces.forEach((enlace) => {
        enlace.href = palabrasClave[indiceAleatorio];
    });
}

// Agregar un evento de clic a todos los botones encontrados
const botones = document.querySelectorAll("#randKey");
if (botones.length > 0) {
    botones.forEach((boton) => {
        boton.addEventListener("click", rotarPalabrasClave);
    });
}

// Función para manejar el evento de clic
function rotarPalabrasClave() {
    const indiceAleatorio = Math.floor(Math.random() * palabrasClave.length);
    // Actualizar todos los enlaces con la nueva palabra clave aleatoria
    enlaces.forEach((enlace) => {
        enlace.href = palabrasClave[indiceAleatorio];
    }
}  
