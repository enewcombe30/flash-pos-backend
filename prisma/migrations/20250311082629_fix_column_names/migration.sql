/*
  Warnings:

  - You are about to drop the column `metricValue` on the `Ingredient` table. All the data in the column will be lost.
  - Added the required column `metric_value` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "metricValue",
ADD COLUMN     "metric_value" DOUBLE PRECISION NOT NULL;
