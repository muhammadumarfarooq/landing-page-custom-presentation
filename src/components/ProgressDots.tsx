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
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full transition-all 
              ${
                isActive
                  ? "bg-foreground scale-125 shadow-md"
                  : "bg-muted hover:bg-foreground/50"
              }
              w-2.5 h-2.5 md:w-3 md:h-3
              focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
            `}
          />
        );
      })}
    </div>
  );
}
