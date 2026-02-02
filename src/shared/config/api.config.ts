// src/shared/config/api.config.ts
const getApiUrl = (): string => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
  return apiUrl;
};

export const API_URL = getApiUrl();
