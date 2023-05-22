import express from "express";
import {
  addtoPlaylist,
  changePassword,
  changeUserRole,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removefromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePic,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js"

const router = express.Router();
router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/me").delete(isAuthenticated, deleteMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updateprofilepic").put(isAuthenticated,singleUpload, updateProfilePic);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated, addtoPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated, removefromPlaylist);

// Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router.route("/admin/user/:id").put(isAuthenticated, authorizeAdmin, changeUserRole).delete(isAuthenticated, authorizeAdmin, deleteUser)
export default router;
