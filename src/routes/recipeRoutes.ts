import express from "express";
import { getRecipes } from "../controllers/recipeController";

const router = express.Router();

router.get("/", getRecipes); // ✅ Should work now

export default router;
