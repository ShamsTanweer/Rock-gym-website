'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      title: "Starting Price",
      isStrikethrough: true,
      prices: [
        { frequency: "1 Month", price: "2,000 ₹" },
        { frequency: "3 Month", price: "4,500 ₹" },
        { frequency: "6 Month", price: "7,500 ₹" },
        { frequency: "12 Month", price: "14,000 ₹" },
      ],
    },
    {
      title: "Special Price",
      isStrikethrough: false,
      prices: [
        { frequency: "1 Month", price: "1,500 ₹" },
        { frequency: "3 Month", price: "3,500 ₹" },
        { frequency: "6 Month", price: "6,000 ₹" },
        { frequency: "12 Month", price:"9,000 ₹" },
      ],
    },
  ];

  return (
    <motion.div
      id="pricing"
      className="bg-black text-white flex flex-col items-center py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center animate-pulse"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Pricing
      </motion.h1>
      <motion.div
        className="grid gap-8 md:grid-cols-2 w-full max-w-6xl px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="p-6">
              <h2 className={`text-2xl font-bold mb-4 text-center ${plan.isStrikethrough ? 'line-through' : ''}`}>
                {plan.title}
              </h2>
              <ul className="space-y-3">
                {plan.prices.map((item, idx) => (
                  <li key={idx} className={`flex justify-between ${plan.isStrikethrough ? 'line-through' : ''}`}>
                    <span>{item.frequency}</span>
                    <span className="text-red-500 font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              className={`bg-red-500 text-black text-center py-3 font-semibold cursor-pointer hover:bg-red-600 transition ${plan.isStrikethrough ? 'line-through' : ''}`}
              whileHover={{ scale: 1.05 }}
            >
              Sign Up
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Pricing;
