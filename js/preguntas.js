var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var color_codificado= urlParams.get('color_ejecutado');
var color_ejecutado = decodeURIComponent(color_codificado);
var respuesta_uno_codificado= urlParams.get('respuesta_uno');
var respuesta_dos_codificado= urlParams.get('respuesta_dos');
var respuesta_tres_codificado= urlParams.get('respuesta_tres');
var respuesta_cuatro_codificado= urlParams.get('respuesta_cuatro');
var respuesta_cinco_codificado= urlParams.get('respuesta_cinco');
var respuesta_seis_codificado= urlParams.get('respuesta_seis');
var respuesta_siete_codificado= urlParams.get('respuesta_siete');
var respuesta_ocho_codificado= urlParams.get('respuesta_ocho');
var respuesta_nueve_codificado= urlParams.get('respuesta_nueve');
var navegacion = document.querySelector("body")


/* ANIMACION Y FUNCION DE LAS PREGUNTAS */
var preguntas = document.querySelectorAll(".preguntas");
var help = document.querySelectorAll(".help");
preguntas.forEach(function(pregunta) {
    var oculto = pregunta.querySelector(".oculto");
    var isFirstClick = true;
  
    pregunta.addEventListener("click", function() {
      if (isFirstClick === true) {
        oculto.style.display = "block";
        isFirstClick = false;
      } else {
        oculto.style.display = "none";
        pregunta.style.boxShadow = ""
        isFirstClick = true;
      }
    });

  });

 
  if (respuesta_uno_codificado) {
    isFirstClick = false;
    respuesta_uno.style.display = "block";
  }
 if (respuesta_dos_codificado) {
  isFirstClick = false;
    respuesta_dos.style.display = "block";
  }
 if (respuesta_tres_codificado) {
  isFirstClick = false;
    respuesta_tres.style.display = "block";
  }
 if (respuesta_cuatro_codificado) {
  isFirstClick = false;
    respuesta_cuatro.style.display = "block";
  }
 if (respuesta_cinco_codificado) {
  isFirstClick = false;
    respuesta_cinco.style.display = "block";
  }
 if (respuesta_seis_codificado) {
  isFirstClick = false;
    respuesta_seis.style.display = "block";
  }
 if (respuesta_siete_codificado) {
  isFirstClick = false;
    respuesta_siete.style.display = "block";
  }
 if (respuesta_ocho_codificado) {
  isFirstClick = false;
    respuesta_ocho.style.display = "block";
  }
 if (respuesta_nueve_codificado) {
  isFirstClick = false;
    respuesta_nueve.style.display = "block";
  }