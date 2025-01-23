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

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}
