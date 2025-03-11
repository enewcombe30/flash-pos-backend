/*
  Warnings:

  - You are about to drop the column `divisionId` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `subDivisionId` on the `Ingredient` table. All the data in the column will be lost.
  - Added the required column `division_id` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub_division_id` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_divisionId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_subDivisionId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "divisionId",
DROP COLUMN "subDivisionId",
ADD COLUMN     "division_id" INTEGER NOT NULL,
ADD COLUMN     "sub_division_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_division_id_fkey" FOREIGN KEY ("division_id") REFERENCES "Division"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_sub_division_id_fkey" FOREIGN KEY ("sub_division_id") REFERENCES "SubDivision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
