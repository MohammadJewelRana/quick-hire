import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
// app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// base route
app.get("/api", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Quick Hire Backend Server is running ",
  });
});

export default app;
