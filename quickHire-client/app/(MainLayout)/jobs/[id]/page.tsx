"use client";

import { useParams } from "next/navigation";
import { useGetJobByIdQuery } from "@/app/services/job/job.api";
import ApplyForm from "./_components/ApplyForm";
import JobDetails from "./_components/JobDetails";

const page = () => {
  const params = useParams();
  const { data, isLoading } = useGetJobByIdQuery(params.id as string);

  const job = data?.data;
  console.log(job);

  if (isLoading) {
    return <div className="text-center py-24">Loading...</div>;
  }

  if (!job) {
    return <div className="text-center py-24 text-red-500">Job not found</div>;
  }

  return (
<section className="bg-white mt-16">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="flex flex-col md:flex-row gap-10">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <JobDetails job={job} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2">
        <div className="bg-white py-6 md:sticky md:top-24">
          <ApplyForm jobId={job._id} />
        </div>
      </div>

    </div>

  </div>
</section>
  );
};

export default page;
