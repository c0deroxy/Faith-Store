/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `categoryID` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `discoutPercent` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageURL` on the `Product` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryID_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryID",
DROP COLUMN "discoutPercent",
DROP COLUMN "imageURL",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "discountPercentege" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "imageUrls" TEXT[],
ALTER COLUMN "basePrice" SET DATA TYPE DECIMAL(8,2);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
