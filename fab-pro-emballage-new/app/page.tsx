'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-brown min-h-screen font-sans">
      <header className="bg-[#d2b48c] text-brown py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Fab Pro Emballage</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#custom" className="hover:underline">Customize</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <motion.section className="text-center py-12 bg-brown text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <h2 className="text-4xl font-bold">Custom Cartoon Emballage</h2>
        <p className="mt-4 max-w-xl mx-auto">We create packaging for all types of products with fun cartoon designs tailored to your brand.</p>
      </motion.section>

      <motion.section id="services" className="py-12 container mx-auto px-4 grid md:grid-cols-3 gap-6"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}>
        {["Food Boxes", "Cosmetic Boxes", "Custom Illustrations"].map((title, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="p-6 shadow rounded-2xl border">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>Professional packaging designed to match your product vibe.</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section id="custom" className="py-12 bg-[#fefcf9] text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold text-brown mb-4">Customize Your Cartoon Box</h2>
        <p className="mb-4">Use WhatsApp or Email to send us your idea. We'll design it for you!</p>
        <a href="https://wa.me/213698122830" className="inline-block px-6 py-3 bg-[#d2b48c] text-white rounded-full shadow hover:bg-white hover:text-brown transition">Chat Now</a>
      </motion.section>

      <motion.section id="gallery" className="py-12 bg-white text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-semibold text-brown mb-6">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {["/img/bright_boxes.jpg", "/img/chahd_box.jpg"].map((src, i) => (
            <motion.img key={i} src={src} alt="" className="rounded-2xl shadow-md w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} />
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="py-12 bg-[#d2b48c] text-brown text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">📞 0698 12 28 30</p>
        <p className="mb-2">📧 etkmechentel@gmail.com</p>
        <p>📍 H34R+QRJ Bougara, Bougara, Algeria</p>
      </motion.section>

      <footer className="text-center text-sm text-gray-600 py-4">
        &copy; {new Date().getFullYear()} Fab Pro Emballage — All Rights Reserved
      </footer>
    </div>
  );
}