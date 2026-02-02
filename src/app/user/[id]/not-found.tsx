import Link from "next/link";

export default function UserNotFound() {
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
