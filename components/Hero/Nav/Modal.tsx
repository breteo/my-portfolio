"use client";

import { useEffect, ReactNode } from "react";

export default function Modal({
  showMenu,
  children,
}: {
  showMenu: boolean;
  children: ReactNode;
}) {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);
  if (!showMenu) return null;
  return <>{children}</>;
}
