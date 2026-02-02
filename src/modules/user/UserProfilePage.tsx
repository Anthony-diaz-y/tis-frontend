"use client";

import Link from "next/link";
import { UserProfileCard } from "./UserProfileCard";
import { useUserData } from "./hooks/useUserData";

interface UserProfilePageProps {
  id: string;
}

export function UserProfilePage({ id }: UserProfilePageProps) {
  const { user, loading, error } = useUserData(id);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#e8e6e0] py-6 px-4 flex justify-center">
        <div className="w-full max-w-[432px] pt-6">
          <div className="bg-white rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="h-[88px] bg-[#4a5d23]/30 rounded-t-[14px] animate-pulse" />
            <div className="w-[100px] h-[100px] -mt-[50px] mx-auto rounded-full bg-[#d4d0c8] animate-pulse" />
            <div className="h-5 w-3/4 mx-auto mt-4 rounded bg-[#d4d0c8] animate-pulse" />
            <div className="h-8 w-1/2 mx-auto mt-3 rounded bg-[#d4d0c8] animate-pulse" />
            <div className="px-6 pb-5 mt-4 space-y-3">
              <div className="h-4 rounded bg-[#e8e6e0] animate-pulse" />
              <div className="h-4 rounded bg-[#e8e6e0] animate-pulse" />
              <div className="h-4 rounded bg-[#e8e6e0] animate-pulse" />
            </div>
            <div className="h-[72px] mx-6 mb-6 rounded-xl bg-[#e8f0e8]/50 animate-pulse" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="min-h-screen bg-[#e8e6e0] py-6 px-4 flex justify-center">
        <div className="w-full max-w-[432px] text-center pt-12">
          <h1 className="text-xl font-bold text-[#1c2316] m-0 mb-2">
            Usuario no encontrado
          </h1>
          <p className="text-[15px] text-[#5c5c5c] m-0 mb-6">
            El enlace puede ser incorrecto o el usuario ya no está disponible.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-2.5 bg-[#3d4f1c] text-white rounded-lg text-[15px] font-semibold no-underline hover:bg-[#2d3b14] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#e8e6e0] py-6 px-4 flex justify-center">
      <div className="w-full max-w-[432px]">
        <UserProfileCard user={user} />
      </div>
    </main>
  );
}
