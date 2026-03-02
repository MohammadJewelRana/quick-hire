import { Router } from "express";
import { JobRoutes } from "../module/job/job.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/job",
    route: JobRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
