import { UserProfileCard, UserProfilePage } from "@/modules/user";
import type { User } from "@/shared/types";

const DEMO_USER: User = {
  id: "demo",
  nombre: "María",
  apellidos: "González Pérez",
  grado: "Licenciatura en Ingeniería",
};

interface UserPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Si id === "demo" → muestra datos de ejemplo (sin llamar al backend).
 * Si no → UserProfilePage hace fetch a /api/user/[id] (visible en Network);
 * la API route llama al backend (Railway).
 */
export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  if (id === "demo") {
    return (
      <main className="min-h-screen bg-[#e8e6e0] py-6 px-4 flex justify-center">
        <div className="w-full max-w-[432px]">
          <UserProfileCard user={DEMO_USER} />
        </div>
      </main>
    );
  }

  return <UserProfilePage id={id} />;
}
