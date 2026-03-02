import { IJob } from "./job.interface";

//create job
const createJobIntoDB = async (payload: IJob) => {
  if (!payload) {
    throw new Error("Job data missing");
  }

  return null;
};

export const JobServices = {
  createJobIntoDB,
};
