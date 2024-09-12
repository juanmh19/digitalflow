<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/global.css">
        <link rel="stylesheet" href="/css/paginas.css">
        <link rel="stylesheet" href="/css/animaciones.css">
        <title>Digital Flow - De Quelle Page Avez-Vous Besoin</title>
        <link rel="shortcut icon" href="/assets/logos/logosin2.png" type="image/x-icon" sizes="10x10"/>
        <meta
            name="description"
            content="Digital Flow se concentre sur la création de solutions web de pointe qui se démarquent et 
            résonnent avec votre public.
            Que vous ayez besoin d'un site web d'entreprise, d'une boutique en ligne ou d'une plateforme sur mesure"/>
    </head>
    
<body class="content">
    <!--HEADER HEADER HEADER HEADER HEADER--->
    <header id="header">
        <nav>
            <div class="logo">
                <img id="logo_header" src="/assets/logos/logosin4.png" alt="icône_header">
            </div>
    
            <div class="navegacion">
                <ul>
                    <li><a href="#" onclick="inicio()">Accueil</a></li>
                    <li><a href="#" onclick="nosotross()">À Propos</a></li>
                    <li><a href="#" onclick="servicioss()">Services</a></li>
                    <li><a href="#" onclick="cotizacionn()">Prix</a></li>
                    <li><a href="#" onclick="preguntas()">FAQ</a></li>
                </ul>
            </div>
    
            <img class="menu" id="hamburguesa" src="/assets/iconos/hambur_null.svg" alt="menu_hamburguesa">
            
            <a href="#" onclick="contact()"><button aria-label="contactez-nous">Contactez-nous</button></a>
        </nav>
    </header>
    <div class="menu_menu" id="contenido_hamburguesa">
        <ul>
            <li><a href="#" onclick="inicio()">Accueil</a></li>
            <li><a href="#" onclick="nosotross()">À Propos</a></li>
            <li><a href="#" onclick="servicioss()">Services</a></li>
            <li><a href="#" onclick="cotizacionn()">Prix</a></li>
            <li><a href="#" onclick="preguntas()">FAQ</a></li>
        </ul>
    </div>
    

    <!--HERO HERO HERO HERO HERO HERO HERO //// SECCION 1 SECCION1--->
    <section class="seccion1">
        <div id="particles-js"></div>
        <div class="sec1-izq">
            <h1>Nous donnons vie à votre vision<br> <span>Dans la réalité numérique</span></h1>
            <p>Notre objectif est de créer des solutions web de pointe qui se démarquent et se connectent 
                avec votre public. Que vous ayez besoin d'un site web d'entreprise, d'une boutique en ligne 
                ou d'une plateforme personnalisée, notre équipe d'experts en développement web travaillera 
                étroitement avec vous pour créer une expérience numérique qui fait vraiment la différence.</p>
        </div>
    
        <div class="sec1-der">
            <img id="logo_seccion" src="/assets/logos/logosin3-removebg-preview.png" alt="logo_section">
        </div>
    </section>
    
    <!--SECTEUR 2 SECTEUR 2 SECTEUR 2 SECTEUR 2 //// TYPES DE PAGES--->
    <section class="sec2" id="sec2">
        <div class="sec_img">
            <img src="/assets/img/Captura de pantalla 2023-07-15 132234.jpg" alt="exemples_pages">
        </div>
        <div class="sec_contenido" id="sec_contenido">
            <p class="sec_paginas">Pages ━━━━━━━━━━━</p>
            <div class="distintas_paginas">
                <p id="economica">Économique</p>
                <p id="basica">Basique</p>
                <p id="autogestionable">Auto-Géré</p>
                <p id="ecommerce">E-commerce</p>
            </div>
            <div id="contenido_paginas">
                <p class="sec_texto" id="pag_texto">
                    Les sites web économiques sont devenus une option attrayante pour ceux qui souhaitent établir une 
                    présence en ligne sans encourir de coûts substantiels. Ces sites web offrent des designs simples mais 
                    efficaces, des fonctionnalités de base et une structure facilement navigable, le tout à un prix abordable. 
                    Par conséquent, ils permettent de partager des informations pertinentes et d'attirer efficacement leur 
                    public cible de manière économique.</p>
                <div class="sec_cajas">
                    <div id="pag_caja1">
                        <br>
                        <p>4 Sections</p>
                        <p>Base de SEO</p>
                    </div>
                    <div id="pag_caja2">
                        <p><br><br><br>150 USD</p>
                    </div>
                    <div id="pag_caja3">
                        <br>
                        <p>Médias Sociaux</p>
                        <p>Magasin Google</p>
                    </div>
                </div>  
            </div>
            <button aria-label="demander la page">Demander</button>
        </div>
    </section>
    
    
    

    <!--SECCION3 SECCION 3 SECCION3 SECCION3 //// PEDI TU WEB--->
    <section class="seccion2-pag" id="contact_us">
        <h2>Demandez votre site web</h2>
        <form action="procesar_formulario.php" method="post" id="secc2-form">
            <div class="division_form">
                <div>
                    <label for="nombre">Nom</label>
                    <input class="dos_input" type="text" id="nombre" name="nombre" required>
                </div>
                <div>
                    <label for="celular">Téléphone<span>(facultatif)</span></label>
                    <input class="dos_input" type="text" id="celular" name="celular">
                </div>
            </div>
            <label for="email">Email</label>
            <input type="email" class="input" id="email" name="email" required>
            <label for="servicio">Services</label>
            <select name="servicio" id="servicio" class="input">
                <option value="consulta">Question</option>
                <option value="economico">Économique</option>
                <option value="basico">Basique</option>
                <option value="autogestionable">Auto-Géré</option>
                <option value="ecommerce">E-commerce</option>
                <option value="personalizado">Personnalisé</option>
            </select>
            <label for="detalles">Détails</label>
            <textarea name="detalles" id="detalles" cols="30" rows="10" required></textarea>
            <div>
                <button aria-label="numéro de commande">Commander :</button>
                <input class="submit" type="submit" value="Envoyer">
            </div>
        </form>
    </section>
    
        
        <footer>
            <div class="imagen-footer">
                <img id="logo_footer" src="/assets/logos/logosin4.png" alt="logo_footer">
                <p>Digital <span>Flow</span></p>
            </div>
            <div class="contenedor-footer">
                <div>
                    <ul>
                        <li><strong>Services</strong></li>
                        <li class="footer_li"><a href="#seccion2">Websites</a></li>
                        <li class="footer_li"><a href="#secion4">Prices</a></li>
                        <li class="footer_li"><a href="preguntas.html#seccion2_preg">Questions</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><strong>About Us</strong></li>
                        <li class="footer_li"><a href="paginas.html#secc2-form">Contactez-nous</a></li>
                        <li class="footer_li"><a href="#seccion3">À propos de nous</a></li>
                        <li class="footer_li"><a href="#">Évaluez-nous</a></li>
                    </ul>
                </div>
            </div>
        </footer>
            <div class="derechos">
                <p>@2023 Eatly. All rights reserved</p>
            </div>
                <div class="instagram">
            <a href="#">
                <img id="instagram" src="/assets/iconos/instagram-predeterminado.png" alt="instagram">
            </a> 
        </div>
        <div class="colores" id="color">
            <p>↓</p>
        </div>
        <div class="menu_colores" id="menu_colores">
            <div id="rojo"></div>
            <div id="azul"></div>
            <div id="violeta"></div>
            <div id="verde"></div>
        </div>
        <div class="banderas">
            <img id="bandera"src="/assets/banderas/icons8-france-50 (1).png" alt="">
        </div>
        <div class="menu_idioma" id="menu_idioma">
            <a href="/lenguajes/english/index.html"><img class="banderitas" src="/assets/banderas/icons8-usa-50 (1).png" alt=""></a>
            <a href="/lenguajes/mandarin/index.html"><img class="banderitas" src="/assets/banderas/icons8-china-50 (1).png" alt=""></a>
            <a href="/index.html"><img  src="/assets/banderas/icons8-spain-50.png" alt=""></a>
        </div>
        
    <script src="/js/global.js"></script>
    <script src="/js/colores_global.js"></script>
    <script src="/js/particles.min.js"></script>
    <script src="/js/app2.js"></script>
    <script src="/paginas.js"></script>
</body>
</html>
<?php
header( "Access-Control-Allow-Origin: *" );

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $celular = $_POST['celular'];
    $email = $_POST['email'];
    $servicio = $_POST['servicio'];
    $detalles = $_POST['detalles'];

    // Configurar el destinatario del correo
    $destinatario = 'support@webdigitalflow.com';

    // Configurar el asunto del correo
    $asunto = 'Pedido de Web desde formulario';

    // Construir el cuerpo del correo
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Celular: $celular\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Servicio: $servicio\n";
    $cuerpo .= "Detalles:\n$detalles";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo)) {
        echo '<p>El pedido se ha enviado correctamente. Nos pondremos en contacto contigo pronto.</p>';
    } else {
        echo '<p>Hubo un problema al enviar el pedido. Por favor, intenta nuevamente más tarde.</p>';
    }
}
?>
