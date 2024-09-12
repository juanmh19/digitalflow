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
    pag_texto.textContent ="Economical websites have become an attractive option for those who wish to establish an online presence without incurring significant costs. These websites offer simple yet effective designs, basic functionalities, and an easily navigable structure, all at an affordable price. Thus, they enable sharing relevant information and efficiently attracting your target audience in an economical manner."
    pag_caja1.innerHTML ="<br> 4 Sections <br><br> basic SEO"
    pag_caja2.innerHTML ="<br><br><br> 150 USD"
    pag_caja3.innerHTML ="<br> Social Media <br><br> Google Store"
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
    pag_texto.textContent ="Basic websites are a fundamental option for those who wish to have an online presence with a minimalist and functional approach. These websites offer essential features and intuitive navigation. While they may require a slightly higher initial investment than economical websites, they provide greater flexibility and customization, allowing for increased interactivity."
    pag_caja1.innerHTML ="<br> 5 Sections <br><br> Interactive Web <br><br> Modern Design"
    pag_caja2.innerHTML ="<br><br><br> 250 USD"
    pag_caja3.innerHTML ="<br>External Sections <br><br> Login <br><br> Basic SEO"
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
    pag_texto.textContent ="Self-manageable websites enable owners to easily update and manage their content without technical expertise. With an intuitive dashboard, they can make real-time changes and add sections. Unlike basic websites, they offer greater control and autonomy. Ideal for sites requiring frequent updates or aiming to stay current."
    pag_caja1.innerHTML ="<br> Manageable <br><br> Advanced SEO <br><br> Database"
    pag_caja2.innerHTML ="<br><br><br> 400 USD"
    pag_caja3.innerHTML ="<br> Payment System <br><br> 7 Sections <br><br> Logo"
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
    pag_texto.textContent ="E-commerce websites are designed to facilitate online buying and selling with specialized features such as shopping carts and payment gateways. Unlike self-manageable websites, they focus on providing a seamless shopping experience for customers. They are ideal for entrepreneurs and businesses looking to efficiently and professionally sell products online."
    pag_caja1.innerHTML ="<br> Shopping Cart <br><br> Total Control <br><br> 10 Sections"
    pag_caja2.innerHTML ="<br><br><br> 500 USD"
    pag_caja3.innerHTML ="<br> Item Search <br><br> Grafic Design <br><br> 10 external"
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
    pag_texto.textContent ="Basic websites are a fundamental option for those who wish to have an online presence with a minimalist and functional approach. These websites offer essential features and intuitive navigation. While they may require a slightly higher initial investment than economical websites, they provide greater flexibility and customization, allowing for increased interactivity."
    pag_caja1.innerHTML ="<br> 5 Sections <br><br> Interactive Web <br><br> Modern Design"
    pag_caja2.innerHTML ="<br><br><br> 250 USD"
    pag_caja3.innerHTML ="<br>External Sections <br><br> Login <br><br> Basic SEO"
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
    pag_texto.textContent ="Self-manageable websites enable owners to easily update and manage their content without technical expertise. With an intuitive dashboard, they can make real-time changes and add sections. Unlike basic websites, they offer greater control and autonomy. Ideal for sites requiring frequent updates or aiming to stay current."
    pag_caja1.innerHTML ="<br> Manageable <br><br> Advanced SEO <br><br> Database"
    pag_caja2.innerHTML ="<br><br><br> 400 USD"
    pag_caja3.innerHTML ="<br> Payment System <br><br> 7 Sections <br><br> Logo"
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
    pag_texto.textContent ="E-commerce websites are designed to facilitate online buying and selling with specialized features such as shopping carts and payment gateways. Unlike self-manageable websites, they focus on providing a seamless shopping experience for customers. They are ideal for entrepreneurs and businesses looking to efficiently and professionally sell products online."
    pag_caja1.innerHTML ="<br> Shopping Cart <br><br> Total Control <br><br> 10 Sections"
    pag_caja2.innerHTML ="<br><br><br> 500 USD"
    pag_caja3.innerHTML ="<br> Item Search <br><br> Grafic Design <br><br> 10 external"
}
