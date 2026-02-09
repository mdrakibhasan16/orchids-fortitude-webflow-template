"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-10">
      {/* Absolute Original Style: Logo in Center */}
      <div className="relative group">
        <div className="w-24 h-24 relative flex items-center justify-center">
          {/* The Spinning Border/Logo Container */}
          <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
          
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation Links - Original Layout */}
      <nav className="mt-8">
        <ul className="flex gap-12 text-[10px] tracking-[0.4em] uppercase font-light text-white/80">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/rooms" className="hover:text-white transition">Rooms</Link></li>
          <li><Link href="/about" className="hover:text-white transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}