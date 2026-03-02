import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-wide"> Quick Hire  </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-400">
              Find jobs
            </Link>
      
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/sell"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold"
            >
        Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
