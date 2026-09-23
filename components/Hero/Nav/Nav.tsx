"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  {
    id: "about",
    label: "About",
    icon: (
      <>
        <circle cx="9" cy="6" r="3.2" />
        <path d="M3.2 15.2C3.9 12.6 6.2 11.2 9 11.2C11.8 11.2 14.1 12.6 14.8 15.2" />
      </>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="5.2" height="5.2" rx="1.4" />
        <rect x="10.3" y="2.5" width="5.2" height="5.2" rx="1.4" />
        <rect x="2.5" y="10.3" width="5.2" height="5.2" rx="1.4" />
        <rect x="10.3" y="10.3" width="5.2" height="5.2" rx="1.4" />
      </>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <>
        <rect x="2.2" y="4" width="13.6" height="10" rx="2.2" />
        <path d="M2.8 5.2L9 9.6L15.2 5.2" />
      </>
    ),
  },
];

// Highlights whichever section crosses the middle of the viewport; falls back
// to "about" while the hero is in view, matching the design's resting state.
function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Nav() {
  const active = useActiveSection();

  return (
    <nav className="font-(family-name:--font-inter)">
      <div className="fixed top-[16px] right-[16px] z-50 lg:hidden">
        <Sheet>
          <SheetTrigger className="rounded-full bg-[#FFFFFF8C] px-[18px] py-[10px] font-semibold text-[#0B1220] text-[16px]/[20px] tracking-[-0.01em] backdrop-blur-[20px] [box-shadow:#FFFFFF_0px_0px_0px_1px_inset,#0B12200F_0px_0px_0px_1px,#0B122024_0px_8px_20px_-12px]">
            Menu
          </SheetTrigger>
          <SheetContent
            side="top"
            className="flex flex-col items-center justify-center gap-[24px] py-[64px]"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            {links.map(({ id, label }) => (
              <SheetClose key={id} render={<Link href={`/#${id}`} />}>
                {label}
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      </div>

      <ul className="fixed top-1/2 right-[96px] z-50 hidden -translate-y-1/2 flex-col gap-[6px] rounded-[32px] bg-[#FFFFFF8C] p-[8px] backdrop-blur-[20px] lg:flex [box-shadow:#FFFFFF_0px_0px_0px_1px_inset,#FFFFFF_0px_1px_0px_inset,#0B12200F_0px_0px_0px_1px,#0B122024_0px_8px_20px_-12px]">
        {links.map(({ id, label, icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <Link
                href={`/#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex h-[48px] w-[180px] items-center gap-[10px] rounded-full pr-[22px] pl-[18px] font-semibold text-[16px]/[20px] tracking-[-0.01em] transition-colors duration-200",
                  isActive
                    ? "bg-[linear-gradient(135deg,rgb(255_255_255/0.98)_0%,rgb(255_255_255/0.62)_100%)] text-[#0B1220] [box-shadow:#FFFFFF_0px_0px_0px_1.5px_inset,#0B12200D_-3px_-3px_10px_inset,#FFFFFFE6_0px_0px_18px_inset,#0B122014_0px_0px_0px_1px,#0B122047_0px_14px_32px_-14px]"
                    : "text-[#6B7280] hover:text-[#0B1220]",
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
