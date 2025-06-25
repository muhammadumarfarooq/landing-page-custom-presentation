"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useKeyboardNavigation(current: number, total: number) {
  const router = useRouter();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && current < total) {
        router.push(`/slides/${current + 1}`);
      } else if (e.key === "ArrowLeft" && current > 1) {
        router.push(`/slides/${current - 1}`);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, total, router]);
}
