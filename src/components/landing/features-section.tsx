"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, Users, CreditCard, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FloatingElement from "./floating-element";

// Define the feature type
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

// Features Section Component
const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Chia tiền thông minh",
      description:
        "Tự động tính toán và chia tiền công bằng theo từng món hoặc theo tỷ lệ phần trăm",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Quản lý nhóm dễ dàng",
      description: "Tạo nhóm, mời thành viên và phân quyền một cách đơn giản",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Theo dõi thanh toán",
      description: "Biết rõ ai đã trả, ai còn nợ và gợi ý thanh toán tối ưu",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive hoàn hảo",
      description: "Sử dụng mượt mà trên mọi thiết bị từ mobile đến desktop",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="overflow-hidden py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Tính năng nổi bật
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Những tính năng mạnh mẽ giúp bạn quản lý chi tiêu nhóm hiệu quả
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 transform border-0 bg-gradient-to-br from-white to-gray-50/30 overflow-hidden relative">
                <FloatingElement delay={index * 0.2} amplitude={10}>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                </FloatingElement>

                <CardContent className="p-6 relative z-10">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-3 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-center leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
