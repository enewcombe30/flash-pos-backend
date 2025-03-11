/*
  Warnings:

  - You are about to drop the column `divisionId` on the `SubDivision` table. All the data in the column will be lost.
  - Added the required column `division_id` to the `SubDivision` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubDivision" DROP CONSTRAINT "SubDivision_divisionId_fkey";

-- AlterTable
ALTER TABLE "SubDivision" DROP COLUMN "divisionId",
ADD COLUMN     "division_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SubDivision" ADD CONSTRAINT "SubDivision_division_id_fkey" FOREIGN KEY ("division_id") REFERENCES "Division"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
