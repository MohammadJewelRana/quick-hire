"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-[#94A3B8] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* 1️⃣ Logo Section */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logos/logo2.png"
                alt="logo"
                width={140}
                height={40}
                className="h-9 w-auto"
              />
            </div>
            <p className="leading-relaxed text-sm">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* 2️⃣ About + Resources (1-2-1 part) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 xl:col-span-2">
            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-6">About</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#">Companies</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Advice</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#">Help Docs</Link>
                </li>
                <li>
                  <Link href="#">Guide</Link>
                </li>
                <li>
                  <Link href="#">Updates</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 3️⃣ Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Get job notifications
            </h3>

            <p className="mb-6 text-sm">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            {/* Responsive Input Fix */}
            <div className="flex flex-col xl:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 outline-none rounded-md"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E293B] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-center md:text-left">
            2021 © QuickHire. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              FaFacebookF,
              FaInstagram,
              FaDribbble,
              FaLinkedinIn,
              FaTwitter,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-[#1E293B] flex items-center justify-center rounded-full text-[#94A3B8] hover:bg-indigo-600 hover:text-white transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
