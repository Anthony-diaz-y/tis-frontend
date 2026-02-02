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
