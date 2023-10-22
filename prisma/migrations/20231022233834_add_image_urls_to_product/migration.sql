/*
  Warnings:

  - You are about to drop the column `discountPercentege` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountPercentege",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0;
