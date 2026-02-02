"use client";

import type { User } from "./types";

export interface UserProfileCardProps {
  user: User;
  onClose?: () => void;
}

export function UserProfileCard({ user, onClose }: UserProfileCardProps) {
  return (
    <article className="w-full max-w-[400px] mx-auto bg-white rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header militar */}
      <div className="h-[88px] bg-[#3d4f1c] rounded-t-[14px] relative">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-white rounded-full hover:bg-white/20 transition-colors"
            aria-label="Cerrar"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-[50px] relative z-10">
        <div className="w-[100px] h-[100px] rounded-full bg-white shadow-md flex items-center justify-center relative text-[#6b7355] overflow-hidden">
          {user.photo_url ? (
            <img
              src={user.photo_url}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <UserIcon />
          )}
          <span
            className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#3d6b4a] text-white flex items-center justify-center border-2 border-white"
            aria-hidden
          >
            <CheckIcon />
          </span>
        </div>
      </div>

      {/* Insignia grado */}
      <div className="flex justify-center px-6 mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#e8ebe0] text-[#3d4f1c] rounded-lg text-sm font-medium border border-[#3d4f1c]/20">
          <GraduationIcon />
          <span>{user.grado}</span>
        </div>
      </div>

      {/* Campos */}
      <div className="px-6 pb-5">
        <Row label="Grado" value={user.grado} link />
        <Row label="Especialidad" value={user.specialty} link />
        <Row label="Ape_Nomb" value={user.name} />
        <Row label="Dni" value={user.dni} link />
        <Row label="Cip" value={user.cip} link />
        <Row label="Área" value={user.area} link />
      </div>

      {/* Verificación */}
      <div className="flex items-center gap-3.5 p-4 mx-6 mb-6 rounded-xl bg-[#e8f0e8]">
        <span className="w-10 h-10 rounded-full bg-[#3d6b4a] text-white flex items-center justify-center shrink-0">
          <CheckIcon />
        </span>
        <div>
          <p className="m-0 text-[15px] font-bold text-[#2d5a3d]">
            Identidad verificada
          </p>
          <p className="mt-0.5 text-[13px] text-[#4a7c59]">Credencial válida</p>
        </div>
      </div>
    </article>
  );
}

function Row({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-3.5 border-b border-[#e0ddd4] last:border-0 gap-4">
      <span className="text-sm text-[#5c5c5c] shrink-0">{label}</span>
      <span
        className={`text-sm text-right ${
          link ? "text-[#3d4f1c] underline" : "text-[#5c5c5c]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M15 5L5 15M5 5l10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className="text-[#6b7355]"
      aria-hidden
    >
      <path
        d="M28 28c7.73 0 14-6.27 14-14S35.73 0 28 0 14 6.27 14 14 20.27 28 28zm0 7c-9.94 0-18 4.48-18 10v11h36V45c0-5.52-8.06-10-18-10z"
        fill="currentColor"
      />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3L2 9l10 6 10-6-10-6zM2 17l10 6 10-6M2 13l10 6 10-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2 7l3.5 3.5L12 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
