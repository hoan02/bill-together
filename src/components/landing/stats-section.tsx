"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Shield, Clock } from "lucide-react";
import PulseElement from "./pulse-element";

// Define the stat type
interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

// Stats Section Component
const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      number: "10K+",
      label: "Người dùng",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "50K+",
      label: "Hóa đơn",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      number: "24/7",
      label: "Hỗ trợ",
      icon: <Clock className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px, 25px 25px",
            "50px 50px, 75px 75px",
            "0px 0px, 25px 25px",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              <motion.div
                className="relative"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.1)",
                    "0 0 40px rgba(255,255,255,0.2)",
                    "0 0 20px rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <PulseElement scale={1.1}>
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex justify-center items-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {stat.icon}
                  </motion.div>
                </PulseElement>

                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  // transition={{ delay: index * 0.1 + 0.5 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.number}
                </motion.div>

                <motion.div
                  className="text-lg opacity-90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
