var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var color_codificado= urlParams.get('color_ejecutado');
var color_ejecutado = decodeURIComponent(color_codificado);
var navegacion = document.querySelector("body")
const rootStyles = document.documentElement.style;

var color_red="#be0909"
var color_null="chocolate"
var color_azul="#0c61ff"
var color_verde="#79ff0c"
var color_violeta="#a200ff"
var color_guardado = eval(`color_${color_ejecutado}`);

/* COLORES Y ANIMACION DEL HEADER */
window.addEventListener("scroll", function () {
    let posicion_pagina = logo_seccion.getBoundingClientRect().top;
    console.log(posicion_pagina)
    /* ANIMACION HEADER HEADER HEADER */
    if(posicion_pagina < 150 ) {
      header.style.boxShadow = "0 0 5px 0 chocolate"
      header.style.background = "rgb(9, 9, 9)"
      header.style.transition= "2s"}
    if(posicion_pagina < 150 & color_ejecutado != "null") {
      header.style.boxShadow = "0 0 5px 0" + color_guardado
      header.style.background = "rgb(9, 9, 9)"
      header.style.transition= "2s"}
  if (posicion_pagina > 150) {
    header.style.boxShadow = ""
    header.style.background = "rgb(12, 12, 12)"
} 
})


/* CAMBIO DE COLOR TOTAL //// ROJO */

if (color_ejecutado !== "null") {
    /*logos principales */
    function cambio() {
          instagram.src ="/assets/iconos/instagram-" + color_ejecutado +".png"
    logo_header.src ="/assets/logos/header_" + color_ejecutado + ".png"
    logo_seccion.src ="/assets/logos/hero_" + color_ejecutado + ".png"
    logo_footer.src ="/assets/logos/header_" + color_ejecutado+ ".png"
    hamburguesa.src = "/assets/iconos/hambur_" +color_ejecutado+ ".svg"
    }
    cambio()
}

rojo.addEventListener("click", e=>{
  color_ejecutado ="red"
  navegacion.classList.add("content2")
  const color_codificadoo = encodeURIComponent(color_ejecutado);
  window.location.href = `index.html?color_ejecutado=${"red"}`;
  
  /* colores */
  rootStyles.setProperty('--principal', '#be0909'); 
  rootStyles.setProperty('--secundario', '#be0909');

  cambio()
})

if (color_ejecutado == "red") {
  /* cambio general */
  rootStyles.setProperty('--principal', '#be0909');
  rootStyles.setProperty('--secundario', '#be0909');
  navegacion.classList.add("content2")

  color.style.border ="1px double #be0909"
  cambio()
}



azul.addEventListener("click", e=>{
  color_ejecutado ="azul"
  navegacion.classList.add("content3")
  const color_codificadoo = encodeURIComponent(color_ejecutado);
  window.location.href = `index.html?color_ejecutado=${"azul"}`;
  
  /* colores */
  rootStyles.setProperty('--principal', '#0c61ff'); 
  rootStyles.setProperty('--secundario', '#0544cc');

  cambio()
})

if (color_ejecutado === "azul") {
  color_ejecutado ="azul"
  navegacion.classList.add("content3")
  
  /* colores */
  rootStyles.setProperty('--principal', '#0c61ff'); 
  rootStyles.setProperty('--secundario', '#0544cc');

    /* Fixeados */
    color.style.border ="1px double #0c61ff"

}

verde.addEventListener("click", e=>{
  color_ejecutado ="verde"
  navegacion.classList.add("content4")
  const color_codificadoo = encodeURIComponent(color_ejecutado);
  window.location.href = `index.html?color_ejecutado=${"verde"}`;
  
  /* colores */
  rootStyles.setProperty('--principal', '#79ff0c');
  rootStyles.setProperty('--secundario', '#5fa00b');


  color.style.border ="1px double #79ff0c"
  
cambio()
})
if (color_ejecutado === "verde") {
  color_ejecutado ="verde"
  navegacion.classList.add("content4")
  
  /* colores */
  rootStyles.setProperty('--principal', '#5fa00b');
  rootStyles.setProperty('--secundario', '#5fa00b');

  color.style.border ="1px double #79ff0c"

}

violeta.addEventListener("click", e=>{
  color_ejecutado ="violeta"
  navegacion.classList.add("content5")
  const color_codificadoo = encodeURIComponent(color_ejecutado);
  window.location.href = `index.html?color_ejecutado=${"violeta"}`;
  
  /* colores */
  rootStyles.setProperty('--principal', '#a200ff');
  rootStyles.setProperty('--secundario', '#750cff');

  color.style.border ="1px double #a200ff"

  cambio()

})
if (color_ejecutado === "violeta") {
  color_ejecutado ="violeta"
  navegacion.classList.add("content5")
  
  /* colores */
  rootStyles.setProperty('--principal', '#a200ff');
  rootStyles.setProperty('--secundario', '#750cff');

    /* Fixeados */
    color.style.border ="1px double #a200ff"

  /* ICONOS SECCION 2 */
}
