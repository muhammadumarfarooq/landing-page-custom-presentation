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
      <motion.img
        variants={itemVariants}
        src={slide.image}
        alt={slide.title}
        className="w-72 md:w-80 h-auto mb-4 rounded-md"
        draggable={false}
      />

      <motion.h1 variants={itemVariants} className="text-5xl font-bold">
        {slide.title}
      </motion.h1>

      <motion.p variants={itemVariants} className="text-lg max-w-xl mt-2">
        {slide.description}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-6">
        <SlideNavigation current={id} total={total} />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ProgressDots current={id} total={total} />
      </motion.div>
    </motion.div>
  );
}
