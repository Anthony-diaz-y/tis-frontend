import { User } from "../types";

export function normalizeUser(raw: any, requestedId: string): User | null {
  // Handle various response wrappers
  const obj = raw.data ?? raw.user ?? raw;

  if (!obj || typeof obj !== "object") return null;

  // Try to find name/lastname combination or full name
  const firstName =
    obj.name ?? obj.nombre ?? obj.firstName ?? obj.first_name ?? "";
  const lastName = obj.last_name ?? obj.lastName ?? obj.apellidos ?? "";

  // If backend returns "name" as full name, use it. Otherwise combine.
  const fullName =
    obj.fullName ??
    (firstName && lastName
      ? `${firstName} ${lastName}`.trim()
      : firstName || lastName);

  const grade = obj.grade ?? obj.grado ?? obj.degree ?? obj.degreeName ?? "S/G";
  const specialty = obj.specialty ?? obj.especialidad ?? "S/E";
  const dni = obj.dni ?? obj.document ?? "S/D";
  const cip = obj.cip ?? "S/C";
  const area = obj.area ?? "S/A";

  const id = typeof obj.id === "string" ? obj.id : requestedId;

  // Ideally we want at least a name to consider it valid
  if (fullName || grade) {
    return {
      id,
      name: String(fullName),
      grado: String(grade),
      specialty: String(specialty),
      dni: String(dni),
      cip: String(cip),
      area: String(area),
    };
  }
  return null;
}
