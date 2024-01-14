import express from "express";
import { register ,login,otp_authentication} from "../controllers/auth.js";
const router = express.Router();
router.post("/login", login)
router.post("/register", register);
router.patch("/otp_authentication/:id", otp_authentication);

export default router