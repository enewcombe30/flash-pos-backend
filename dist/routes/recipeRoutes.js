"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipeController_1 = require("../controllers/recipeController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware")); // ✅ Correct import
const router = express_1.default.Router();
router.get("/", authMiddleware_1.default, recipeController_1.getRecipes); // ✅ Should work now
router.get("/:id", authMiddleware_1.default, recipeController_1.getRecipeById);
exports.default = router;
