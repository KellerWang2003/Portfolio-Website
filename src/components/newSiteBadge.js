"use client";

export default function NewSiteBadge() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-auto md:top-20 md:right-8 z-50 flex items-center gap-3 px-4 py-2 border border-[#6E6E6E] rounded-lg font-oxanium text-xs md:text-sm text-[#404040] bg-[#F3F2EE]">
      <span className="opacity-80 hover:opacity-100 transition-opacity">New site coming soon!</span>
    </div>
  );
}
