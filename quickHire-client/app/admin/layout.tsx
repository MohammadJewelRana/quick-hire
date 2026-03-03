"use client";

import Header from "@/app/components/admin/Header";
import Sidebar from "@/app/components/admin/Sidebar";
import { ReactNode, useState } from "react";
 

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}