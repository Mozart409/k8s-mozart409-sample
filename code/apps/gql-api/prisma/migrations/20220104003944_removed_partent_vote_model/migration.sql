/*
  Warnings:

  - You are about to drop the column `votesId` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `votesId` on the `Dogs` table. All the data in the column will be lost.
  - You are about to drop the `Votes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cats" DROP CONSTRAINT "Cats_votesId_fkey";

-- DropForeignKey
ALTER TABLE "Dogs" DROP CONSTRAINT "Dogs_votesId_fkey";

-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "votesId";

-- AlterTable
ALTER TABLE "Dogs" DROP COLUMN "votesId";

-- DropTable
DROP TABLE "Votes";
