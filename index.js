import app from "./app.js";
import { connectDB } from "./config/Database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import nodeCron from "node-cron";
import { Stats } from "./models/Stats.js";

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const instance = new Razorpay({
  key_id: process.env.RAZOR_API_KEY,
  key_secret: process.env.RAZOR_SECRET,
});

nodeCron.schedule("0 0 0 5 * *", async () => {
  try {
    await Stats.create({});
  } catch (error) {
    console.log(error);
  }
});

// very important to run it when we run the server 1st time other wise we face lots of problumes

// const temp = async()=>{
//   await Stats.create({});
// }

// temp();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port: ${process.env.PORT}`);
});
