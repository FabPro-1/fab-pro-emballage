
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  "/img/bright_boxes.jpg",
  "/img/chahd_box.jpg"
];

export default function Home() {
  return (
    <div className="bg-white text-brown min-h-screen font-sans">
      <header className="bg-lightbrown text-brown py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Fab Pro Emballage</h1>
          <div className="space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Customize</Button>
            <Button variant="ghost">Portfolio</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </div>
      </header>

      <motion.section 
        className="py-12 bg-brown text-white text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold mb-4">Custom Cartoon Emballage</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We design and produce all types of cartoon packaging tailored to your product needs.
        </p>
        <div className="mt-6">
          <Button size="lg" className="bg-lightbrown text-brown hover:bg-white">Customize Yours</Button>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 container mx-auto px-4 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {["All Packaging Types", "Custom Designs", "Bulk Orders"].map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>{
                  title === "All Packaging Types" ? "Food, cosmetic, electronic, and artisan product packaging." :
                  title === "Custom Designs" ? "Send your own design or get custom illustrations." :
                  "High-volume production with fast turnaround."
                }</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
        className="bg-white py-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-brown mb-6">Our Packaging Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {galleryImages.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Packaging ${index + 1}`}
              className="rounded-2xl shadow-md w-full object-cover h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="bg-lightbrown py-12 text-brown text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2 flex justify-center items-center gap-2"><Phone size={18}/> 0698 12 28 30</p>
        <p className="mb-2 flex justify-center items-center gap-2"><Mail size={18}/> etkmechentel@gmail.com</p>
        <p className="flex justify-center items-center gap-2"><MapPin size={18}/> H34R+QRJ Bougara, Bougara, Algeria</p>
      </motion.section>

      <footer className="text-center text-sm text-gray-600 py-4">
        &copy; {new Date().getFullYear()} Fab Pro Emballage — All Rights Reserved
      </footer>
    </div>
  );
}
