import express from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import ErrorMiddleware from "./middlewares/Error.js";

// Routes
import courseRoutes from "./routes/courseRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import paumentRoutes from "./routes/paymentRoutes.js"
import otherRoutes from "./routes/otherRoutes.js";

// Make sure config file on the top before using app
config({
    path:"./config/config.env"
})
const app = express();

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cookieParser())
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

app.use("/api/v1", courseRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", paumentRoutes);
app.use("/api/v1", otherRoutes);

export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Server is Working.</h1>`
  )
);  

// Make sure this error handler use in last on the code otherwise its will makes the problumes

app.use(ErrorMiddleware)