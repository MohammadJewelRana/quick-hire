"use client";

import { useCreateApplication } from "@/app/hooks/application.hook";
import LoadingSpinner from "@/app/loading";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiLink, FiEdit } from "react-icons/fi";

type FormValues = {
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
};

const ApplyForm = ({ jobId }: { jobId: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { apply } = useCreateApplication();

  const onSubmit = async (data: FormValues) => {
    const finalData = { ...data, jobID: jobId };
    const success = await apply(finalData);
    if (success !== false) reset();
  };

  /* ===== Base Styles ===== */
  const wrapperBase =
    "flex items-center rounded-md border bg-white px-4 py-3 transition-all duration-200";

  const inputBase =
    "w-full text-sm bg-transparent outline-none placeholder:text-slate-400";

  const focusStyle =
    "focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500";

  const errorStyle =
    "border-red-400 focus-within:border-red-500 focus-within:ring-red-500";

  return (
    <div className="w-full">

      {/* ===== Title ===== */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-800">
          Apply for this Position
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Fill in your details below to submit your application
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* ===== Name ===== */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name
          </label>

          <div
            className={`${wrapperBase} ${
              errors.name ? errorStyle : `border-slate-200 ${focusStyle}`
            }`}
          >
            <FiUser className="text-slate-400 mr-3 text-lg" />
            <input
              type="text"
              placeholder="Enter your full name"
              className={inputBase}
              {...register("name", { required: "Name is required" })}
            />
          </div>

          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* ===== Email ===== */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>

          <div
            className={`${wrapperBase} ${
              errors.email ? errorStyle : `border-slate-200 ${focusStyle}`
            }`}
          >
            <FiMail className="text-slate-400 mr-3 text-lg" />
            <input
              type="email"
              placeholder="Enter your email"
              className={inputBase}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* ===== Resume Link ===== */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Resume Link
          </label>

          <div
            className={`${wrapperBase} ${
              errors.resumeLink ? errorStyle : `border-slate-200 ${focusStyle}`
            }`}
          >
            <FiLink className="text-slate-400 mr-3 text-lg" />
            <input
              type="url"
              placeholder="https://your-resume-link.com"
              className={inputBase}
              {...register("resumeLink", {
                required: "Resume link is required",
              })}
            />
          </div>

          {errors.resumeLink && (
            <p className="text-red-500 text-xs mt-1">
              {errors.resumeLink.message}
            </p>
          )}
        </div>

        {/* ===== Cover Note ===== */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Cover Note
          </label>

          <div
            className={`rounded-md border bg-white px-4 py-3 transition-all duration-200 ${
              errors.coverNote
                ? errorStyle
                : `border-slate-200 ${focusStyle}`
            }`}
          >
            <div className="flex">
              <FiEdit className="text-slate-400 mr-3 mt-1 text-lg" />
              <textarea
                rows={4}
                placeholder="Write a short cover note..."
                className="w-full text-sm bg-transparent outline-none resize-none placeholder:text-slate-400"
                {...register("coverNote", {
                  required: "Cover note is required",
                })}
              />
            </div>
          </div>

          {errors.coverNote && (
            <p className="text-red-500 text-xs mt-1">
              {errors.coverNote.message}
            </p>
          )}
        </div>

        {/* ===== Submit Button ===== */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium transition-all duration-200 hover:bg-indigo-700 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size="sm" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>

      </form>
    </div>
  );
};

export default ApplyForm;