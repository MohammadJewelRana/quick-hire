"use client";

import { useState } from "react";

const ApplyForm = ({ jobId }: { jobId: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(jobId, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        type="file"
        className="w-full border rounded-lg px-4 py-2"
        required
        onChange={(e) =>
          setFormData({ ...formData, resume: e.target.files?.[0] || null })
        }
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Apply Now
      </button>

    </form>
  );
};

export default ApplyForm;