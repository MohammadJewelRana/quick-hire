"use client";

import { FaBars } from "react-icons/fa";

export default function Header({ setSidebarOpen }: any) {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen((prev: boolean) => !prev)}
      >
        <FaBars size={20} />
      </button>

      <h1 className="font-semibold text-lg">Admin Panel</h1>
    </header>
  );
}