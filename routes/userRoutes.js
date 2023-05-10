import express from "express";
import {
  addtoPlaylist,
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removefromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePic,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updateprofilepic").put(isAuthenticated, updateProfilePic);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated, addtoPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated, removefromPlaylist);
export default router;
