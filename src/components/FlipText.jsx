"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge"

export const LayoutTextFlip = ({
  text = "",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl">
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative w-fit overflow-hidden border-none font-sans text-sm font-bold tracking-tight text-white shadow-sm  shadow-black/10  drop-shadow-lg md:text-4xl dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={twMerge("inline-block whitespace-nowrap")}>
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
