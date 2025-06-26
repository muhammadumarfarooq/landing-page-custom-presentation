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
              "flex h-screen w-screen flex-col items-center justify-center text-center px-6",
              "text-neutral-900 dark:text-neutral-100",
              "animated-gradient",
              className
          )}
      >
          {children}
      </div>
  );
}
