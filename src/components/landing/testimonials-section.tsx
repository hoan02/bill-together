"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc",
      content:
        "Bill Together đã giúp tôi quản lý chi tiêu nhóm một cách dễ dàng và hiệu quả. Tôi rất hài lòng với dịch vụ này!",
      rating: 5,
    },
    {
      name: "Trần Thị B",
      position: "Nhân viên",
      content:
        "Sử dụng Bill Together thật sự rất tiện lợi. Tôi không còn phải lo lắng về việc chia sẻ hóa đơn nữa.",
      rating: 4,
    },
    {
      name: "Lê Văn C",
      position: "Chủ doanh nghiệp",
      content:
        "Một công cụ tuyệt vời cho việc quản lý chi tiêu. Tôi đã giới thiệu cho nhiều bạn bè và đồng nghiệp.",
      rating: 5,
    },
    {
      name: "Phạm Thị D",
      position: "Freelancer",
      content:
        "Bill Together giúp tôi theo dõi chi tiêu của nhóm một cách dễ dàng. Tôi rất thích giao diện và tính năng của ứng dụng.",
      rating: 4,
    },
  ];

  return (
    <section className="overflow-hidden py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
            Khách hàng nói gì
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Những đánh giá từ khách hàng đã sử dụng Bill Together
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center border-b-4 border-transparent hover:border-green-300 transform transition-transform duration-300 hover:scale-[1.03]"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Rating stars */}
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 mx-0.5" />
                ))}
              </motion.div>

              {/* Name */}
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {testimonial.name}
              </motion.h3>

              {/* Position */}
              <motion.p
                className="text-sm text-gray-500 mb-4 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {testimonial.position}
              </motion.p>

              {/* Content */}
              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                &quot;{testimonial.content}&quot;
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
