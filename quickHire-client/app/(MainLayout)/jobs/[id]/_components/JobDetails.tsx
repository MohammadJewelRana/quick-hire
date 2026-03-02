import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const JobDetails = () => {
  return (
    <div className="space-y-12">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Product Designer
        </h1>

        <p className="text-gray-500 mt-2">
          By Loopcast • Dhaka, Bangladesh
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Posted 1 day ago • Over 50 applicants
        </p>
      </div>

      {/* ================= JOB DESCRIPTION ================= */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Job Description
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We are looking for an experienced product Designer who specializes
          in designing user interfaces for Software as a Service (SaaS) and
          web applications. The ideal candidate will have a proven track
          record of delivering intuitive and user-centered design solutions
          that enhance user satisfaction and drive business success.
        </p>
      </div>

      {/* ================= REQUIRED SKILLS ================= */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Required Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Excellent IT skills, especially with design",
            "Excellent time management and organizational skills",
            "Accuracy and attention to detail",
            "Understanding of latest trends",
            "Exceptional creativity and innovation",
            "Strong communication skills",
          ].map((skill, index) => (
            <div key={index} className="flex items-start gap-3">
              <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
              <p className="text-gray-600 text-sm">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RESPONSIBILITIES + BENEFITS ================= */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Responsibilities */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Responsibilities
          </h2>

          <div className="space-y-4">
            {[
              "Targeted job titles are more effective",
              "Provide overview of your company",
              "Job duties and responsibilities",
              "Recruiting process contribution",
              "Educational qualification statements",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Benefits
          </h2>

          <div className="space-y-4">
            {[
              "Different types of job opportunities",
              "Stable work hours",
              "Remote work potential",
              "Sense of accomplishment",
              "Income and benefits",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= NOTES ================= */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Notes
        </h2>

        <p className="text-gray-600 leading-relaxed text-sm">
          Assist in conducting user research, including interviews, surveys,
          and usability testing to gather insights into user needs and
          behaviors. Collaborate with designers to create wireframes,
          prototypes, and visual designs aligned with project objectives.
        </p>
      </div>

    </div>
  );
};

export default JobDetails;