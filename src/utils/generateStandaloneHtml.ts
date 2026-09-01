export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D&M Solution Panamá | High-End Global Presence</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --accent: #FFD700;
            --bg-dark: #0a0a0b;
            --bg-gradient: linear-gradient(135deg, #121214 0%, #222226 100%);
            --glass: rgba(10, 10, 11, 0.9);
            --grid-color: rgba(255, 255, 255, 0.03);
            --transition-diffuse: all 1.2s cubic-bezier(0.25, 1, 0.5, 1);
            --header-font-size: 0.95rem; 
            --header-width: 80%; 
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        html { scroll-behavior: smooth; }

        body { 
            background: var(--bg-gradient); 
            background-attachment: fixed;
            color: white; 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            overflow-x: hidden; 
            -webkit-font-smoothing: antialiased;
        }

        /* --- HEADER FLOTANTE REDUCIDO (20%) CON CRISTAL ESMERILADO --- */
        header {
            position: fixed;
            top: 20px; left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            width: var(--header-width);
            max-width: 1100px;
            padding: 10px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            background: var(--glass);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 50px;
            box-shadow: 0 10px 35px rgba(0,0,0,0.5);
            transition: all 0.4s ease;
        }

        .brand-logo { 
            display: flex; 
            align-items: center; 
            gap: 12px; 
            text-decoration: none; 
            color: white; 
        }
        .brand-logo img { 
            width: 34px; 
            height: 34px; 
            filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.35));
            transition: transform 0.4s ease;
        }
        .brand-logo:hover img {
            transform: rotate(12deg) scale(1.05);
        }

        .brand-text {
            font-weight: 300;
            letter-spacing: 2px;
            font-size: 0.75rem;
            text-transform: uppercase;
            color: rgba(255,255,255,0.9);
        }

        nav { display: flex; gap: 6px; }
        .nav-item { position: relative; }
        .nav-item > a {
            color: white; 
            text-decoration: none; 
            font-size: var(--header-font-size); 
            font-weight: 300; 
            letter-spacing: 1px; 
            text-transform: uppercase; 
            opacity: 0.7; 
            transition: all 0.3s ease; 
            padding: 8px 14px; 
            display: block;
            border-radius: 20px;
        }
        .nav-item:hover > a { 
            opacity: 1; 
            color: var(--accent); 
            background: rgba(255,215,0,0.04);
        }

        /* SUBMENÚS DROPDOWN */
        .submenu {
            position: absolute; 
            top: 120%; 
            left: 50%; 
            transform: translateX(-50%) translateY(15px);
            background: rgba(12, 12, 14, 0.98); 
            border: 1px solid rgba(255,215,0,0.22);
            padding: 20px; 
            border-radius: 18px; 
            min-width: 320px;
            opacity: 0; 
            pointer-events: none; 
            transition: var(--transition-diffuse);
            box-shadow: 0 25px 60px rgba(0,0,0,0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .nav-item:hover .submenu { 
            opacity: 1; 
            pointer-events: auto; 
            transform: translateX(-50%) translateY(0); 
        }
        
        .submenu h4 { 
            color: var(--accent); 
            font-size: 0.68rem; 
            letter-spacing: 2.5px; 
            margin-bottom: 12px; 
            text-transform: uppercase; 
            border-bottom: 1px solid rgba(255,215,0,0.12); 
            padding-bottom: 8px; 
        }
        .submenu a {
            display: block; 
            color: rgba(255,255,255,0.65); 
            text-decoration: none;
            font-size: 0.82rem; 
            padding: 9px 8px; 
            border-bottom: 1px solid rgba(255,255,255,0.04);
            border-radius: 6px;
            transition: all 0.25s ease; 
            line-height: 1.4;
        }
        .submenu a:last-child { border-bottom: none; }
        .submenu a:hover { 
            color: white; 
            padding-left: 14px; 
            background: rgba(255,215,0,0.06); 
        }

        /* --- VIDEO VIEWPORT SCROLL-DRIVEN --- */
        #video-viewport { 
            position: fixed; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100vh; 
            z-index: -1; 
            background: #000; 
            overflow: hidden;
        }
        video { 
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            opacity: 0.65; 
        }
        .scroll-spacer { 
            height: 950vh; 
        }

        /* --- ACORDEÓN DE SECTORES CON DIFUSIÓN CINEMÁTICA --- */
        .services-section { 
            position: relative; 
            z-index: 10; 
            background: var(--bg-dark); 
            box-shadow: 0 -80px 140px rgba(0,0,0,1);
        }
        .accordion { 
            display: flex; 
            width: 100%; 
            height: 92vh; 
            background: #000; 
            overflow: hidden; 
            border-top: 1px solid rgba(255,255,255,0.06); 
        }

        .panel {
            flex: 1; 
            position: relative; 
            overflow: hidden;
            border-right: 1px solid rgba(255,255,255,0.05);
            transition: var(--transition-diffuse);
            padding: 80px 45px;
            display: flex; 
            flex-direction: column; 
            justify-content: flex-end;
            cursor: pointer; 
            background: #000;
        }

        /* Capas de Imagen para Difusión Cinemática (BN a Color) */
        .bg-layer { 
            position: absolute; 
            inset: 0; 
            background-size: cover; 
            background-position: center; 
            z-index: 1; 
            transition: opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1), filter 1.5s cubic-bezier(0.25, 1, 0.5, 1), transform 2s cubic-bezier(0.25, 1, 0.5, 1); 
        }
        .bg-gray { 
            opacity: 0.45; 
            filter: blur(0px) grayscale(100%); 
        }
        .bg-color { 
            opacity: 0; 
            filter: blur(35px) grayscale(0%); 
            transform: scale(1.1); 
        }

        .panel:hover { 
            flex: 3.8; 
        }
        .panel:hover .bg-gray { 
            opacity: 0; 
            filter: blur(35px) grayscale(100%); 
        }
        .panel:hover .bg-color { 
            opacity: 0.8; 
            filter: blur(0px) grayscale(0%); 
            transform: scale(1.03); 
        }

        /* Borde de Luz Giratorio Dorado */
        .panel::after {
            content: ""; 
            position: absolute; 
            inset: 0; 
            padding: 2px;
            background: conic-gradient(from var(--angle), transparent, var(--accent), transparent, var(--accent), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; 
            mask-composite: exclude;
            opacity: 0; 
            transition: opacity 0.6s ease; 
            z-index: 10; 
            pointer-events: none;
        }
        @property --angle { 
            syntax: '<angle>'; 
            initial-value: 0deg; 
            inherits: false; 
        }
        @keyframes rotateGlow { 
            to { --angle: 360deg; } 
        }
        .panel:hover::after { 
            opacity: 1; 
            animation: rotateGlow 4s linear infinite; 
        }

        /* Grilla Sutil Overlay */
        .grid-overlay { 
            position: absolute; 
            inset: 0; 
            background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px); 
            background-size: 40px 40px; 
            z-index: 2; 
            opacity: 0.25; 
            pointer-events: none;
        }

        .sector-tag {
            color: var(--accent);
            font-size: 0.68rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 12px;
            opacity: 0.9;
        }

        .panel-content { position: relative; z-index: 5; }
        .panel h2 { 
            font-size: 1.9rem; 
            font-weight: 200; 
            line-height: 1.15; 
            margin-bottom: 18px; 
            transition: all 0.5s ease; 
            max-width: 480px; 
        }
        .panel:hover h2 { 
            color: var(--accent); 
            font-weight: 400; 
            transform: translateY(-4px); 
        }

        .panel-desc { 
            opacity: 0; 
            max-height: 0; 
            overflow: hidden; 
            transition: var(--transition-diffuse); 
            color: rgba(255,255,255,0.7); 
            font-size: 0.9rem; 
            line-height: 1.6; 
        }
        .panel:hover .panel-desc { 
            opacity: 1; 
            max-height: 480px; 
            margin-top: 16px; 
        }

        .panel-points {
            list-style: none;
            margin-top: 14px;
        }
        .panel-points li {
            margin-bottom: 10px;
            border-left: 2px solid var(--accent);
            padding-left: 12px;
        }
        .panel-points strong {
            color: white;
            display: block;
            font-size: 0.88rem;
            font-weight: 500;
        }
        .panel-points span {
            color: rgba(255,255,255,0.6);
            font-size: 0.8rem;
        }

        /* --- FOOTER EDITORIAL CON MAPA TIPO WAZE --- */
        footer {
            padding: 100px 7% 40px;
            background: #050506;
            border-top: 1px solid rgba(255,255,255,0.05);
            display: grid;
            grid-template-columns: 1fr 3fr; /* 1/4 Texto, 3/4 Mapa */
            gap: 50px;
            position: relative;
            z-index: 20;
            align-items: start;
        }

        .footer-nav h4 { 
            color: var(--accent); 
            font-size: 0.75rem; 
            letter-spacing: 3.5px; 
            text-transform: uppercase; 
            margin-bottom: 35px; 
            font-weight: 600; 
        }
        .footer-nav ul { list-style: none; }
        .footer-nav li { margin-bottom: 18px; }
        .footer-nav a { 
            color: rgba(255,255,255,0.45); 
            text-decoration: none; 
            font-size: 1.1rem; 
            font-weight: 200; 
            transition: all 0.3s ease; 
            display: inline-block;
        }
        .footer-nav a:hover { 
            color: var(--accent); 
            padding-left: 8px; 
        }

        .map-wrapper {
            position: relative; 
            width: 100%; 
            height: 480px; 
            border-radius: 22px; 
            overflow: hidden;
            border: 1px solid rgba(255,215,0,0.18); 
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            background: #000;
            transition: border-color 0.4s ease;
        }
        .map-wrapper:hover { 
            border-color: var(--accent); 
            box-shadow: 0 0 30px rgba(255,215,0,0.12);
        }

        .google-map-iframe {
            width: 100%; 
            height: 100%; 
            border: 0;
            filter: grayscale(100%) invert(92%) hue-rotate(180deg) brightness(0.9) contrast(1.2);
            opacity: 0.85; 
            transition: all 0.6s ease;
        }
        .map-wrapper:hover .google-map-iframe { 
            opacity: 1; 
            filter: grayscale(100%) invert(92%) hue-rotate(180deg) brightness(1.05) contrast(1.1); 
        }

        .map-overlay { 
            position: absolute; 
            top: 22px; 
            right: 22px; 
            background: var(--glass); 
            padding: 10px 22px; 
            border-radius: 35px; 
            border: 1px solid rgba(255,215,0,0.3); 
            z-index: 5; 
            backdrop-filter: blur(12px);
            pointer-events: none;
        }
        .map-overlay span { 
            font-size: 9px; 
            letter-spacing: 2.5px; 
            color: var(--accent); 
            text-transform: uppercase; 
            display: flex; 
            align-items: center; 
            gap: 10px; 
            font-weight: 500;
        }
        .map-overlay span::before { 
            content: ""; 
            width: 8px; 
            height: 8px; 
            background: var(--accent); 
            border-radius: 50%; 
            box-shadow: 0 0 10px var(--accent); 
            animation: pulse 2s infinite; 
        }

        @keyframes pulse { 
            0% { opacity: 1; transform: scale(1); } 
            50% { opacity: 0.35; transform: scale(1.6); } 
            100% { opacity: 1; transform: scale(1); } 
        }

        .footer-bottom {
            grid-column: 1 / span 2;
            padding-top: 50px; 
            border-top: 1px solid rgba(255,255,255,0.04);
            text-align: center; 
            font-size: 0.65rem; 
            letter-spacing: 3.5px; 
            opacity: 0.45; 
            text-transform: uppercase;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
            header { width: 95%; padding: 10px 20px; }
            nav { display: none; }
            footer { grid-template-columns: 1fr; gap: 40px; padding: 60px 6%; }
            .map-wrapper { height: 360px; order: -1; }
            .footer-nav { text-align: center; }
            .accordion { flex-direction: column; height: auto; }
            .panel { height: 280px; flex: none; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 50px 30px; }
            .panel:hover { height: 680px; }
        }
    </style>
</head>
<body>

    <!-- MÓDULO 1: MENÚ SUPERIOR FLOTANTE -->
    <header id="main-nav">
        <a href="#" class="brand-logo">
            <img src="logo.svg" alt="D&M Solution Logo">
            <span class="brand-text">D&M Solution Panamá</span>
        </a>
        <nav>
            <!-- 1. Creative Studio -->
            <div class="nav-item">
                <a href="#s1">Creative Studio</a>
                <div class="submenu">
                    <h4>Digital Presence</h4>
                    <a href="#s1">Redes Sociales End-to-End</a>
                    <a href="#s1">Identidad Corporativa & Branding</a>
                    <a href="#s1">Producción Audiovisual Cinematográfica</a>
                </div>
            </div>
            <!-- 2. Industrial Design -->
            <div class="nav-item">
                <a href="#s2">Industrial Design</a>
                <div class="submenu">
                    <h4>Premium Products</h4>
                    <a href="#s2">Promocionales de Alta Gama (Vidrio/Poly)</a>
                    <a href="#s2">Impresión Gran Formato & Lujo</a>
                    <a href="#s2">Experiencias BTL de Guerrilla</a>
                </div>
            </div>
            <!-- 3. GovTech -->
            <div class="nav-item">
                <a href="#s3">GovTech</a>
                <div class="submenu">
                    <h4>Smart Infrastructure</h4>
                    <a href="#s3">Software Electoral & Asesoría Política</a>
                    <a href="#s3">Custom Software Development</a>
                    <a href="#s3">Smart Access (NFC / RFID / Biometría)</a>
                </div>
            </div>
            <!-- 4. Elite Booking -->
            <div class="nav-item">
                <a href="#s4">Elite Booking</a>
                <div class="submenu">
                    <h4>Global Representation</h4>
                    <a href="#s4">Agencia Deportiva de Alto Rendimiento</a>
                    <a href="#s4">Influencer Marketing & Celebridades</a>
                    <a href="#s4">World-Class Legends & Latin Icons</a>
                </div>
            </div>
        </nav>
    </header>

    <!-- MÓDULO 2: INTRO CINEMATOGRÁFICA CONTROLADA POR SCROLL -->
    <div id="video-viewport">
        <video id="scrollVideo" preload="auto" muted playsinline>
            <source src="intro_scroll.mp4" type="video/mp4">
        </video>
    </div>

    <div class="scroll-spacer"></div>

    <!-- MÓDULO 3: ACORDEÓN DE SERVICIOS INTEGRALES (FULL-WIDTH) -->
    <main class="services-section">
        <div class="accordion">
            
            <!-- Tarjeta 1 -->
            <div class="panel" id="s1">
                <div class="bg-layer bg-gray" style="background-image: url('sector1n.jpg');"></div>
                <div class="bg-layer bg-color" style="background-image: url('sector1.jpg');"></div>
                <div class="grid-overlay"></div>
                <div class="panel-content">
                    <div class="sector-tag">Sector 01 — Estrategia Digital</div>
                    <h2>Emprendedores, PYMES & Marcas Locales</h2>
                    <div class="panel-desc">
                        Pensado para marcas de cualquier escala que buscan construir o potenciar su ecosistema digital con presencia de impacto mundial.
                        <ul class="panel-points">
                            <li>
                                <strong>Redes Sociales End-to-End</strong>
                                <span>Estrategia de contenidos, diseño y gestión de comunidad adaptada a todo nivel empresarial.</span>
                            </li>
                            <li>
                                <strong>Identidad Corporativa & Branding</strong>
                                <span>Creación de líneas gráficas, logotipos y manuales de identidad desde cero.</span>
                            </li>
                            <li>
                                <strong>Producción Audiovisual Cinematográfica</strong>
                                <span>Desarrollo y producción de contenido multimedia con factura de cine.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 2 -->
            <div class="panel" id="s2">
                <div class="bg-layer bg-gray" style="background-image: url('sector2n.jpg');"></div>
                <div class="bg-layer bg-color" style="background-image: url('sector2.jpg');"></div>
                <div class="grid-overlay"></div>
                <div class="panel-content">
                    <div class="sector-tag">Sector 02 — Desarrollo Industrial</div>
                    <h2>Grandes Empresas & Corporativos</h2>
                    <div class="panel-desc">
                        La tangibilización de la marca en el mundo físico. Desde materiales promocionales hasta fachadas luminosas y activaciones masivas.
                        <ul class="panel-points">
                            <li>
                                <strong>Promocionales de Alta Gama</strong>
                                <span>Vasos personalizados y piezas de vajilla exclusivas en vidrio y policarbonato.</span>
                            </li>
                            <li>
                                <strong>Impresión de Gran Formato y Lujo</strong>
                                <span>Letreros luminosos estructurados, banners en lona y sistemas de impresión en acrílico.</span>
                            </li>
                            <li>
                                <strong>Experiencias BTL</strong>
                                <span>Activaciones e intervenciones de guerrilla de alto impacto en puntos estratégicos.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 3 -->
            <div class="panel" id="s3">
                <div class="bg-layer bg-gray" style="background-image: url('sector3n.jpg');"></div>
                <div class="bg-layer bg-color" style="background-image: url('sector3.jpg');"></div>
                <div class="grid-overlay"></div>
                <div class="panel-content">
                    <div class="sector-tag">Sector 03 — Ingeniería Avanzada</div>
                    <h2>Gobiernos Locales, Instituciones & Eventos (Civic Pulse)</h2>
                    <div class="panel-desc">
                        El núcleo de ingeniería avanzada e infraestructura propia de la agencia. Soluciones hechas a la medida que integran software y hardware.
                        <ul class="panel-points">
                            <li>
                                <strong>Software Electoral & Asesoría Política</strong>
                                <span>Plataformas analíticas para segmentación, control de datos y campañas presidenciales.</span>
                            </li>
                            <li>
                                <strong>Custom Software Development</strong>
                                <span>Soluciones para bienes raíces, distribución de insumos médicos y flujos empresariales.</span>
                            </li>
                            <li>
                                <strong>Ecosistema Smart Access (NFC / RFID / IR)</strong>
                                <span>Tiquetes digitales, wallets móviles y pulseras inteligentes con biometría global.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Tarjeta 4 -->
            <div class="panel" id="s4">
                <div class="bg-layer bg-gray" style="background-image: url('sector4n.jpg');"></div>
                <div class="bg-layer bg-color" style="background-image: url('sector4.jpg');"></div>
                <div class="grid-overlay"></div>
                <div class="panel-content">
                    <div class="sector-tag">Sector 04 — Representación Global</div>
                    <h2>Atletas, Promotores & Marcas Deportivas</h2>
                    <div class="panel-desc">
                        La división de talentos de D&M encargada de conectar marcas, estadios y audiencias con figuras icónicas del deporte y la música.
                        <ul class="panel-points">
                            <li>
                                <strong>Agencia Deportiva de Alto Rendimiento</strong>
                                <span>Representación de atletas profesionales en Fútbol, Boxeo y Béisbol Mayor.</span>
                            </li>
                            <li>
                                <strong>Influencer Marketing & Celebridades</strong>
                                <span>Alianzas estratégicas con creadores de contenido de alto perfil y figuras públicas.</span>
                            </li>
                            <li>
                                <strong>Global Booking (Legends & Latin Icons)</strong>
                                <span>Contratación directa: Beyoncé, Coldplay, Bruno Mars, Rubén Blades, Maluma, Carlos Vives.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <!-- MÓDULO 4: PIE DE PÁGINA EDITORIAL CON MAPA WAZE DARK -->
        <footer>
            <div class="footer-nav">
                <h4>Navegación Corporativa</h4>
                <ul>
                    <li><a href="#s1">Quienes Somos</a></li>
                    <li><a href="#s2">Misión</a></li>
                    <li><a href="#s3">Visión</a></li>
                    <li><a href="#s4">Contáctenos</a></li>
                    <li><a href="#main-nav">Mapa del Sitio</a></li>
                </ul>
            </div>
            
            <div class="map-wrapper">
                <div class="map-overlay">
                    <span>Panamá HQ Global Presence</span>
                </div>
                <iframe 
                    class="google-map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126135.539828816!2d-79.620025!3d8.98863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1d3996921%3A0x673553258f33b1e3!2sPanam%C3%A1!5e0!3m2!1ses!2spa!4v1700000000000!5m2!1ses!2spa" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div class="footer-bottom">
                © 2026 D&M Solution Panamá. All rights reserved. Powered by D&M Solution Ecosystem.
            </div>
        </footer>
    </main>

    <!-- MOTOR JAVASCRIPT: SCROLL INTERACTIVO SUAVIZADO -->
    <script>
        const video = document.getElementById('scrollVideo');
        const spacer = document.querySelector('.scroll-spacer');
        let targetTime = 0, currentTime = 0;

        window.addEventListener('scroll', () => {
            const scrollPos = window.pageYOffset;
            const maxScroll = spacer.offsetHeight - window.innerHeight;
            const progress = Math.min(Math.max(scrollPos / maxScroll, 0), 0.99);
            
            if (video && video.duration) {
                targetTime = video.duration * progress;
            }
        });

        function renderVideo() {
            if (video && video.duration) {
                currentTime += (targetTime - currentTime) * 0.12;
                video.currentTime = currentTime;
            }
            requestAnimationFrame(renderVideo);
        }

        if (video) {
            video.addEventListener('loadedmetadata', () => {
                requestAnimationFrame(renderVideo);
            });
            video.play().catch(() => {});
        }
    </script>
</body>
</html>`;
}
