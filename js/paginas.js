var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var color_codificado= urlParams.get('color_ejecutado');
var color_ejecutado = decodeURIComponent(color_codificado);
var navegacion = document.querySelector("body")

var color_red="#be0909"
var color_null="chocolate"
var color_azul="#0c61ff"
var color_verde="#79ff0c"
var color_violeta="#a200ff"

economica.addEventListener("click", e=>{
    economica.style.color = eval(`color_${color_ejecutado}`)
    pag_caja2.style.color = eval(`color_${color_ejecutado}`)
    basica.style.color=""
    autogestionable.style.color=""
    ecommerce.style.color= ""
    contenido_paginas.style.animation ="desliz 2s"
    setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web económicas se han convertido en una opción atractiva para aquellos que desean establecer una presencia en línea sin incurrir en grandes costos. Estas páginas ofrecen diseños simples pero efectivos, funciones básicas y una estructura fácil de navegar, todo ello a un precio asequible. Por lo tanto, permitira compartir información relevante y atraer a su público objetivo de manera eficiente y económica.."
    pag_caja1.innerHTML ="<br> 4 Secciones <br><br> SEO básico"
    pag_caja2.innerHTML ="<br><br><br> 150 USD"
    pag_caja3.innerHTML ="<br> Redes Sociales <br><br> Google Tienda"
})

basica.addEventListener("click", e=>{
    basica.style.color = eval(`color_${color_ejecutado}`)
    pag_caja2.style.color = eval(`color_${color_ejecutado}`)

    economica.style.color="white"
    autogestionable.style.color=""
    ecommerce.style.color= ""
    contenido_paginas.style.animation ="desliz 2s"
        setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web básicas son una opción fundamental para aquellos que desean tener presencia en línea con un enfoque minimalista y funcional. Estas páginas ofrecen características esenciales y una navegación intuitiva. Aunque pueden requerir una inversión inicial ligeramente mayor que las páginas web económicas, brindan una mayor flexibilidad y personalización, permitiendo mayor interactividad."
    pag_caja1.innerHTML ="<br> 5 Secciones <br><br> Web Interactiva <br><br> Diseño Moderno"
    pag_caja2.innerHTML ="<br><br><br> 250 USD"
    pag_caja3.innerHTML ="<br>Secciones Externas <br><br> Inicio de Sesion <br><br> SEO básico"
})

autogestionable.addEventListener("click", e=>{
    autogestionable.style.color = eval(`color_${color_ejecutado}`)
    pag_caja2.style.color = eval(`color_${color_ejecutado}`)
    economica.style.color="white"
    basica.style.color=""
    ecommerce.style.color= ""
    contenido_paginas.style.animation ="desliz 2s"
    setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web autogestionables permiten a los propietarios actualizar y gestionar su contenido fácilmente, sin conocimientos técnicos. Con un panel intuitivo, pueden hacer cambios en tiempo real y agregar secciones. A diferencia de las páginas básicas, ofrecen mayor control y autonomía. Ideal para sitios con actualizaciones frecuentes o que buscan mantenerse actualizados."
    pag_caja1.innerHTML ="<br> Administrable <br><br> SEO Avanzado <br><br> Base de datos"
    pag_caja2.innerHTML ="<br><br><br> 400 USD"
    pag_caja3.innerHTML ="<br> Sistema de Pago <br><br> 7 Secciones <br><br> Logotipos"
})

ecommerce.addEventListener("click", e=>{
    ecommerce   .style.color = eval(`color_${color_ejecutado}`)
    pag_caja2.style.color = eval(`color_${color_ejecutado}`)
    economica.style.color="white"
    basica.style.color=""
    autogestionable.style.color=""
    contenido_paginas.style.animation ="desliz 2s"
    setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web E-commerce están diseñadas para facilitar la compra y venta en línea con características especializadas como carritos de compra y pasarelas de pago. A diferencia de las páginas web autogestionables, se enfocan en brindar una experiencia de compra fluida para los clientes. Son ideales para emprendedores y empresas que buscan vender productos en línea de manera eficiente y profesional."
    pag_caja1.innerHTML ="<br> Carrito de Compras <br><br> Control total <br><br> 10 Secciones"
    pag_caja2.innerHTML ="<br><br><br> 500 USD"
    pag_caja3.innerHTML ="<br> Buscador de Items <br><br> Diseño Grafico <br><br> 10 externas"
})

var validacion = false
var validacion2 = false
var validacion3 = false

var validacion_codificada= urlParams.get('validacion');
var validacion = decodeURIComponent(validacion_codificada);
var validacion_codificada2= urlParams.get('validacion2');
var validacion2 = decodeURIComponent(validacion_codificada2);
var validacion_codificada3= urlParams.get('validacion3');
var validacion3 = decodeURIComponent(validacion_codificada3);


if (validacion == "true") {
    economica.style.color="white"
    basica.style.color=eval(`color_${color_ejecutado}`)
    pag_caja2.style.color =eval(`color_${color_ejecutado}`)
    autogestionable.style.color=""
    ecommerce.style.color= ""
    contenido_paginas.style.animation ="desliz 2s"
        setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web básicas son una opción fundamental para aquellos que desean tener presencia en línea con un enfoque minimalista y funcional. Estas páginas ofrecen características esenciales y una navegación intuitiva. Aunque pueden requerir una inversión inicial ligeramente mayor que las páginas web económicas, brindan una mayor flexibilidad y personalización, permitiendo mayor interactividad."
    pag_caja1.innerHTML ="<br> 5 Secciones <br><br> Web Interactiva <br><br> Diseño Moderno"
    pag_caja2.innerHTML ="<br><br><br> 250 USD"
    pag_caja3.innerHTML ="<br>Secciones Externas <br><br> Inicio de Sesion <br><br> SEO básico"
}

if (validacion2 == "true") {
    economica.style.color="white"
    basica.style.color=""
    autogestionable.style.color=eval(`color_${color_ejecutado}`)
    pag_caja2.style.color =eval(`color_${color_ejecutado}`)
    ecommerce.style.color= ""
    contenido_paginas.style.animation ="desliz 2s"
    setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web autogestionables permiten a los propietarios actualizar y gestionar su contenido fácilmente, sin conocimientos técnicos. Con un panel intuitivo, pueden hacer cambios en tiempo real y agregar secciones. A diferencia de las páginas básicas, ofrecen mayor control y autonomía. Ideal para sitios con actualizaciones frecuentes o que buscan mantenerse actualizados."
    pag_caja1.innerHTML ="<br> Administrable <br><br> SEO Avanzado <br><br> Base de datos"
    pag_caja2.innerHTML ="<br><br><br> 400 USD"
    pag_caja3.innerHTML ="<br> Sistema de Pago <br><br> 7 Secciones <br><br> Logotipos"
}

if (validacion3 == "true") {
    economica.style.color="white"
    basica.style.color=""
    autogestionable.style.color=""
    ecommerce.style.color=eval(`color_${color_ejecutado}`)
    pag_caja2.style.color =eval(`color_${color_ejecutado}`)
    contenido_paginas.style.animation ="desliz 2s"
    setTimeout(() => {
        contenido_paginas.style.animation =""
    }, 1900);
    pag_texto.textContent ="Las páginas web E-commerce están diseñadas para facilitar la compra y venta en línea con características especializadas como carritos de compra y pasarelas de pago. A diferencia de las páginas web autogestionables, se enfocan en brindar una experiencia de compra fluida para los clientes. Son ideales para emprendedores y empresas que buscan vender productos en línea de manera eficiente y profesional."
    pag_caja1.innerHTML ="<br> Carrito de Compras <br><br> Control total <br><br> 10 Secciones"
    pag_caja2.innerHTML ="<br><br><br> 500 USD"
    pag_caja3.innerHTML ="<br> Buscador de Items <br><br> Diseño Grafico <br><br> 10 externas"
}
