import { NextResponse } from "next/server";
import { fetchUserById } from "@/shared/services/user.service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { user, error } = await fetchUserById(id);

  if (error || !user) {
    return NextResponse.json(
      { error: error ?? "Usuario no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}
