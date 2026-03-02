"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo.png"
                alt="QuickHire Logo"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
              <Link href="#" className="hover:text-indigo-600 transition">
                Find Jobs
              </Link>
              <Link href="#" className="hover:text-indigo-600 transition">
                Browse Companies
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-indigo-600 font-medium">
              Login
            </Link>

            <span className="text-gray-300">|</span>

            <Link
              href="#"
              className="bg-indigo-600 text-white px-5 py-2 rounded-sm hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="px-6 space-y-4">
          <Link href="#" className="block text-gray-700">
            Find Jobs
          </Link>
          <Link href="#" className="block text-gray-700">
            Browse Companies
          </Link>

          <hr />

          <Link href="#" className="block text-indigo-600 font-medium">
            Login
          </Link>

          <Link
            href="#"
            className="block bg-indigo-600 text-white text-center py-2 rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}