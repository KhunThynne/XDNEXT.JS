import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
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

// ✅ Middlewares
app.use(logger("dev"));
app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
import graphql from "@/graphql";
// ✅ Routes
app.use(controller);

app.all("/graphql", graphql);

app.get("/", (req, res) => {
  res.render("index", { title: "ยินดีต้อนรับ!" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("❌", err.message);
  res.status(500).json({ error: err.message });
});

export default app;
