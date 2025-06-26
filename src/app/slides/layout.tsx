import { cn } from "@/lib/utils";

export default function SlideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen transition-colors")}>
      {children}
    </div>
  );
}
