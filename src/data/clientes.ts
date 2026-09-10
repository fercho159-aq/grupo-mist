export interface Cliente {
  nombre: string;
  sector: 'publico' | 'privado';
}

export const clientes: Cliente[] = [
  { nombre: 'Alcaldia Cuauhtemoc', sector: 'publico' },
  { nombre: 'Alcaldia Tlahuac', sector: 'publico' },
  { nombre: 'SEDEMA', sector: 'publico' },
  { nombre: 'SACMEX', sector: 'publico' },
  { nombre: 'CONADE', sector: 'publico' },
  { nombre: 'Hospital General de Mexico', sector: 'publico' },
  { nombre: 'SAT', sector: 'publico' },
  { nombre: 'Secretaria de Obras y Servicios', sector: 'publico' },
  { nombre: 'IMSS', sector: 'publico' },
  { nombre: 'Grupo Industrial Vallejo', sector: 'privado' },
  { nombre: 'Constructora del Valle', sector: 'privado' },
  { nombre: 'Inmobiliaria Central', sector: 'privado' },
  { nombre: 'Desarrollos Metropolitanos', sector: 'privado' },
];
