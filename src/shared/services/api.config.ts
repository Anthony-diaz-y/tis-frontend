const getApiUrl = (): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";
  return apiUrl.endsWith("/") ? apiUrl : `${apiUrl}/`;
};

export default getApiUrl();
