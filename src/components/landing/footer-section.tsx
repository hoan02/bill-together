"use client";

import React from "react";
import { motion } from "framer-motion";

const FooterSection: React.FC = () => {
  return (
    <motion.footer
      className="overflow-hidden bg-gray-800 text-white py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-center max-sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        © 2025 — Bill Together by{" "}
        <a
          href="https://facebook.com/hoanit02"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold decoration-dotted underline-offset-4 transition hover:underline"
        >
          @hoancute
        </a>
      </motion.p>

      <motion.p
        className="text-center text-2xl mt-2"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {`{◕ ◡ ◕}`}
      </motion.p>
    </motion.footer>
  );
};

export default FooterSection;
