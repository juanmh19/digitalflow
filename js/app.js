var incluyen = document.querySelectorAll(".incluyen");
var nosotros = document.querySelectorAll(".animacion");
var color_ejecutado = "predeterminado"
var navegacion = document.querySelector("body")

const color_codificadoo = encodeURIComponent(color_ejecutado);
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var color_codificado= urlParams.get('color_ejecutado');
var color_ejecutado = decodeURIComponent(color_codificado);

var color_red="#be0909"
var color_null="chocolate"
var color_azul="#0c61ff"
var color_verde="#79ff0c"
var color_violeta="#a200ff"
var color_guardado = eval(`color_${color_ejecutado}`);

/* ANIMACION DEL ICONO PRINCIPAL COLOR */
color.addEventListener("mouseover", e=>{
  menu_colores.style.transition ="2s"
  menu_colores.style.display ="block"
})
color.addEventListener("mouseout", e=>{
  menu_colores.style.display ="none"
})
/* ANIMACION DEL MENU DE COLORES */
menu_colores.addEventListener("mouseover", e=>{
  menu_colores.style.transition ="2s"
  menu_colores.style.display ="block"
})
menu_colores.addEventListener("mouseout", e=>{
  menu_colores.style.display ="none"
})


azul.addEventListener("click", e=>{
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
})
if (color_ejecutado === "azul") {
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
}
verde.addEventListener("click", e=>{
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
})
if (color_ejecutado === "verde") {
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
}
violeta.addEventListener("click", e=>{
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
})
if (color_ejecutado === "violeta") {
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
}
rojo.addEventListener("click", e=>{
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
})
if (color_ejecutado == "red") {
  icono_web.src = "/assets/iconos/web-" + color_ejecutado +".png"
  estrella.src = "/assets/iconos/estrella-" + color_ejecutado +".png"
  icono_mujer.src = "/assets/iconos/mujer-" + color_ejecutado +".png"
}



/* ANIMACION DE LOS TIPOS DE PAGINAS, SECCION 2 */

var ejecutado2 = false;
var ejecutado3 = false;

window.addEventListener("scroll", function () {
  let posicion_pagina = pag_uno.getBoundingClientRect().top;

  /*ANIMACION  SECCION1  SECCION1  SECCION1  SECCION1 */
  if (posicion_pagina < 500 && !ejecutado2) {
    pag_uno.style.animation = "agrandar 3s"
    pag_uno.style.width = "90%"
    pag_dos.style.animation = "agrandar 3s"
    pag_dos.style.width = "90%"
    pag_tres.style.animation = "agrandar 3s"
    pag_tres.style.width = "90%"
    pag_cuatro.style.animation = "agrandar 3s"
    pag_cuatro.style.width = "90%"
    ejecutado2 = true;

    function animacion() {
      setTimeout(() => {
      pag_cuatro.style.boxShadow = ""
      if (color_ejecutado != "null") {
        pag_uno.style.boxShadow = "0 0 5px 0" + color_guardado
      } 
      if (color_ejecutado === "null") {
        pag_uno.style.boxShadow = "0 0 5px 0 chocolate"
      } 
      pag_cuatro.style.transform = "scale(1)"
      pag_uno.style.transform = "scale(1.02)"
      pag_uno.style.transition = "0.2s"
    }, 1500);
    
    setTimeout(() => {
      pag_uno.style.boxShadow = ""
      if (color_ejecutado === "null") {
        pag_dos.style.boxShadow = "0 0 5px 0 chocolate"
      } if (color_ejecutado != "null") {
        pag_dos.style.boxShadow = "0 0 5px 0" + color_guardado
      }
      pag_uno.style.transform = "scale(1)"
      pag_dos.style.transform = "scale(1.02)"
      pag_dos.style.transition = "0.2s"
    }, 3500);
    
    setTimeout(() => {
      pag_dos.style.boxShadow = ""
      if (color_ejecutado === "null") {
        pag_tres.style.boxShadow = "0 0 5px 0 chocolate"
      } if (color_ejecutado != "null") {
        pag_tres.style.boxShadow = "0 0 5px 0" + color_guardado
      }
      pag_dos.style.transform = "scale(1)"
      pag_tres.style.transform = "scale(1.02)"
      pag_tres.style.transition = "0.2s"
    }, 5500);
    
    setTimeout(() => {
      pag_tres.style.boxShadow = ""
      if (color_ejecutado === "null") {
        pag_cuatro.style.boxShadow = "0 0 5px 0 chocolate"
      } if (color_ejecutado != "null") {
        pag_cuatro.style.boxShadow = "0 0 5px 0" + color_guardado
      }
      pag_tres.style.transform = "scale(1)"
      pag_cuatro.style.transform = "scale(1.02)"
      pag_cuatro.style.transition = "0.2s"
    }, 7500);
    }
    
    animacion()
    setInterval(() => {
      animacion()
    }, 7700);
  }

/* ANIMACION DE LAS ESTRELLAS Y EL TEXTO, SECCION 3 */
  if (posicion_pagina < -350 & ejecutado3 === false) {

    contenedor_sec3.style.animation ="aparecer 4s"
    contenedor_sec3.style.display ="grid"
    
setInterval(() => {
  estrella.style.transform = "rotate(360deg)";
  estrella.style.transition = "2s";
}, 1000);

setInterval(() => {
  estrella.style.transform = "scale(1.2)"
}, 3000);


nosotros.forEach(nosotro => {
  setInterval(() => {
  nosotro.style.color = "var(--secundario)"
  nosotro.style.transition = "1s"
}, 3000);
});
ejecutado3 = true
  }


  if (posicion_pagina < -1200) {
    if (color_ejecutado === "null") {
      precio_justo.style.color ="#ff8c00"
    } if (color_ejecutado != "null") {
      precio_justo.style.color = color_guardado
    }
    
    precio_justo.style.transition = "2s"
    var help = document.querySelectorAll(".help")
    
    help.forEach(helps => {
      helps.style.transform = "rotateY(360deg)"
      helps.style.transition = "2s"
      setInterval(() => {
        for (let i = 0; i < help.length; i++) {
          setTimeout(() => {
            help[0].style.transform = "rotateY(0deg)"
          }, 3000);
          setTimeout(() => {
            help[3].style.transform = "rotateY(0deg)"
          }, 6000);
          setTimeout(() => {
            help[6].style.transform = "rotateY(0deg)"
          }, 9000);
          setTimeout(() => {
            help[1].style.transform = "rotateY(0deg)"
          }, 12000);
          setTimeout(() => {
            help[4].style.transform = "rotateY(0deg)"
          }, 15000);
          setTimeout(() => {
            help[7].style.transform = "rotateY(0deg)"
          }, 18000);
          setTimeout(() => {
            help[2].style.transform = "rotateY(0deg)"
          }, 21000);
          setTimeout(() => {
            help[5].style.transform = "rotateY(0deg)"
          }, 24000);
          setTimeout(() => {
            help[8].style.transform = "rotateY(0deg)"
          }, 27000);
          
        }
      }, 1000);
    });
  }
})


/* COTIZACION DE WEBS, SECCION 4 */
var select = document.querySelectorAll(".select");
var precio = document.querySelector(".precio");
var valor = "";
select.forEach(options => {
  options.addEventListener("change", function() {
    valor = 0

    select.forEach(options => {
      valor += parseFloat(options.value || 0);
    });
  
    precio.textContent = valor + seccion.value * 24 + seccion_externaa.value * 24 + "USD";
  });
});
valor_seccion_externa = seccion * 35

/*  ANIMACION SECCION 1 ANIMACION SECCION 1  ANIMACION SECCION 1 /// MANTENER COLOR AL DIRIGIR */
function basica() {
  const validacion = true;
  const color_codificado = encodeURIComponent(color_ejecutado);
  const validacion_codificada = encodeURIComponent(validacion);
  window.location.href = `paginas.html?validacion=${validacion_codificada}&color_ejecutado=${color_codificado}#sec_contenido`;
}
function autogestionable() {
  const validacion2 = true;
  const color_codificado = encodeURIComponent(color_ejecutado);
  const validacion_codificada2 = encodeURIComponent(validacion2);
  window.location.href = `paginas.html?validacion2=${validacion_codificada2}&color_ejecutado=${color_codificado}#sec_contenido`;
}
function ecommerce() {
  const validacion3 = true;
  const color_codificado = encodeURIComponent(color_ejecutado);
  const validacion_codificada3 = encodeURIComponent(validacion3);
  window.location.href = `paginas.html?validacion3=${validacion_codificada3}&color_ejecutado=${color_codificado}#sec_contenido`;
}
function selectio() {
  var respuesta_uno = true
  const pregunta_codificada = encodeURIComponent(respuesta_uno);
  window.location.href = `preguntas.html?respuesta_uno=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_uno`;
}

function alojamiento() {
  var respuesta_dos = true
  const pregunta_codificada = encodeURIComponent(respuesta_dos);
  window.location.href = `preguntas.html?respuesta_dos=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_dos`;
}
function seccion_externa() {
  var respuesta_tres = true
  const pregunta_codificada = encodeURIComponent(respuesta_tres);
  window.location.href = `preguntas.html?respuesta_tres=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_tres`;
}
function diseño_web() {
  var respuesta_cuatro = true
  const pregunta_codificada = encodeURIComponent(respuesta_cuatro);
  window.location.href = `preguntas.html?respuesta_cuatro=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_cuatro`;
}
function sistema_de_pago() {
  var respuesta_cinco = true
  const pregunta_codificada = encodeURIComponent(respuesta_cinco);
  window.location.href = `preguntas.html?respuesta_cinco=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_cinco`;
}
function seo() {
  var respuesta_seis = true
  const pregunta_codificada = encodeURIComponent(respuesta_seis);
  window.location.href = `preguntas.html?respuesta_seis=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_seis`;
}
function mantenimiento() {
  var respuesta_siete = true
  const pregunta_codificada = encodeURIComponent(respuesta_siete);
  window.location.href = `preguntas.html?respuesta_siete=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_siete`;
}
function autogestion() {
  var respuesta_ocho = true
  const pregunta_codificada = encodeURIComponent(respuesta_ocho);
  window.location.href = `preguntas.html?respuesta_ocho=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_ocho`;
}
function secciones() {
  var respuesta_nueve = true
  const pregunta_codificada = encodeURIComponent(respuesta_nueve);
  window.location.href = `preguntas.html?respuesta_nueve=${pregunta_codificada}&color_ejecutado=${color_codificado}#respuesta_nueve`;
}
