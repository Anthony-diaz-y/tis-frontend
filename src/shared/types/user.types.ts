/**
 * Tipos para la entidad Usuario (respuesta del backend).
 * Ajusta los campos según la API real.
 */
export interface User {
  id: string;
  nombre: string;
  apellidos: string;
  grado: string;
}

/** Nombre completo derivado */
export function getFullName(user: User): string {
  return `${user.nombre} ${user.apellidos}`.trim();
}
