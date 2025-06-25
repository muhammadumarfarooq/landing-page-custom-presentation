"use client";

import { motion } from "framer-motion";
import SlideNavigation from "@/components/SlideNavigation";
import ProgressDots from "@/components/ProgressDots";
import { Slide } from "@/lib/slides";
import { usePathname } from "next/navigation";

export default function SlideContent({ slide }: { slide: Slide }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        {slide.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="max-w-2xl text-lg text-center mb-8"
      >
        {slide.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4"
      >
        <SlideNavigation current={slide.id} total={4} />
        <ProgressDots current={slide.id} />
      </motion.div>
    </motion.div>
  );
}
