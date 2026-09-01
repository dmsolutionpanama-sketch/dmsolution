import { NavPillar, SectorItem } from '../types';

export const NAV_PILLARS: NavPillar[] = [
  {
    id: 's1',
    title: 'Creative Studio',
    category: 'Digital Presence',
    items: [
      {
        title: 'Redes Sociales End-to-End',
        description: 'Estrategia de contenidos, diseño y gestión de comunidad adaptada a todo nivel empresarial.'
      },
      {
        title: 'Identidad Corporativa & Branding',
        description: 'Creación de líneas gráficas, logotipos y manuales de identidad desde cero.'
      },
      {
        title: 'Producción Audiovisual Cinematográfica',
        description: 'Desarrollo y producción de contenido multimedia con factura de cine.'
      }
    ]
  },
  {
    id: 's2',
    title: 'Industrial Design',
    category: 'Premium Products',
    items: [
      {
        title: 'Promocionales de Alta Gama',
        description: 'Vasos personalizados y vajilla exclusiva en vidrio y policarbonato.'
      },
      {
        title: 'Impresión de Gran Formato y Lujo',
        description: 'Letreros luminosos estructurados, banners en lona y acrílico de alta fidelidad.'
      },
      {
        title: 'Experiencias BTL',
        description: 'Activaciones e intervenciones de guerrilla de alto impacto estratégico.'
      }
    ]
  },
  {
    id: 's3',
    title: 'GovTech',
    category: 'Smart Infrastructure',
    items: [
      {
        title: 'Software Electoral & Asesoría Política',
        description: 'Plataformas analíticas a la medida para campañas presidenciales y gubernamentales.'
      },
      {
        title: 'Custom Software Development',
        description: 'Soluciones para bienes raíces, distribución de insumos médicos y flujos empresariales.'
      },
      {
        title: 'Ecosistema Smart Access (NFC / RFID / IR)',
        description: 'Tiquetes digitales, wallets móviles y pulseras inteligentes con autenticación biométrica.'
      }
    ]
  },
  {
    id: 's4',
    title: 'Elite Booking',
    category: 'Global Representation',
    items: [
      {
        title: 'Agencia Deportiva de Alto Rendimiento',
        description: 'Gestión de carrera de atletas profesionales en Fútbol, Boxeo y Béisbol Mayor.'
      },
      {
        title: 'Influencer Marketing & Celebridades',
        description: 'Alianzas estratégicas con figuras públicas y creadores de contenido de alto perfil.'
      },
      {
        title: 'World-Class Legends & Latin Icons',
        description: 'Contratación directa: Beyoncé, Coldplay, Bruno Mars, Rubén Blades, Maluma, Carlos Vives.'
      }
    ]
  }
];

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 's1',
    sectorTag: 'SECTOR 01 — ESTRATEGIA DIGITAL',
    title: 'Emprendedores, PYMES & Marcas Locales',
    subtitle: 'Creative Studio & Digital Presence',
    description: 'Pensado para marcas de cualquier escala que buscan construir o potenciar su ecosistema digital con presencia de impacto mundial.',
    points: [
      {
        title: 'Redes Sociales End-to-End',
        detail: 'Estrategia de contenidos, diseño y gestión de comunidad adaptada a todo nivel empresarial.'
      },
      {
        title: 'Identidad Corporativa & Branding',
        detail: 'Creación de líneas gráficas, logotipos y manuales de identidad desde cero.'
      },
      {
        title: 'Producción Audiovisual Cinematográfica',
        detail: 'Desarrollo y producción de contenido multimedia con factura de cine.'
      }
    ],
    imgColor: 'sector1.jpg',
    imgGray: 'sector1n.jpg',
    fallbackGradientColor: 'linear-gradient(180deg, rgba(80, 20, 20, 0.7) 0%, rgba(10, 10, 12, 0.95) 100%)',
    fallbackGradientGray: 'linear-gradient(180deg, rgba(40, 40, 40, 0.6) 0%, rgba(10, 10, 12, 0.95) 100%)'
  },
  {
    id: 's2',
    sectorTag: 'SECTOR 02 — DESARROLLO INDUSTRIAL',
    title: 'Grandes Empresas & Corporativos',
    subtitle: 'Industrial Design & Premium Products',
    description: 'La tangibilización de la marca en el mundo físico. Desde materiales promocionales de uso diario hasta fachadas luminosas y activaciones masivas.',
    points: [
      {
        title: 'Promocionales de Alta Gama',
        detail: 'Vasos personalizados y piezas de vajilla exclusivas en vidrio y policarbonato.'
      },
      {
        title: 'Impresión de Gran Formato y Lujo',
        detail: 'Letreros luminosos estructurados, banners en lona y sistemas de impresión directa sobre acrílico.'
      },
      {
        title: 'Experiencias BTL',
        detail: 'Activaciones e intervenciones de guerrilla de alto impacto en puntos estratégicos.'
      }
    ],
    imgColor: 'sector2.jpg',
    imgGray: 'sector2n.jpg',
    fallbackGradientColor: 'linear-gradient(180deg, rgba(20, 40, 80, 0.7) 0%, rgba(10, 10, 12, 0.95) 100%)',
    fallbackGradientGray: 'linear-gradient(180deg, rgba(45, 45, 45, 0.6) 0%, rgba(10, 10, 12, 0.95) 100%)'
  },
  {
    id: 's3',
    sectorTag: 'SECTOR 03 — INGENIERÍA AVANZADA',
    title: 'Gobiernos Locales, Instituciones & Eventos (Civic Pulse)',
    subtitle: 'GovTech & Smart Infrastructure',
    description: 'El núcleo de ingeniería avanzada e infraestructura propia de la agencia. Soluciones hechas a la medida que integran software y hardware.',
    points: [
      {
        title: 'Software Electoral & Asesoría Política',
        detail: 'Plataformas analíticas para segmentación, control de datos y gestión de campañas presidenciales.'
      },
      {
        title: 'Custom Software Development',
        detail: 'Plataformas de bienes raíces, distribución de insumos médicos y flujos empresariales.'
      },
      {
        title: 'Ecosistema Smart Access (NFC / RFID / IR)',
        detail: 'Tiquetes digitales, wallets móviles y pulseras inteligentes con autenticación biométrica global.'
      }
    ],
    imgColor: 'sector3.jpg',
    imgGray: 'sector3n.jpg',
    fallbackGradientColor: 'linear-gradient(180deg, rgba(20, 70, 40, 0.7) 0%, rgba(10, 10, 12, 0.95) 100%)',
    fallbackGradientGray: 'linear-gradient(180deg, rgba(50, 50, 50, 0.6) 0%, rgba(10, 10, 12, 0.95) 100%)'
  },
  {
    id: 's4',
    sectorTag: 'SECTOR 04 — REPRESENTACIÓN GLOBAL',
    title: 'Atletas, Promotores & Marcas Deportivas',
    subtitle: 'Elite Booking & Representation',
    description: 'La división de talentos de D&M encargada de conectar marcas, estadios y audiencias con figuras icónicas del deporte y la música a nivel global.',
    points: [
      {
        title: 'Agencia Deportiva de Alto Rendimiento',
        detail: 'Representación de atletas profesionales en Fútbol, Boxeo y Béisbol Mayor.'
      },
      {
        title: 'Influencer Marketing & Celebridades',
        detail: 'Alianzas estratégicas con creadores de contenido de alto perfil y figuras públicas.'
      },
      {
        title: 'Global Booking (World Legends & Latin Icons)',
        detail: 'Contratación directa: Beyoncé, Coldplay, Bruno Mars, Rubén Blades, Maluma, Carlos Vives, Juan Luis Guerra.'
      }
    ],
    imgColor: 'sector4.jpg',
    imgGray: 'sector4n.jpg',
    fallbackGradientColor: 'linear-gradient(180deg, rgba(60, 20, 70, 0.7) 0%, rgba(10, 10, 12, 0.95) 100%)',
    fallbackGradientGray: 'linear-gradient(180deg, rgba(55, 55, 55, 0.6) 0%, rgba(10, 10, 12, 0.95) 100%)'
  }
];
