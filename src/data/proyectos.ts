export interface Proyecto {
  slug: string;
  titulo: string;
  cliente: string;
  categoria: string;
  descripcion: string;
  monto: string;
  fechaInicio: string;
  fechaFin: string;
  imagen: string;
  destacado: boolean;
  servicioRelacionado: string;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'pavimentacion-alcaldia-cuauhtemoc',
    titulo: 'Pavimentacion en Alcaldia Cuauhtemoc',
    cliente: 'Alcaldia Cuauhtemoc',
    categoria: 'Obra Civil',
    descripcion:
      'Trabajos de pavimentacion con concreto hidraulico en diversas vialidades de la Alcaldia Cuauhtemoc, Ciudad de Mexico.',
    monto: '$4,500,000 MXN',
    fechaInicio: '2023-03',
    fechaFin: '2023-08',
    imagen: '/images/proyectos/pavimentacion-cuauhtemoc.jpg',
    destacado: true,
    servicioRelacionado: 'pavimentacion',
  },
  {
    slug: 'mantenimiento-chapultepec',
    titulo: 'Mantenimiento de Areas Verdes en Chapultepec',
    cliente: 'SEDEMA',
    categoria: 'Areas Verdes',
    descripcion:
      'Mantenimiento integral de areas verdes en la primera y segunda seccion del Bosque de Chapultepec.',
    monto: '$3,200,000 MXN',
    fechaInicio: '2022-01',
    fechaFin: '2022-12',
    imagen: '/images/proyectos/chapultepec.jpg',
    destacado: true,
    servicioRelacionado: 'areas-verdes',
  },
  {
    slug: 'remodelacion-hospital-general',
    titulo: 'Remodelacion de Sala de Tomografia',
    cliente: 'Hospital General de Mexico',
    categoria: 'Salas Hospitalarias',
    descripcion:
      'Remodelacion completa de la sala de tomografia incluyendo blindaje, instalaciones electricas y acabados especializados.',
    monto: '$6,800,000 MXN',
    fechaInicio: '2023-06',
    fechaFin: '2024-01',
    imagen: '/images/proyectos/hospital-general.jpg',
    destacado: true,
    servicioRelacionado: 'salas-hospitalarias',
  },
  {
    slug: 'pozos-agua-iztapalapa',
    titulo: 'Construccion de Pozos de Agua',
    cliente: 'SACMEX',
    categoria: 'Pozos y Tanques',
    descripcion:
      'Perforacion y equipamiento de pozos de agua potable en la Alcaldia Iztapalapa para abastecimiento de la zona oriente.',
    monto: '$8,100,000 MXN',
    fechaInicio: '2022-05',
    fechaFin: '2023-02',
    imagen: '/images/proyectos/pozos-iztapalapa.jpg',
    destacado: true,
    servicioRelacionado: 'pozos-y-tanques',
  },
  {
    slug: 'limpieza-conade',
    titulo: 'Limpieza de Instalaciones Deportivas',
    cliente: 'CONADE',
    categoria: 'Limpieza',
    descripcion:
      'Servicios de limpieza institucional para las instalaciones del Centro Deportivo Olimpico Mexicano.',
    monto: '$1,500,000 MXN',
    fechaInicio: '2023-01',
    fechaFin: '2023-12',
    imagen: '/images/proyectos/conade.jpg',
    destacado: false,
    servicioRelacionado: 'limpieza',
  },
  {
    slug: 'calentadores-solares-tlahuac',
    titulo: 'Instalacion de Calentadores Solares',
    cliente: 'Alcaldia Tlahuac',
    categoria: 'Energia Limpia',
    descripcion:
      'Suministro e instalacion de calentadores solares en viviendas de interes social en la Alcaldia Tlahuac.',
    monto: '$2,900,000 MXN',
    fechaInicio: '2023-04',
    fechaFin: '2023-09',
    imagen: '/images/proyectos/calentadores-tlahuac.jpg',
    destacado: true,
    servicioRelacionado: 'energia-limpia',
  },
  {
    slug: 'aires-acondicionados-sat',
    titulo: 'Mantenimiento HVAC Oficinas SAT',
    cliente: 'SAT',
    categoria: 'Aires Acondicionados',
    descripcion:
      'Mantenimiento preventivo y correctivo de sistemas de aire acondicionado en oficinas centrales del SAT.',
    monto: '$1,200,000 MXN',
    fechaInicio: '2022-03',
    fechaFin: '2022-12',
    imagen: '/images/proyectos/hvac-sat.jpg',
    destacado: false,
    servicioRelacionado: 'aires-acondicionados',
  },
  {
    slug: 'nave-industrial-vallejo',
    titulo: 'Construccion de Nave Industrial',
    cliente: 'Grupo Industrial Vallejo',
    categoria: 'Obra Civil',
    descripcion:
      'Construccion de nave industrial de 2,500 m2 con oficinas administrativas en la zona industrial de Vallejo.',
    monto: '$12,500,000 MXN',
    fechaInicio: '2021-08',
    fechaFin: '2022-06',
    imagen: '/images/proyectos/nave-vallejo.jpg',
    destacado: true,
    servicioRelacionado: 'obra-civil',
  },
];
