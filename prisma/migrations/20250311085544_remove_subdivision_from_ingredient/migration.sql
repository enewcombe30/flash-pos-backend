/*
  Warnings:

  - You are about to drop the column `sub_division_id` on the `Ingredient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_sub_division_id_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "sub_division_id";
