import { NextFunction, Request, Response } from "express";
import { JobServices } from "./job.service";

const createJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await JobServices.createJobIntoDB(payload);
    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const JobController = {
  createJob,
};
