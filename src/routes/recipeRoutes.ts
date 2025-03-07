import express from "express";
import { getRecipes, getRecipeById } from "../controllers/recipeController";
import authenticate from "../middleware/authMiddleware"; // ✅ Correct import

const router = express.Router();

router.get("/", getRecipes); // ✅ Should work now
router.get("/:id", getRecipeById);

export default router;
