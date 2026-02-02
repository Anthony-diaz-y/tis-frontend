import { apiConnector } from "@/shared/services/apiConnector";
import { userEndpoints } from "@/shared/services/apis";
import { User } from "../types";
import { normalizeUser } from "../utils/userNormalization";

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await apiConnector<any>(
      "GET",
      `${userEndpoints.GET_USER_BY_ID}/${id}`,
    );

    // Use the pure utility for normalization
    if (response.data) {
      return normalizeUser(response.data, id);
    }
    return null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const createUser = async (formData: FormData): Promise<User | null> => {
  try {
    const response = await apiConnector<any>(
      "POST",
      userEndpoints.CREATE_USER,
      formData,
      {
        "Content-Type": "multipart/form-data",
      },
    );

    if (response.data) {
      // Assuming backend returns the created user in the same format
      return normalizeUser(response.data, response.data.id || "");
    }
    return null;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};
