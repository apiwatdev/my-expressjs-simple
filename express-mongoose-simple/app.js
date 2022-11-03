// @ts-check
import { configEnv } from "./src/config/index.js";
import express, { json } from "express";
import { dbConnect } from "./src/database/index.js";
import router from "./src/routes.js";

configEnv();

const app = express();
const port = 3000;
app.use(json());
app.use(router);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
