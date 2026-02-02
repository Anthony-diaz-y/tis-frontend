/**
 * Configuración centralizada de la API
 */

const getApiUrl = (): string => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";

  return apiUrl;
};

export const API_URL = getApiUrl();

export default API_URL;
