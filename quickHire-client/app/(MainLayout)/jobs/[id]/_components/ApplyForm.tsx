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

  const { apply, isLoading } = useCreateApplication();

  const onSubmit = async (data: FormValues) => {
    const finalData = {
      ...data,
      jobID: jobId,
    };

    const success = await apply(finalData);
    if (success !== false) {
      reset();
    }
  };

  const inputBaseStyle =
    "w-full text-sm bg-transparent outline-none placeholder:text-slate-400 px-3";

  const fieldWrapper =
    "flex items-center rounded-sm  border border-s bg-white px-4 py-3 transition-all duration-200 focus-within:ring-2 focus-within:ring-indigo-500";

  return (
    <div className="w-full">
      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Apply for this Position
        </h2>
        <p className="text-sm text-slate-500 pt-4">
          Fill in your details below to submit your application
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Full Name
          </label>
          <div
            className={`${fieldWrapper} ${
              errors.name
                ? "border-red-400 focus-within:ring-red-400"
                : "border-slate-50"
            }`}
          >
            <FiUser className="text-slate-400 mr-3 text-lg" />
            <input
              type="text"
              placeholder="Enter your full name"
              className={inputBaseStyle}
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Email Address
          </label>
          <div
            className={`${fieldWrapper} ${
              errors.email
                ? "border-red-400 focus-within:ring-red-400"
                : "border-slate-200"
            }`}
          >
            <FiMail className="text-slate-400 mr-3 text-lg" />
            <input
              type="email"
              placeholder="Enter your email"
              className={inputBaseStyle}
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
            <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Resume Link */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Resume Link
          </label>
          <div
            className={`${fieldWrapper} ${
              errors.resumeLink
                ? "border-red-400 focus-within:ring-red-400"
                : "border-slate-200"
            }`}
          >
            <FiLink className="text-slate-400 mr-3 text-lg" />
            <input
              type="url"
              placeholder="https://your-resume-link.com"
              className={inputBaseStyle}
              {...register("resumeLink", {
                required: "Resume link is required",
              })}
            />
          </div>
          {errors.resumeLink && (
            <p className="text-red-500 text-xs mt-2">
              {errors.resumeLink.message}
            </p>
          )}
        </div>

        {/* Cover Note */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Cover Note
          </label>
          <div
            className={`rounded-md border  bg-white px-4 py-3 transition-all duration-200 focus-within:ring-2 focus-within:ring-indigo-500 ${
              errors.coverNote
                ? "border-red-400 focus-within:ring-red-400"
                : "border-slate-200"
            }`}
          >
            <div className="flex">
              <FiEdit className="text-slate-400 mr-3 mt-1 text-lg" />
              <textarea
                rows={4}
                placeholder="Write a short cover note..."
                className="w-full text-sm px-3 bg-transparent outline-none resize-none placeholder:text-slate-400"
                {...register("coverNote", {
                  required: "Cover note is required",
                })}
              />
            </div>
          </div>
          {errors.coverNote && (
            <p className="text-red-500 text-xs mt-2">
              {errors.coverNote.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:bg-indigo-700 disabled:opacity-60 flex items-center justify-center gap-2"
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
