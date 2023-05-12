import app from "./app.js";
import { connectDB } from "./config/Database.js";
import cloudinary from "cloudinary"
import Razorpay from "razorpay";

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET
});

export const instance = new Razorpay({
  key_id: process.env.RAZOR_API_KEY,
  key_secret: process.env.RAZOR_SECRET,
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on port: ${process.env.PORT}`)
})