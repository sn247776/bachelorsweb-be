import app from "./app.js";
import { connectDB } from "./config/Database.js";

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on port: ${process.env.PORT}`)
})