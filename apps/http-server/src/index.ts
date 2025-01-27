import express from "express";
import appRouter from "./routes/index";
const app = express();

app.use("/api/v1", appRouter);

app.listen(3002);