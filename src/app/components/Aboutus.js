'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 lg:px-48">
      <div className="container mx-auto space-y-16">

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="lg:w-1/2">
            <Image 
              src="/images/fitness1.jpg" 
              alt="Gym facility"
              width={600} 
              height={400} 
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <motion.h2
              className="text-4xl font-extrabold text-red-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Our Gym
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We offer a modern and motivating fitness experience. Whether you're a beginner or advanced, our gym is equipped to meet all your training needs.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Join our community and benefit from the guidance of our qualified trainers to achieve your goals.
            </motion.p>
          </div>
        </motion.div>


        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="lg:w-1/2 space-y-4">
            <motion.h2
              className="text-4xl font-extrabold text-red-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Values and Approach
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With us, every member is a priority. We offer personalized training programs and a friendly atmosphere to help you exceed your limits.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our team is here to guide and motivate you, in a space equipped with high-quality machines.
            </motion.p>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/images/fitness2.jpg" 
              alt="Gym equipment" 
              width={600} 
              height={400} 
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
