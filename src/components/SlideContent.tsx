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
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
    exit: { opacity: 0, y: -20, scale: 0.97, transition: { duration: 0.3 } },
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
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-4 shadow-2xl mb-6"
      >
        <motion.img
          src={slide.image}
          alt={slide.title}
          className="h-64 md:h-72 w-auto rounded-xl ring-2 ring-white/20 object-contain"
          draggable={false}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        {slide.title}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-sm md:text-base max-w-xl mt-2 text-neutral-700 dark:text-neutral-200"
      >
        {slide.description}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-6">
        <SlideNavigation current={id} total={total} />
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ProgressDots current={id} total={total} />
      </div>
    </motion.div>
  );
}
