import baseUrl from "./api.config";

const userBase = `${baseUrl.replace(/\/?$/, "")}/user`;

export function getOneUserUrl(id: string): string {
  return `${userBase}/${id}`;
}