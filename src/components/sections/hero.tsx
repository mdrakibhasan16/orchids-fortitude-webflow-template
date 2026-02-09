"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40"></div>
      
      {/* Main Title - Original Style */}
      <div className="relative z-10 text-center mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10px] tracking-[0.8em] uppercase mb-6 opacity-70"
        >
          Welcome to Excellence
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl font-extralight tracking-[0.2em] uppercase"
        >
          Star <br />
          <span className="mt-4 block">Residence</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-12 w-[1px] h-24 bg-gradient-to-b from-white to-transparent mx-auto"
        ></motion.div>
      </div>
    </section>
  );
}