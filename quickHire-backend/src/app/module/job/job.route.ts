import { Router } from "express";
import { JobController } from "./job.controller";

const router = Router();

router.post("/create-job", JobController.createJob);

export const JobRoutes = router;
