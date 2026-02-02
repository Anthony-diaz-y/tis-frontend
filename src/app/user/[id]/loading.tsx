export default function UserLoading() {
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
