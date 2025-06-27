"use client";

import { useRouter } from "next/navigation";

export default function ProgressDots({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const router = useRouter();

  const handleClick = (index: number) => {
    router.push(`/slides/${index + 1}`);
  };

  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index + 1 === current;
        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all 
              ${
                isActive
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-muted hover:bg-primary/50"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        );
      })}
    </div>
  );
}
