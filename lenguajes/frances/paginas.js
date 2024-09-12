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
    pag_texto.textContent ="Les sites web économiques sont devenus une option attrayante pour ceux qui souhaitent établir une présence en ligne sans engager de frais importants. Ces sites proposent des designs simples mais efficaces, des fonctionnalités de base et une structure facile à naviguer, le tout à un prix abordable. Ainsi, ils permettent de partager des informations pertinentes et d'attirer efficacement et économiquement votre public cible."
    pag_caja1.innerHTML ="<br> 4 Sections <br><br> SEO básique"
    pag_caja2.innerHTML ="<br><br><br> 150 USD"
    pag_caja3.innerHTML ="<br> réseaux sociaux <br><br> Google Magasin"
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
    pag_texto.textContent = "Les sites web basiques sont une option fondamentale pour ceux qui souhaitent avoir une présence en ligne avec une approche minimaliste et fonctionnelle. Ces pages offrent des caractéristiques essentielles et une navigation intuitive. Bien qu'elles puissent nécessiter un investissement initial légèrement supérieur aux sites web économiques, elles offrent une plus grande flexibilité et personnalisation, permettant une plus grande interactivité.";
    pag_caja1.innerHTML = "<br> 5 Sections <br><br> Site Web Interactif <br><br> Design Moderne";
    pag_caja2.innerHTML = "<br><br><br> 250 USD";
    pag_caja3.innerHTML = "<br>Sections Externes <br><br> Connexion <br><br> SEO Basique";    
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
    pag_texto.textContent = "Les sites web autogérés permettent aux propriétaires de mettre à jour et de gérer leur contenu facilement, sans compétences techniques. Avec un tableau de bord intuitif, ils peuvent apporter des modifications en temps réel et ajouter des sections. Contrairement aux sites web basiques, ils offrent un plus grand contrôle et une plus grande autonomie. Idéaux pour les sites nécessitant des mises à jour fréquentes ou cherchant à rester à jour.";
    pag_caja1.innerHTML = "<br> Gérable <br><br> SEO Avancé <br><br> Base de Données";
    pag_caja2.innerHTML = "<br><br><br> 400 USD";
    pag_caja3.innerHTML = "<br> Système de Paiement <br><br> 7 Sections <br><br> Logos";    
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
    pag_texto.textContent = "Les sites web E-commerce sont conçus pour faciliter l'achat et la vente en ligne avec des fonctionnalités spécialisées telles que des paniers d'achat et des passerelles de paiement. Contrairement aux sites web autogérés, ils se concentrent sur la fourniture d'une expérience d'achat fluide pour les clients. Ils sont idéaux pour les entrepreneurs et les entreprises qui souhaitent vendre des produits en ligne de manière efficace et professionnelle.";
    pag_caja1.innerHTML = "<br> Panier d'Achat <br><br> Contrôle Total <br><br> 10 Sections";
    pag_caja2.innerHTML = "<br><br><br> 500 USD";
    pag_caja3.innerHTML = "<br> Moteur de Recherche d'Articles <br><br> Conception Graphique <br><br> 10 Externes";    
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
    pag_texto.textContent = "Les sites web basiques sont une option fondamentale pour ceux qui souhaitent avoir une présence en ligne avec une approche minimaliste et fonctionnelle. Ces pages offrent des caractéristiques essentielles et une navigation intuitive. Bien qu'elles puissent nécessiter un investissement initial légèrement supérieur aux sites web économiques, elles offrent une plus grande flexibilité et personnalisation, permettant une plus grande interactivité.";
    pag_caja1.innerHTML = "<br> 5 Sections <br><br> Site Web Interactif <br><br> Design Moderne";
    pag_caja2.innerHTML = "<br><br><br> 250 USD";
    pag_caja3.innerHTML = "<br>Sections Externes <br><br> Connexion <br><br> SEO Basique"; 
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
    pag_texto.textContent = "Les sites web autogérés permettent aux propriétaires de mettre à jour et de gérer leur contenu facilement, sans compétences techniques. Avec un tableau de bord intuitif, ils peuvent apporter des modifications en temps réel et ajouter des sections. Contrairement aux sites web basiques, ils offrent un plus grand contrôle et une plus grande autonomie. Idéaux pour les sites nécessitant des mises à jour fréquentes ou cherchant à rester à jour.";
    pag_caja1.innerHTML = "<br> Gérable <br><br> SEO Avancé <br><br> Base de Données";
    pag_caja2.innerHTML = "<br><br><br> 400 USD";
    pag_caja3.innerHTML = "<br> Système de Paiement <br><br> 7 Sections <br><br> Logos";
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
    pag_texto.textContent = "Les sites web E-commerce sont conçus pour faciliter l'achat et la vente en ligne avec des fonctionnalités spécialisées telles que des paniers d'achat et des passerelles de paiement. Contrairement aux sites web autogérés, ils se concentrent sur la fourniture d'une expérience d'achat fluide pour les clients. Ils sont idéaux pour les entrepreneurs et les entreprises qui souhaitent vendre des produits en ligne de manière efficace et professionnelle.";
    pag_caja1.innerHTML = "<br> Panier d'Achat <br><br> Contrôle Total <br><br> 10 Sections";
    pag_caja2.innerHTML = "<br><br><br> 500 USD";
    pag_caja3.innerHTML = "<br> Moteur de Recherche d'Articles <br><br> Conception Graphique <br><br> 10 Externes";
}
