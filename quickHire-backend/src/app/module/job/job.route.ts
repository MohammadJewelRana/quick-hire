import { Router } from "express";
import { JobController } from "./job.controller";

const router = Router();

router.post("/create-job", JobController.createJob);

router.get("/", JobController.getAllJobs);

router.get("/:id", JobController.getSingleJob);

router.delete("/:id", JobController.deleteSingleJob);

export const JobRoutes = router;
