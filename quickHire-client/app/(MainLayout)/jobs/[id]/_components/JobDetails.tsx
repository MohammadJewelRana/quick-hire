"use client";

import React from "react";
import {
  FiCheckCircle,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";

interface JobProps {
  job: any;
}

const JobDetails = ({ job }: JobProps) => {
  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {job?.title || "Job Title"}
        </h1>

        <div className="flex flex-wrap items-center gap-5 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FiBriefcase className="text-indigo-500" />
            <span>{job?.company || "Company Name"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiMapPin className="text-green-500" />
            <span>{job?.location || "Location"}</span>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-600">
            {job?.category || "General"}
          </span>
        </div>
      </div>

      {/* ================= JOB DESCRIPTION ================= */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Job Description
        </h2>

        <p className="text-gray-600 leading-relaxed text-[15px]">
          {job?.description ||
            "This role involves managing key responsibilities within the organization. The candidate should be proactive, detail-oriented, and capable of working collaboratively."}
        </p>
      </div>

      {/* ================= REQUIRED SKILLS ================= */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Required Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Strong communication skills",
            "Team collaboration ability",
            "Time management skills",
            "Problem-solving mindset",
            "Professional behavior",
            "Attention to detail",
          ].map((skill, index) => (
            <div key={index} className="flex items-start gap-2">
              <FiCheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-600 text-sm">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RESPONSIBILITIES + BENEFITS ================= */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Responsibilities */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Responsibilities
          </h2>

          <div className="space-y-3">
            {[
              "Manage recruitment process",
              "Maintain documentation",
              "Support team collaboration",
              "Ensure policy compliance",
              "Improve workflow efficiency",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <FiCheckCircle className="text-green-500 mt-1" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Benefits
          </h2>

          <div className="space-y-3">
            {[
              "Competitive salary",
              "Flexible working hours",
              "Professional growth opportunities",
              "Supportive team culture",
              "Health benefits",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <FiCheckCircle className="text-green-500 mt-1" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= JOB DETAILS ================= */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Job Details
        </h3>

        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Posted</dt>
            <dd className="font-medium text-gray-900">
              16 Mar, 2026
            </dd>
          </div>

          <div className="flex justify-between">
            <dt className="text-gray-500">Job ID</dt>
            <dd className="font-medium text-gray-900 break-all">
              {job?._id || "—"}
            </dd>
          </div>

          <div className="flex justify-between items-center">
            <dt className="text-gray-500">Status</dt>
            <dd>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Active
              </span>
            </dd>
          </div>
        </dl>
      </div>

      {/* ================= COMPANY ================= */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          About {job?.company}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {job?.company} is a forward-thinking organization committed to
          innovation, quality, and a positive team environment.
        </p>
      </div>
    </div>
  );
};

export default JobDetails;