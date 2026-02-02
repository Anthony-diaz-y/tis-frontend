/**
 * Tipos para la entidad Usuario (respuesta del backend).
 * Ajusta los campos según la API real.
 */
export interface User {
  id: string;
  name: string;
  grado: string;
  specialty: string;
  dni: string;
  cip: string;
  area: string;
}
