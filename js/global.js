/* hamburguesa menu menu */
var activacion = true
hamburguesa.addEventListener("click", e=>{
  if (activacion) {
    contenido_hamburguesa.style.display = "flex"
    activacion = false
} else {
  contenido_hamburguesa.style.display = "none"
  activacion = true
}
})

function inicio() {
    /* transforma el color_ejecutado en codigo url*/
    const color_codificado = encodeURIComponent(color_ejecutado);
    /* redirecciona a donde queremos colocando el valor encriptado */
    window.location.href = `index.html?color_ejecutado=${color_codificado}`;
  }
function nosotross() {
    const color_codificado = encodeURIComponent(color_ejecutado);
    window.location.href = `index.html?color_ejecutado=${color_codificado}#seccion3`;
  }
  function servicioss() {
    const color_codificado = encodeURIComponent(color_ejecutado);
    window.location.href = `index.html?color_ejecutado=${color_codificado}#seccion2`;
  }
  function cotizacionn() {
    const color_codificado = encodeURIComponent(color_ejecutado);
    window.location.href = `index.html?color_ejecutado=${color_codificado}#seccion4`;
  }
  function preguntas() {
    const color_codificado = encodeURIComponent(color_ejecutado);
    window.location.href = `preguntas.html?color_ejecutado=${color_codificado}`;
  }
  function contact() {
    const color_codificado = encodeURIComponent(color_ejecutado);
    window.location.href = `paginas.html?color_ejecutado=${color_codificado}#contact_us`;
  }
  


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
  
  /* ANIMACION DEL MENU DE COLORES */

  bandera.addEventListener("mouseover", e=>{
    menu_idioma.style.transition ="2s"
    menu_idioma.style.display ="block"
  })
  bandera.addEventListener("mouseout", e=>{
    menu_idioma.style.display ="none"
  })
  menu_idioma.addEventListener("mouseover", e=>{
    menu_idioma.style.transition ="2s"
    menu_idioma.style.display ="block"
  })
  menu_idioma.addEventListener("mouseout", e=>{
    menu_idioma.style.display ="none"
  })
  