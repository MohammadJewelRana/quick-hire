import toast from "react-hot-toast";
import {
  useCreateJobMutation,
  useGetAllJobsQuery,
} from "../services/job/job.api";

// Create Job
export const useCreateJob = () => {
  const [createJob, { isLoading, error }] = useCreateJobMutation();

  const create = async (data: any) => {
    try {
      await createJob(data).unwrap();
      toast.success("Job created successfully!");
    } catch (err: any) {
      toast.error("Failed to create job!");
      console.error(err);
    }
  };

  return { create, isLoading, error };
};

// Get All Jobs
export const useGetAllJobs = () => {
  const { data, error, isLoading } = useGetAllJobsQuery(undefined);

  let jobs: any[] = [];

  if (data?.success) {
    jobs = data.data;
  }

  if (error) {
    toast.error("Failed to fetch jobs!");
  }

  return {
    jobs,
    isLoading,
    isError: !!error,
  };
};
