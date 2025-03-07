"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipeById = exports.getRecipes = void 0;
const recipeService_1 = __importDefault(require("../services/recipeService"));
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipeService_1.default.fetchRecipes();
        res.json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching recipes" });
    }
});
exports.getRecipes = getRecipes;
const getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipeService_1.default.fetchRecipeById(req.params.id);
        res.json(recipe);
    }
    catch (error) {
        res.status(404).json({ message: "Recipe not found" });
    }
});
exports.getRecipeById = getRecipeById;
