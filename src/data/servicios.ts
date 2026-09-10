export interface Servicio {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionCorta: string;
  icono: string;
  imagen: string;
  caracteristicas: string[];
  proyectosRelacionados: string[];
}

export const servicios: Servicio[] = [
  {
    slug: 'obra-civil',
    nombre: 'Obra Civil y Construccion',
    descripcion:
      'Ejecutamos proyectos de obra civil integral que abarcan desde la construccion de naves industriales hasta trabajos de pavimentacion y terracerias. Contamos con la experiencia y el equipo necesario para llevar a cabo obras de gran envergadura con los mas altos estandares de calidad. Nuestro compromiso es entregar resultados solidos, funcionales y duraderos.',
    descripcionCorta:
      'Construccion integral de obra civil, pavimentacion, naves industriales y terracerias.',
    icono: 'building',
    imagen: '/images/servicios/obra-civil.jpg',
    caracteristicas: [
      'Construccion de naves industriales y edificaciones',
      'Terracerias y movimiento de tierras',
      'Pavimentacion asfaltica e hidraulica',
      'Cimentaciones y obra estructural',
      'Supervision y control de calidad en obra',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'areas-verdes',
    nombre: 'Mantenimiento a Areas Verdes',
    descripcion:
      'Brindamos servicios especializados de mantenimiento a areas verdes en espacios de gran importancia como el Bosque de Chapultepec, zoologicos y jardines publicos. Nuestro equipo se encarga de la poda, jardineria, riego y conservacion del paisaje natural. Trabajamos con responsabilidad ambiental para preservar y embellecer estos espacios.',
    descripcionCorta:
      'Mantenimiento integral de areas verdes en parques, zoologicos y jardines publicos.',
    icono: 'leaf',
    imagen: '/images/servicios/areas-verdes.jpg',
    caracteristicas: [
      'Poda y mantenimiento de arboles y arbustos',
      'Jardineria y diseno de paisaje',
      'Sistemas de riego y conservacion hidrica',
      'Mantenimiento en el Bosque de Chapultepec y zoologicos',
      'Control de plagas y fertilizacion',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'limpieza',
    nombre: 'Limpieza Institucional',
    descripcion:
      'Ofrecemos servicios de limpieza institucional para oficinas, instalaciones deportivas, escuelas y edificios gubernamentales. Utilizamos productos y tecnicas profesionales que garantizan espacios higienicos y seguros. Nuestro personal capacitado asegura un servicio eficiente y de alta calidad en cada proyecto.',
    descripcionCorta:
      'Limpieza profesional para oficinas, instalaciones deportivas, escuelas y edificios institucionales.',
    icono: 'broom',
    imagen: '/images/servicios/limpieza.jpg',
    caracteristicas: [
      'Limpieza de oficinas y edificios corporativos',
      'Mantenimiento de instalaciones deportivas',
      'Limpieza profunda de escuelas e instituciones educativas',
      'Sanitizacion y desinfeccion de espacios',
      'Manejo de residuos y reciclaje',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'pozos-y-tanques',
    nombre: 'Pozos, Carcamos y Tanques',
    descripcion:
      'Nos especializamos en la construccion y mantenimiento de infraestructura hidraulica, incluyendo pozos de agua, carcamos de bombeo y tanques de almacenamiento. Ejecutamos proyectos clave para el abastecimiento y distribucion de agua potable. Nuestra experiencia garantiza obras funcionales y de larga durabilidad.',
    descripcionCorta:
      'Construccion y mantenimiento de pozos de agua, carcamos de bombeo y tanques de almacenamiento.',
    icono: 'water',
    imagen: '/images/servicios/pozos-y-tanques.jpg',
    caracteristicas: [
      'Perforacion y equipamiento de pozos de agua',
      'Construccion de carcamos de bombeo',
      'Fabricacion e instalacion de tanques de almacenamiento',
      'Rehabilitacion de infraestructura hidraulica existente',
      'Sistemas de bombeo y distribucion de agua',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'aires-acondicionados',
    nombre: 'Aires Acondicionados',
    descripcion:
      'Proporcionamos servicios de mantenimiento preventivo y correctivo para sistemas de aire acondicionado, incluyendo equipos minisplit, fan and coil y sistemas centrales. Nuestros tecnicos certificados aseguran el optimo funcionamiento de los equipos HVAC. Atendemos tanto instalaciones comerciales como gubernamentales.',
    descripcionCorta:
      'Mantenimiento preventivo y correctivo de sistemas HVAC, minisplits y fan and coil.',
    icono: 'snowflake',
    imagen: '/images/servicios/aires-acondicionados.jpg',
    caracteristicas: [
      'Mantenimiento preventivo programado de equipos HVAC',
      'Reparacion y mantenimiento correctivo',
      'Instalacion de equipos minisplit y fan and coil',
      'Diagnostico y optimizacion de sistemas de climatizacion',
      'Servicio a instalaciones comerciales y de gobierno',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'salas-hospitalarias',
    nombre: 'Remodelacion de Salas Hospitalarias',
    descripcion:
      'Realizamos la remodelacion y adecuacion de salas hospitalarias especializadas, incluyendo salas de tomografia, rayos X y resonancia magnetica. Cumplimos con las normativas y especificaciones tecnicas requeridas para estos espacios criticos. Nuestro trabajo garantiza ambientes seguros y funcionales para pacientes y personal medico.',
    descripcionCorta:
      'Remodelacion de salas de tomografia, rayos X y resonancia magnetica en hospitales.',
    icono: 'hospital',
    imagen: '/images/servicios/salas-hospitalarias.jpg',
    caracteristicas: [
      'Adecuacion de salas de tomografia y rayos X',
      'Remodelacion de salas de resonancia magnetica',
      'Cumplimiento de normativas hospitalarias y de seguridad',
      'Instalaciones electricas y de blindaje especializadas',
      'Acabados y pisos de grado hospitalario',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'pavimentacion',
    nombre: 'Pavimentacion',
    descripcion:
      'Ejecutamos proyectos de pavimentacion con concreto asfaltico e hidraulico para calles, avenidas y vialidades. Contamos con la maquinaria y el personal especializado para garantizar superficies resistentes y duraderas. Trabajamos bajo estrictas normas de calidad para asegurar la vida util de cada proyecto.',
    descripcionCorta:
      'Pavimentacion con concreto asfaltico e hidraulico para calles y avenidas.',
    icono: 'road',
    imagen: '/images/servicios/pavimentacion.jpg',
    caracteristicas: [
      'Pavimentacion con concreto asfaltico',
      'Pavimentacion con concreto hidraulico',
      'Rehabilitacion y bacheo de vialidades',
      'Senalizacion y demarcacion vial',
      'Control de calidad y pruebas de laboratorio',
    ],
    proyectosRelacionados: [],
  },
  {
    slug: 'energia-limpia',
    nombre: 'Energia Limpia y Sustentable',
    descripcion:
      'Implementamos soluciones de energia limpia mediante la instalacion de calentadores solares y sistemas fotovoltaicos. Contribuimos a la transicion energetica con tecnologia sustentable y eficiente. Nuestros proyectos benefician tanto a comunidades como a instituciones, reduciendo costos y el impacto ambiental.',
    descripcionCorta:
      'Instalacion de calentadores solares y sistemas fotovoltaicos para energia sustentable.',
    icono: 'sun',
    imagen: '/images/servicios/energia-limpia.jpg',
    caracteristicas: [
      'Suministro e instalacion de calentadores solares',
      'Diseno e instalacion de sistemas fotovoltaicos',
      'Asesoria en eficiencia energetica',
      'Proyectos de energia sustentable para comunidades',
      'Mantenimiento de sistemas de energia renovable',
    ],
    proyectosRelacionados: [],
  },
];
