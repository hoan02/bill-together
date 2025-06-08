"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the props type for FloatingElement
interface FloatingElementProps {
  children: ReactNode; // Type for children
  delay?: number; // Optional delay prop
  amplitude?: number; // Optional amplitude prop
  duration?: number; // Optional duration prop
}

// Floating animation component
const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  amplitude = 20,
  duration = 3,
}) => (
  <motion.div
    animate={{
      y: [0, -amplitude, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default FloatingElement;
