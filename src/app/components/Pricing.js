'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      title: "Group Classes (60 min)",
      prices: [
        { frequency: "1 time/week", price: "2,800 ₹" },
        { frequency: "2 times/week", price: "4,000 ₹" },
        { frequency: "Annual package", price: "28,600 ₹" },
      ],
    },
    {
      title: "Cardio/Strength Training (90 min)",
      prices: [
        { frequency: "3 times/week", price: "12,800 ₹" },
        { frequency: "Monthly package", price: "10,000 ₹" },
        { frequency: "Annual package", price: "54,000 ₹" },
      ],
    },
    {
      title: "Children's Rates",
      prices: [
        { frequency: "1 time/week", price: "2,000 ₹" },
        { frequency: "2 times/week", price: "2,800 ₹" },
        { frequency: "3 times/week", price: "3,500 ₹" },
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
        className="grid gap-8 md:grid-cols-3 w-full max-w-6xl px-4"
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
              <h2 className="text-2xl font-bold mb-4 text-center">{plan.title}</h2>
              <ul className="space-y-3">
                {plan.prices.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.frequency}</span>
                    <span className="text-red-500 font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              className="bg-red-500 text-black text-center py-3 font-semibold cursor-pointer hover:bg-red-600 transition"
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
