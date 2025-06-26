"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Slide } from "@/lib/slides";
import SlideNavigation from "./SlideNavigation";
import ProgressDots from "./ProgressDots";

export default function SlideContent({
  slide,
  total,
}: {
  slide: Slide;
  total: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const id = slide.id;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
    exit: { opacity: 0, y: -30, scale: 0.98 },
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && id < total) {
        router.push(`/slides/${id + 1}`);
      }
      if (e.key === "ArrowLeft" && id > 1) {
        router.push(`/slides/${id - 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [id, total, router]);

  return (
    <motion.div
      key={pathname}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative"
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-4 shadow-2xl mb-6">
        <motion.img
            variants={itemVariants}
            src={slide.image}
            alt={slide.title}
            className="w-96 md:w-96 h-auto rounded-xl ring-2 ring-white/20"
            draggable={false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        />
      </div>

      <motion.h1
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        {slide.title}
      </motion.h1>

      <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-xl mt-2 text-neutral-700 dark:text-neutral-200"
      >
        {slide.description}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-6">
        <SlideNavigation current={id} total={total} />
      </motion.div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ProgressDots current={id} total={total} />
      </div>
    </motion.div>
  );
}
