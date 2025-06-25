"use client";

import { slides } from "@/lib/slides";
import { useRouter } from "next/navigation";

export default function ProgressDots({ current }: { current: number }) {
  const router = useRouter();

  return (
    <div className="absolute bottom-6 flex gap-2">
      {slides.map((slide) => (
        <button
          key={slide.id}
          onClick={() => router.push(`/slides/${slide.id}`)}
          className={`h-3 w-3 rounded-full ${
            current === slide.id ? "bg-white" : "bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}
