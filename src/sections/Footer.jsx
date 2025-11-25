import React from "react";
import { mySocials } from "../constants";
import {motion} from "motion/react";
import { div } from "motion/react-client";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <section className="flex justify-between items-center gap-3 pb-3 text-sm text-neutral-400 c-space">
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
          {mySocials.map((mySocial, index) => (
            <a
              href={mySocial.href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mySocial.icon}
                className="w-6 h-6 opacity-70 hover:opacity-100 transition"
                alt={mySocial.name}
              />
            </a>
          ))}
        </div>

        <p>&copy; 2025 Kelia. All rights reserved.</p>
      </section>
    </motion.div>
  );
};

export default Footer;
