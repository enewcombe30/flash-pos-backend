/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "categoryId",
ADD COLUMN     "category_id" INTEGER NOT NULL;
