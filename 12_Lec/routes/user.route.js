import express from "express";
import { home, login, register } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();


router.route("/").get(home);
router.route("/login").post(login);
router.route("/register").post(isAuthenticated, register);



export default router