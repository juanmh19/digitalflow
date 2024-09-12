<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/paginas.css">
    <link rel="stylesheet" href="css/animaciones.css">
    <title>Digital Flow - Que pagina necesitas</title>
    <link rel="shortcut icon" href="assets/logos/logosin2.png" type="image/x-icon" sizes="10x10"/>
    <meta
  name="description"
  content="Digital Flow se centra en construir soluciones
  web de vanguardia que destaquen y conecten con tu audiencia.
  Ya sea que necesites una página web corporativa,
   una tienda en línea o una plataforma personalizada"/>
</head>
</head>
<body class="content">
    <!--HEADER HEADER HEADER HEADER HEADER--->
    <header id="header">
        <nav>
            <div class="logo">
                <img id="logo_header" src="assets/logos/logosin4.png" alt="icono_header">
            </div>

            <div class="navegacion">
                <ul>
                    <li><a href="#" onclick="inicio()">Inicio</a></li>
                    <li><a href="#" onclick="nosotross()">Nosotros</a></li>
                    <li><a href="#" onclick="servicioss()">Servicios</a></li>
                    <li><a href="#" onclick="cotizacionn()">Cotización</a></li>
                    <li><a href="#" onclick="preguntas()">Preguntas</a></li>
                </ul>
            </div>

            <img class="menu" id="hamburguesa" src="assets/iconos/hambur_null.svg" alt="menu_hamburguesa">
            
            <a href="#" onclick="contact()"><button aria-label="contactanos">Contact Us</button></a>
        </nav>
    </header>
    <div class="menu_menu" id="contenido_hamburguesa">
        <ul>
            <li><a href="#" onclick="inicio()">Inicio</a></li>
            <li><a href="#seccion3">Nosotros</a></li>
            <li><a href="#seccion2">Servicios</a></li>
            <li><a href="#seccion4">Cotización</a></li>
            <li><a href="#" onclick="preguntas()">Preguntas</a></li>
        </ul>
    </div>

    <!--HERO HERO HERO HERO HERO HERO HERO //// SECCION 1 SECCION1--->
    <section class="seccion1">
        <div id="particles-js"></div>
        <div class="sec1-izq">
            <h1>Transformamos tu visión <br> <span> En realidad digital</span></h1>
            <p>Nuestro enfoque se centra en construir soluciones
                web de vanguardia que destaquen y conecten con tu audiencia.
                Ya sea que necesites una página web corporativa,
                 una tienda en línea o una plataforma personalizada,
                  nuestro equipo de expertos en desarrollo web trabajará en
                   estrecha colaboración contigo para crear una experiencia digital que
                    realmente haga la diferencia.</p>
        </div>

        <div class="sec1-der">
            <img id="logo_seccion" src="assets/logos/logosin3-removebg-preview.png" alt="logo_seccion">
        </div>
    </section>

    <!--SECCION2 SECCION2 SECCION2 SECCION2 //// TIPOS DE PAGINAS--->
    <section class="sec2" id="sec2">
        <div class="sec_img">
            <img src="assets/img/Captura de pantalla 2023-07-15 132234.jpg" alt="ejemplos_paginas">
        </div>
        <div class="sec_contenido" id="sec_contenido">
            <p class="sec_paginas">Paginas ━━━━━━━━━━━</p>
            <div class="distintas_paginas">
                <p id="economica">Económicas</p>
                <p id="basica">Básicas</p>
                <p id="autogestionable">Autogestionables</p>
                <p id="ecommerce">E-commerce</p>
            </div>
            <div id="contenido_paginas">
                <p class="sec_texto" id="pag_texto">
                    Las páginas web económicas se han convertido en una opción atractiva para aquellos que 
                    desean establecer una presencia en línea sin incurrir en grandes costos. Estas páginas 
                    ofrecen diseños simples pero efectivos, funciones básicas y una estructura fácil de navegar,
                        todo ello a un precio asequible. Por lo tanto, permitira compartir información relevante y atraer a su público
                       objetivo de manera eficiente y económica..</p>
                <div class="sec_cajas">
                    <div id="pag_caja1">
                        <br>
                        <p>4 Secciones</p>
                        <p>SEO Básico</p>
                    </div>
                    <div id="pag_caja2">
                        <p><br><br><br>150 USD</p>
                    </div>
                    <div id="pag_caja3">
                        <br>
                        <p>Redes Sociales</p>
                            <p>Google Tienda</p>
                    </div>
                </div>  
            </div>
                <button aria-label="pide la pagina">Pedir</button>
          

        </div>
    </section>
    

    <!--SECCION3 SECCION 3 SECCION3 SECCION3 //// PEDI TU WEB--->
        <section class="seccion2-pag" id="contact_us">
            <h2>Pedi tu Web</h2>
            <form action="procesar_formulario.php" method="post" id="secc2-form">
                <div class="division_form">
                    <div>
                        <label for="nombre">Nombre</label>
                        <input class="dos_input" type="text" id="nombre" name="nombre" required>
                    </div>
                    <div>
                        <label for="celular">Celular <span>(optativo)</span></label>
                        <input class="dos_input" type="text" id="celular" name="celular">
                    </div>
                </div>
                <label for="email">Email</label>
                <input type="email" class="input" id="email" name="email" required>
                <label for="servicio">Servicio</label>
                <select name="servicio" id="servicio" class="input">
                    <option value="consulta">Consulta</option>
                    <option value="economico">Económico</option>
                    <option value="basico">Básico</option>
                    <option value="autogestionable">Autogestionable</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="personalizado">Personalizado</option>
                </select>
                <label for="detalles">Detalles</label>
                <textarea name="detalles" id="detalles" cols="30" rows="10" required></textarea>
                <div>
                    <button aria-label="el numero de tu pedido">Pedido:</button>
                    <input class="submit" type="submit" value="enviar">
                </div>
            </form>
        </section>
        <footer >
            <div class="imagen-footer">
                <img id="logo_footer" src="assets/logos/logosin4.png" alt="logo_footer">
                <p>Digital <span>Flow</span></p>
            </div>
            <div class="contenedor-footer">
                <div>
                    <ul>
                        <li><strong>Servicios</strong></li>
                        <li class="footer_li"><a href="#seccion2">Paginas Webs</a></li>
                        <li class="footer_li"><a href="#secion4">Cotizaciones</a></li>
                        <li class="footer_li"><a href="preguntas.html#seccion2_preg">Preguntas frecuentes</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><strong>Nosotros</strong></li>
                        <li class="footer_li"><a href="paginas.html#secc2-form">Contactanos</a></li>
                        <li class="footer_li"><a href="#seccion3">Sobre nosotros</a></li>
                        <li class="footer_li"><a href="#">Calificanos</a></li>
                    </ul>
                </div>
            </div>
            
        </footer >
            <div class="derechos">
                <p>@2023 Eatly. All rights reserved</p>
            </div>
                <div class="instagram">
            <a href="#">
                <img id="instagram" src="assets/iconos/instagram-predeterminado.png" alt="instagram">
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
            <img id="bandera" src="assets/banderas/icons8-spain-50.png" alt="">
        </div>
        <div class="menu_idioma" id="menu_idioma">
            <a href="lenguajes/english/index.html"><img class="banderitas" src="assets/banderas/icons8-usa-50 (1).png" alt=""></a>
            <a href="lenguajes/mandarin/index.html"><img class="banderitas" src="assets/banderas/icons8-china-50 (1).png" alt=""></a>
            <a href="lenguajes/frances/index.html"><img class="banderitas" src="assets/banderas/icons8-france-50 (1).png" alt=""></a>
        </div>
    <script src="js/global.js"></script>
    <script src="js/colores_global.js"></script>
    <script src="js/particles.min.js"></script>
    <script src="js/app2.js"></script>
    <script src="js/paginas.js"></script>
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
