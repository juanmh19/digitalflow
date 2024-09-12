<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/global.css">
    <link rel="stylesheet" href="/css/paginas.css">
    <link rel="stylesheet" href="/css/animaciones.css">
    <title>Digital Flow - 你需要的页面</title>
    <link rel="shortcut icon" href="/assets/logos/logosin2.png" type="image/x-icon" sizes="10x10"/>
    <meta
  name="description"
  content="Digital Flow专注于构建与众不同并与您的受众产生共鸣的尖端网络解决方案。
  无论您需要企业网站、在线商店还是定制平台"/>
</head>
</head>
<body class="content">
    <!--HEADER HEADER HEADER HEADER HEADER--->
    <header id="header">
        <nav>
            <div class="logo">
                <img id="logo_header" src="/assets/logos/logosin4.png" alt="icono_header">
            </div>

            <div class="navegacion">
                <ul>
                    <li><a href="#" onclick="inicio()">首页</a></li>
                    <li><a href="#" onclick="nosotross()">关于我们</a></li>
                    <li><a href="#" onclick="servicioss()">服务</a></li>
                    <li><a href="#" onclick="cotizacionn()">价格</a></li>
                    <li><a href="#" onclick="preguntas()">常见问题</a></li>
                </ul>
            </div>

            <img class="menu" id="hamburguesa" src="/assets/iconos/hambur_null.svg" alt="menu_hamburguesa">
            
            <a href="#" onclick="contact()"><button aria-label="联系我们">联系我们</button></a>
        </nav>
    </header>
    <div class="menu_menu" id="contenido_hamburguesa">
        <ul>
            <li><a href="#" onclick="inicio()">首页</a></li>
            <li><a href="#" onclick="nosotross()">关于我们</a></li>
            <li><a href="#" onclick="servicioss()">服务</a></li>
            <li><a href="#" onclick="cotizacionn()">价格</a></li>
            <li><a href="#" onclick="preguntas()">常见问题</a></li>
        </ul>
    </div>

    <!--HERO HERO HERO HERO HERO HERO HERO //// SECCION 1 SECCION1--->
    <section class="seccion1">
        <div id="particles-js"></div>
        <div class="sec1-izq">
            <h1>我们将您的愿景<br> <span>变成数字现实</span></h1>
            <p>我们专注于构建与众不同且与您的受众产生共鸣的尖端网络解决方案。
                无论您需要企业网站、在线商店还是定制平台，我们的网络开发专家团队将与您密切合作，
                创建真正产生影响的数字体验。</p>
        </div>

        <div class="sec1-der">
            <img id="logo_seccion" src="/assets/logos/logosin3-removebg-preview.png" alt="logo_seccion">
        </div>
    </section>

    <!--SECCION2 SECCION2 SECCION2 SECCION2 //// TIPOS DE PAGINAS--->
    <section class="sec2" id="sec2">
        <div class="sec_img">
            <img src="/assets/img/Captura de pantalla 2023-07-15 132234.jpg" alt="ejemplos_paginas">
        </div>
        <div class="sec_contenido" id="sec_contenido">
            <p class="sec_paginas">页面 ━━━━━━━━━━━</p>
            <div class="distintas_paginas">
                <p id="economica">经济型</p>
                <p id="basica">基本型</p>
                <p id="autogestionable">自助管理型</p>
                <p id="ecommerce">电子商务型</p>
            </div>
            <div id="contenido_paginas">
                <p class="sec_texto" id="pag_texto">
                    经济型网站已成为希望在不产生大额成本的情况下建立在线存在的诱人选择。
                    这些网站提供简单而有效的设计、基本功能和易于导航的结构，所有这些都以实惠的价格提供。
                    因此，它们能够以经济的方式共享相关信息并有效地吸引目标受众。</p>
                <div class="sec_cajas">
                    <div id="pag_caja1">
                        <br>
                        <p>4个部分</p>
                        <p>基本SEO</p>
                    </div>
                    <div id="pag_caja2">
                        <p><br><br><br>150美元</p>
                    </div>
                    <div id="pag_caja3">
                        <br>
                        <p>社交媒体</p>
                        <p>Google商店</p>
                    </div>
                </div>  
            </div>
                <button aria-label="请求页面">请求</button>
        </div>
    </section>

    <!--SECCION3 SECCION 3 SECCION3 SECCION3 //// 请求您的网站--->
    <section class="seccion2-pag" id="contact_us">
        <h2>请求您的网站</h2>
        <form action="procesar_formulario.php" method="post" id="secc2-form">
            <div class="division_form">
                <div>
                    <label for="nombre">姓名</label>
                    <input class="dos_input" type="text" id="nombre" name="nombre" required>
                </div>
                <div>
                    <label for="celular">手机号<span>(可选)</span></label>
                    <input class="dos_input" type="text" id="celular" name="celular">
                </div>
            </div>
            <label for="email">电子邮件</label>
            <input type="email" class="input" id="email" name="email" required>
            <label for="servicio">服务</label>
            <select name="servicio" id="servicio" class="input">
                <option value="consulta">查询</option>
                <option value="economico">经济型</option>
                <option value="basico">基本型</option>
                <option value="autogestionable">自助管理型</option>
                <option value="ecommerce">电子商务型</option>
                <option value="personalizado">定制</option>
            </select>
            <label for="detalles">详情</label>
            <textarea name="detalles" id="detalles" cols="30" rows="10" required></textarea>
            <div>
                <button aria-label="订单号">订单：</button>
                <input class="submit" type="submit" value="发送">
            </div>
        </form>
    </section>
    <footer >
        <div class="imagen-footer">
            <img id="logo_footer" src="/assets/logos/logosin4.png" alt="logo_footer">
            <p>Digital <span>Flow</span></p>
        </div>
        <div class="contenedor-footer">
            <div>
                <ul>
                    <li><strong>服务</strong></li>
                    <li class="footer_li"><a href="#seccion2">网站</a></li>
                    <li class="footer_li"><a href="#secion4">价格</a></li>
                    <li class="footer_li"><a href="preguntas.html#seccion2_preg">问题</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><strong>关于我们</strong></li>
                    <li class="footer_li"><a href="paginas.html#secc2-form">联系我们</a></li>
                    <li class="footer_li"><a href="#seccion3">关于我们</a></li>
                    <li class="footer_li"><a href="#">评价我们</a></li>
                </ul>
            </div>
        </div>
        
    </footer >
        <div class="derechos">
            <p>@2023 Eatly. 保留所有权利</p>
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
            <img id="bandera" src="/assets/banderas/icons8-china-50 (1).png" alt="">
        </div>
        <div class="menu_idioma" id="menu_idioma">
            <a href="/lenguajes/english/index.html"><img class="banderitas" src="/assets/banderas/icons8-usa-50 (1).png" alt=""></a>
            <a href="/index.html"><img class="banderitas"  src="/assets/banderas/icons8-spain-50.png" alt=""></a>
            <a href="/lenguajes/frances/index.html"><img class="banderitas" src="/assets/banderas/icons8-france-50 (1).png" alt=""></a>
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
