import "dotenv/config";
import express from "express";
import * as AboutRoutes from "./routes/about";

const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(AboutRoutes.router);

export default app;