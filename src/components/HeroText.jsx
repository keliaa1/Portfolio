import React from "react";
import { motion } from "motion/react";
import { LayoutTextFlip } from "./FlipText";

const HeroText = () => {
  const words = [
    "3D Designer",
    "Full Stack Developer",
    "Cybersecurity Analyst",
    "Tech Enthusiast",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="text-8xl font-medium"
        >
          Hi, I'm Kelia
        </motion.h1>
        <div className="flex items-start gap-x-5">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="text-7xl font-medium text-neutral-300 mt-3 mb-6"
          >
            I am a {" "}
          </motion.p>
          <motion.div
          variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 1.5}}
            className="text-7xl font-medium text-neutral-300 mt-2 mb-6"
          >
            <LayoutTextFlip
              words={words}
              className="font-bold text-white text-8xl"
            />
          </motion.div>

        </div>
      </div>
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
        variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 1}}
        className="text-4xl font-medium text-center">Hi, I'm Kelia!</motion.p>
        <div>
          <motion.p
          variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 1.2}}
          className="text-3xl  font-black text-neutral-300 text-center"> I am a </motion.p>
          <motion.div className="text-start"
          variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 1.5}}
          >
            <LayoutTextFlip
              words={words}
              className="font-black text-center text-white text-5xl"
            />
          </motion.div>
          <motion.p
          variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 1.8}}
          className="text-md text-center font-black text-neutral-300">
            Based in Rwanda
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
