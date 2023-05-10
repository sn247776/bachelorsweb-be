import express from "express";
import {
  changePassword,
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router(); 
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);
router.route("/updateprofile").put(isAuthenticated, updateProfile);

export default router;
