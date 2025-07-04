import "#/configs/dotenv.config";
import env from "@/env";
import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import ejs from "ejs";
import controller from "@/controller";

const app = express();
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(process.cwd(), "views"));
app.set("title", "Thynne");
app.use(logger("dev"));
app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ Routes
app.use(controller);

app.get("/", (req, res) => {
  res.render("index", { title: `${env.NODE_ENV}` });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("❌", err.message);
  res.status(500).json({ error: err.message });
});

export default app;
