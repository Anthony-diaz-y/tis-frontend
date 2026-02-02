import { UserProfileCard, UserProfilePage } from "@/modules/user";
import type { User } from "@/modules/user/types";
import Image from "next/image";

const DEMO_USER: User = {
  id: "demo",
  name: "María González Pérez",
  grado: "Licenciatura en Ingeniería",
  specialty: "Ingeniería de Sistemas",
  dni: "12345678",
  cip: "123456",
  area: "Tecnología",
  photo_url:
    "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
};

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  if (id === "demo") {
    return (
      <main className="relative min-h-screen flex flex-col items-center py-12 px-4 overflow-hidden">
        {/* Executive Presentation Background */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="h-1/3 bg-[#3d4f1c] w-full shadow-lg" />
          <div className="h-2/3 bg-[#f4f2ee] w-full" />
        </div>

        <div className="relative z-10 w-full max-w-[432px] mt-8">
          <UserProfileCard user={DEMO_USER} />
        </div>
      </main>
    );
  }

  return <UserProfilePage id={id} />;
}
