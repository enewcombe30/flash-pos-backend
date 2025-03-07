import { Request, Response } from "express";
import recipeService from "../services/recipeService";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await recipeService.fetchRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.fetchRecipeById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.status(404).json({ message: "Recipe not found" });
  }
};
