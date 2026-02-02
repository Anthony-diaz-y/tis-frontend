// src/shared/services/apiConnector.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Client-side only
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        // Clear session and redirect to login if needed
        // localStorage.removeItem("token");
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export const apiConnector = async <T = unknown>(
  method: string,
  url: string,
  bodyData?: unknown,
  headers?: Record<string, string>,
  params?: unknown,
): Promise<AxiosResponse<T>> => {
  const config: AxiosRequestConfig = {
    method: method as any,
    url,
    data: bodyData,
    headers,
    params,
  };

  return axiosInstance.request<T>(config);
};
