"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Bước 1: Tạo nhóm",
    description: "Tạo nhóm và mời bạn bè tham gia để bắt đầu chia sẻ hóa đơn.",
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Bước 2: Thêm hóa đơn",
    description:
      "Thêm hóa đơn và phân chia chi phí cho từng thành viên trong nhóm.",
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Bước 3: Theo dõi thanh toán",
    description:
      "Theo dõi ai đã thanh toán và ai còn nợ, giúp quản lý dễ dàng hơn.",
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Bước 4: Nhận thông báo",
    description: "Nhận thông báo khi có thay đổi trong nhóm hoặc hóa đơn.",
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="overflow-hidden py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cách hoạt động
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dễ dàng quản lý chi tiêu nhóm với các bước đơn giản
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-[1.025] border-b-4 border-transparent hover:border-green-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
