import express from "express";
import { getUsers, getUserById } from "../controllers/userController";
import authenticate from "../middleware/authMiddleware"; // ✅ Ensure this is correct

const router = express.Router();

router.get("/", authenticate, getUsers); // ✅ Fetch all users
router.get("/:id", authenticate, getUserById); // ✅ Fetch user by ID

export default router;
