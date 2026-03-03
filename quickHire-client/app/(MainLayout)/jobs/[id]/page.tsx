 
 "use client"
import { useGetSingleJob } from "@/app/hooks/job.hook";
import ApplyForm from "./_components/ApplyForm";
import JobDetails from "./_components/JobDetails";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = params.id as string;

  const { job, isLoading, isError } = useGetSingleJob(id);
  const loading = true;
  return (
    <section className="bg-white mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        {isLoading && (
          <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
            <LoadingSpinner size="lg" text="Loading job..." />
          </div>
        )}

        {!isError && job && (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <JobDetails job={job} />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-white py-6 md:sticky md:top-24">
                <ApplyForm jobId={job._id} />
              </div>
            </div>
          </div>
        )}

        {isError && (
          <div className="text-center py-24 text-red-500">Job not found</div>
        )}
      </div>
    </section>
  );
};

export default Page;
