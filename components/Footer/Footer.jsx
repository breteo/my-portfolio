"use client";

import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-200 px-[20px] pb-[calc(20px+env(safe-area-inset-bottom))] sm:px-[32px] sm:pb-[24px]">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-[16px] border-t border-black/10 pt-[16px]">
        <div className="min-w-0 text-[11px]/[16px] text-black/60 sm:text-[12px]/[18px]">
          <p className="font-medium text-black/75">© 2026 Brendan Teo</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
        <button
          type="button"
          aria-label="Back to top"
          className="flex size-[40px] shrink-0 items-center justify-center rounded-full border border-black/15 bg-white/70 text-black/70 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
          onClick={scrollToTop}
        >
          <Icon path={mdiArrowUp} size={0.9} />
        </button>
      </div>
    </footer>
  );
}
