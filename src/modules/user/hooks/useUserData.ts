import { useState, useEffect } from "react";
import { getUserById } from "../services/userAPI";
import { User } from "../types";

export const useUserData = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        if (isMounted) {
          if (data) {
            setUser(data);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { user, loading, error };
};
