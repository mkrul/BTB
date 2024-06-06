import "dotenv/config";
import express from "express";
import path from "path";
import * as AboutRoutes from "./routes/about";
import * as ResultsRoutes from "./routes/results";
import * as UserRoutes from "./routes/user";
import * as DogsRoutes from "./routes/dogs";
import cors from "cors";
import crypto from "crypto";

const app = express();

app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString('base64');
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${res.locals.nonce}';`
  );
  next();
});

app.use(cors());

app.use(AboutRoutes.router);
app.use(DogsRoutes.router);
app.use(ResultsRoutes.router);
app.use(UserRoutes.router);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

export default app;