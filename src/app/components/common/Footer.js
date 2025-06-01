'use client';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div>

      <footer className="bg-red-500 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-0.5s">
              <h3 className="text-2xl font-bold text-black">About</h3>
              <p className="text-lg text-black">
                We are a dedicated team providing the best services.
                Our mission is to support you in your projects with passion and expertise.
              </p>
            </div>

        
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-black">Contact</h3>
              <ul className="space-y-2 text-black">
                <li>Email: contact@rockgym.com</li>
                <li>Phone: +918227822710</li>
                <li>Address: NIT ,Mahendru, Patna, India 800006</li>
              </ul>
            </div>

         
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
              <h3 className="text-2xl font-bold text-black">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-black hover:text-red-700 transition duration-300">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-red-700 transition duration-300">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/therockgympatna?igsh=MWEyMDFydzl1eWNrYQ%3D%3D&utm_source=qr" className="text-black hover:text-red-700 transition duration-300">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-red-700 transition duration-300">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">&copy; {currentYear} Created by Rock the gym. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
