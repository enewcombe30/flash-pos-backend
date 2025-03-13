import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        RecipeIngredient: {
          include: {
            ingredient: {
              include: {
                ingredientAllergens: { include: { allergen: true } },
                ingredientDietaryTags: { include: { dietaryTag: true } },
              },
            },
          },
        },
        recipeAllergens: { include: { allergen: true } },
        recipeDietaryTags: { include: { dietaryTag: true } },
      },
    });

    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
