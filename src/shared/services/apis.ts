import API_URL from "./api.config";

const BASE_URL = API_URL;

export const userEndpoints = {
  /** Base sin id: usar getOneUserUrl(id) para la llamada con parámetro dinámico */
  GET_ONE_USER: `${BASE_URL}user`,
};

/**
 * Devuelve la URL del endpoint para obtener un usuario por id.
 * Uso: fetch(getOneUserUrl(id))
 */
export function getOneUserUrl(id: string): string {
  const base = userEndpoints.GET_ONE_USER.replace(/\/?$/, "");
  return `${base}/${id}`;
}