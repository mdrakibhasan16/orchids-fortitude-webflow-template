"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/40 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Client Info */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl font-light tracking-widest uppercase mb-4">
            Star Residence
          </h2>
          <p className="text-xs leading-loose tracking-widest uppercase">
            Uttara, Dhaka, Bangladesh <br />
            Contact: +880 1XXX XXXXXX <br />
            Email: info@starresidence.com
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-[10px] tracking-[0.3em] uppercase">
            © {currentYear} Star Residence. All Rights Reserved.
          </p>
          <p className="text-[9px] tracking-[0.2em] uppercase mt-2 opacity-30">
            Designed for Excellence
          </p>
        </div>
        
      </div>
    </footer>
  );
}