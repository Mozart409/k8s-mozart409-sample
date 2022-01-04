-- AlterTable
CREATE SEQUENCE "cats_votes_seq";
ALTER TABLE "Cats" ALTER COLUMN "votes" SET DEFAULT nextval('cats_votes_seq');
ALTER SEQUENCE "cats_votes_seq" OWNED BY "Cats"."votes";

-- AlterTable
CREATE SEQUENCE "dogs_votes_seq";
ALTER TABLE "Dogs" ALTER COLUMN "votes" SET DEFAULT nextval('dogs_votes_seq');
ALTER SEQUENCE "dogs_votes_seq" OWNED BY "Dogs"."votes";
