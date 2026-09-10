export interface MiembroEquipo {
  nombre: string;
  cargo: string;
  area: string;
  imagen: string;
}

export const equipo: MiembroEquipo[] = [
  {
    nombre: 'Manuel Tena Gonzalez',
    cargo: 'Director General y Representante Legal',
    area: 'Direccion General',
    imagen: '/images/equipo/manuel-tena-gonzalez.jpg',
  },
  {
    nombre: 'Laura Gonzalez Signoret',
    cargo: 'Gerencia de Finanzas',
    area: 'Finanzas',
    imagen: '/images/equipo/laura-gonzalez-signoret.jpg',
  },
  {
    nombre: 'C. Luis Romo Hernandez',
    cargo: 'Contabilidad',
    area: 'Finanzas',
    imagen: '/images/equipo/luis-romo-hernandez.jpg',
  },
  {
    nombre: 'Arq. Jose Antonio Rodriguez Perez',
    cargo: 'Proyectos',
    area: 'Proyectos',
    imagen: '/images/equipo/jose-antonio-rodriguez-perez.jpg',
  },
  {
    nombre: 'Ing. Francisco Javier Barroso Guerra',
    cargo: 'Obra Civil / Ingenieria',
    area: 'Ingenieria',
    imagen: '/images/equipo/francisco-javier-barroso-guerra.jpg',
  },
  {
    nombre: 'Enrique Perez Rodriguez',
    cargo: 'Obra Civil / Ingenieria',
    area: 'Ingenieria',
    imagen: '/images/equipo/enrique-perez-rodriguez.jpg',
  },
  {
    nombre: 'Guadalupe Reyna Ortega',
    cargo: 'Administrativo',
    area: 'Administracion',
    imagen: '/images/equipo/guadalupe-reyna-ortega.jpg',
  },
  {
    nombre: 'Alejandro Monroy Rodriguez',
    cargo: 'Juridico',
    area: 'Legal',
    imagen: '/images/equipo/alejandro-monroy-rodriguez.jpg',
  },
];
