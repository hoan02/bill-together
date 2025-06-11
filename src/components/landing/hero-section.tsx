"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElement from "./floating-element";

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter opacity-70"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter opacity-70"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter opacity-50"
        animate={{
          scale: [0.8, 1.1, 0.8],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FloatingElement delay={0.5} amplitude={15}>
            <motion.h1
              className="leading-24 text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Bill Together
            </motion.h1>
          </FloatingElement>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chia sẻ hóa đơn thông minh - Quản lý chi tiêu nhóm một cách
            <motion.span
              className="text-emerald-600 font-semibold"
              animate={{ color: ["#10b981", "#06b6d4", "#10b981"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {" "}
              minh bạch{" "}
            </motion.span>
            và
            <motion.span
              className="text-teal-600 font-semibold"
              animate={{ color: ["#06b6d4", "#8b5cf6", "#06b6d4"] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              {" "}
              tiện lợi
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
                onClick={() => router.push("/dashboard")}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Bắt đầu miễn phí
                </motion.span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
              >
                Xem demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
