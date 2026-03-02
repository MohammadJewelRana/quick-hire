import { Server } from "http";
import app from "./app";
import config from "./config";
import mongoose from "mongoose";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("✅ MongoDB connected successfully");

    //here config.port comes from index.js file
    server = app.listen(config.port, () => {
      console.log(`The feedback app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();
