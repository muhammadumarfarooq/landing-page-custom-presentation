import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SlideLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex items-center justify-center transition-colors px-4 md:px-8",
        "text-neutral-900 dark:text-neutral-100",
        "animated-gradient",
        className
      )}
    >
      <div className="w-full max-w-5xl">{children}</div>
    </div>
  );
}
