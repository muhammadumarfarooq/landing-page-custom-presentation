import { cn } from "@/lib/utils";

export default function SlideLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen transition-colors", className)}>
      {children}
    </div>
  );
}
