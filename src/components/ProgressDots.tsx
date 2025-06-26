"use client";

export default function ProgressDots({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index + 1 === current;
        return (
          <div
            key={index}
            className={`w-2.5 h-2.5 gap-1.5 rounded-full transition-all ${
              isActive ? "bg-primary scale-110" : "bg-muted"
            }`}
          />
        );
      })}
    </div>
  );
}
