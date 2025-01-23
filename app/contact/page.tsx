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
  }

  return (
    <div>

    </div>
  );
}
