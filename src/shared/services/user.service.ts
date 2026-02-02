import { getOneUserUrl } from "./apis";
import type { User } from "@/shared/types/user.types";

function normalizeUser(
  raw: Record<string, unknown>,
  requestedId: string
): User | null {
  const obj = (raw.data ?? raw.user ?? raw) as Record<string, unknown>;

  const name =
    (obj.name ?? obj.nombre ?? obj.firstName ?? obj.first_name) as string | undefined;
  const lastName = (obj.last_name ?? obj.lastName ?? obj.apellidos) as string | undefined;
  const grade = (obj.grade ?? obj.grado ?? obj.degree ?? obj.degreeName) as string | undefined;

  const id = (typeof obj.id === "string" ? obj.id : requestedId) as string;

  if (name != null && lastName != null && grade != null) {
    return {
      id,
      nombre: String(name),
      apellidos: String(lastName),
      grado: String(grade),
    };
  }
  return null;
}

export interface FetchUserResult {
  user: User | null;
  error: string | null;
}

export async function fetchUserById(id: string): Promise<FetchUserResult> {
  try {
    const url = getOneUserUrl(id);
    const res = await fetch(url, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const message =
        res.status === 404 ? "Usuario no encontrado" : `Error ${res.status}`;
      return { user: null, error: message };
    }

    const raw = (await res.json()) as Record<string, unknown>;
    const user = normalizeUser(raw, id);
    return user
      ? { user, error: null }
      : { user: null, error: "Formato de respuesta inválido" };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Error de conexión";
    return { user: null, error: message };
  }
}
