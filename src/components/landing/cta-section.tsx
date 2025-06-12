"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-teal-500 to-emerald-500 text-white overflow-hidden">
      {/* Animated Background Shape */}
      <motion.div
        className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl opacity-50 z-0 animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sẵn sàng để bắt đầu?
        </motion.h2>

        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tham gia cùng hàng triệu người dùng khác và quản lý chi tiêu nhóm một
          cách dễ dàng.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={"/dashboard"}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              Bắt đầu ngay
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
