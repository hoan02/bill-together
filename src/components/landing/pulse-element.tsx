"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the props type for PulseElement
interface PulseElementProps {
  children: React.ReactNode; // Type for children
  scale?: number; // Optional scale prop
  duration?: number; // Optional duration prop
}

// Pulse animation component
const PulseElement: React.FC<PulseElementProps> = ({
  children,
  scale = 1.05,
  duration = 2,
}) => (
  <motion.div
    animate={{
      scale: [1, scale, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default PulseElement;
