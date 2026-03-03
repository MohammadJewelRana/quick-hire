"use client";

import Link from "next/link";
import { FaBriefcase, FaPlus, FaHome } from "react-icons/fa";

export default function Sidebar({ sidebarOpen, setSidebarOpen }: any) {
  return (
    <aside
      className={`bg-white shadow-lg w-64 fixed md:static z-50 h-full transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="p-6 font-bold text-xl border-b">QuickHire Admin</div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          href="/admin"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
        >
          <FaHome /> Dashboard
        </Link>

        <Link
          href="/admin/jobs"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
        >
          <FaBriefcase /> All Jobs
        </Link>

        <Link
          href="/admin/jobs/create"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
        >
          <FaPlus /> Add Job
        </Link>
      </nav>
    </aside>
  );
}