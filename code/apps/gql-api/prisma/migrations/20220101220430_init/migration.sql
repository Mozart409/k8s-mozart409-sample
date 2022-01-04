-- CreateTable
CREATE TABLE "Cats" (
    "id" SERIAL NOT NULL,
    "votes" INTEGER NOT NULL,

    CONSTRAINT "Cats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dogs" (
    "id" SERIAL NOT NULL,
    "votes" INTEGER NOT NULL,

    CONSTRAINT "Dogs_pkey" PRIMARY KEY ("id")
);
