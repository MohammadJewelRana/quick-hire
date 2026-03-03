"use client";

import { useEffect, useState } from "react";
import { Job } from "../types";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  editJob: Job | null;
  onSubmit: (data: Partial<Job>) => void;
}

export default function JobFormModal({
  open,
  setOpen,
  editJob,
  onSubmit,
}: Props) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (editJob) {
      setFormData(editJob);
    }
  }, [editJob]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50">
      <div className="bg-[#111C2D] w-full max-w-lg rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">
          {editJob ? "Edit Job" : "Add Job"}
        </h3>

        {["title", "company", "location", "category"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={(formData as any)[field]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [field]: e.target.value,
              })
            }
            className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        ))}

        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/5 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gray-600 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(formData)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}