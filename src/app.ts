import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use("/api", routes);

export default app;
