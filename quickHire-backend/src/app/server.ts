import { Server } from "http";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    server = app.listen(5000, () => {
      console.log(`The quick hire app listening on port  5000`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();
