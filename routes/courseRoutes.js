import express from "express";
import {
  addLecture,
  createCourses,
  deleteCourses,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.route("/courses").get(getAllCourses);
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourses);

router
  .route("/course/:id")
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, deleteCourses);

router
  .route("/lecture-delete")
  .delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;
