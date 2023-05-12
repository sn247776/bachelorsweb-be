import express from "express";
import {config} from "dotenv";
import courseRoutes from "./routes/courseRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import paumentRoutes from "./routes/paymentRoutes.js"
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

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

app.use("/api/v1", courseRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", paumentRoutes);
export default app;


// Make sure this error handler use in last on the code otherwise its will makes the problumes

app.use(ErrorMiddleware)