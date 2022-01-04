/*
  Warnings:

  - You are about to drop the column `votes` on the `Cats` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `Dogs` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Cats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Dogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Dogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cats" DROP COLUMN "votes",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "votesId" TEXT;

-- AlterTable
ALTER TABLE "Dogs" DROP COLUMN "votes",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "votesId" TEXT;

-- CreateTable
CREATE TABLE "Votes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cats" ADD CONSTRAINT "Cats_votesId_fkey" FOREIGN KEY ("votesId") REFERENCES "Votes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dogs" ADD CONSTRAINT "Dogs_votesId_fkey" FOREIGN KEY ("votesId") REFERENCES "Votes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
