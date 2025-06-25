"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      layout
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}
