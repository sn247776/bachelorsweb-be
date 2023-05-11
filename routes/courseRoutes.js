import express from "express";
import {
    addLecture,
  createCourses,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

router.route("/courses").get(getAllCourses);
router.route("/createcourse").post(singleUpload, createCourses);
router.route("/course/:id").get(getCourseLectures).post(singleUpload, addLecture);

export default router;
