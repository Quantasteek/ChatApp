import e from "express";
import { login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = e.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.put("/update-profile", protectRoute, updateProfile);

export default router