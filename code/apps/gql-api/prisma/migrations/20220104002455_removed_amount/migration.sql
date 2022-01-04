/*
  Warnings:

  - You are about to drop the column `amount` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Dogs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "Dogs" DROP COLUMN "amount";
