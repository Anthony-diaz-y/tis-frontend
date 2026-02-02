import { UserProfileCard, UserProfilePage } from "@/modules/user";
import type { User } from "@/modules/user/types";

const DEMO_USER: User = {
  id: "demo",
  name: "María González Pérez",
  grado: "Licenciatura en Ingeniería",
  specialty: "Ingeniería de Sistemas",
  dni: "12345678",
  cip: "123456",
  area: "Tecnología",
};

interface UserPageProps {
  params: Promise<{ id: string }>;
}

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
