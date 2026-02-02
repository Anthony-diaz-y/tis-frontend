// src/shared/services/apis.ts
import { API_URL } from "@/shared/config/api.config";

const BASE_URL = API_URL;

export const userEndpoints = {
  GET_USER_BY_ID: BASE_URL + "/user", // Assuming backend REST pattern /user/:id or similar
  CREATE_USER: BASE_URL + "/user/createUser",
};

// Placeholders for other modules as they are implemented
export const courseEndpoints = {
  // GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
};

export const domainEndpoints = {
  // GET_ALL_DOMAINS_API: BASE_URL + "/domain/getAllDomains",
};
