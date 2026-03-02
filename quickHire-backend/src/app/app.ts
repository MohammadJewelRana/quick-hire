import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import notFound from "./middleware/notFound";
 

const app: Application = express();

//Middlewares
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
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

app.use(notFound);

export default app;
