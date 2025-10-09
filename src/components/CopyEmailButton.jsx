import { button} from "motion/react-client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CopyEmailButton = () => {
  const [Copied, setCopied] = useState(false);
  const email = "simbikelia@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{y:-5}}
      whileTap={{scale:1.05}}
     
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
      
      {Copied ? (
        <motion.p className="flex items-center justify-center gap-2"
        key={"copied"}
        initial={{opacity:0, y:-10}}
        animate={{opacity:1, y:0}}
        exit = {{opacity:0, y:-10}}
        transition={{duration:0.1, ease:"easeInOut"}}
        >
          <img
            src="public/icons/copy-done.svg"
            className="w-5"
            alt="copy icon"
          />
  copied!
        </motion.p>
      ) : (
        <motion.p className="flex items-center justify-center gap-2"
        key={"copy"}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit = {{opacity:0}}
        transition={{duration:0.1}}
        >
          <img src="public/icons/copy.svg" className="w-5" alt="copy icon" />
          Copy email address
        </motion.p>
      )}
      </AnimatePresence>
  </motion.button>
  )
};

export default CopyEmailButton;
