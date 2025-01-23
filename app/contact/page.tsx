'use client';

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-10 text-center text-blue-900"
        >
          Connect with ElectroHub
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Our Coordinates</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-4 text-2xl" />
                <p className="text-gray-700">Jl. Zainal Abidin Pagar Alam No. 9-11, Bandar Lampung</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-4 text-2xl" />
                <p className="text-gray-700">(+62) 721 787 456</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-4 text-2xl" />
                <p className="text-gray-700">info@electrohub.com</p>
              </div>
              <div className="flex space-x-4 mt-4">
              <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900 cursor-pointer" />
              <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800 cursor-pointer" />
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}
