import express from "express";
import {isAuthenticated} from "../middlewares/Auth.js"
import { buySubscription } from "../controllers/paymentController.js";


const router = express.Router();

router.route("/subscribe").get(isAuthenticated,buySubscription)


export default router;
