/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Players` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Players_name_key" ON "Players"("name");
