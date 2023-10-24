/*
  Warnings:

  - You are about to drop the column `categorie_id` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `game_id` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the column `player_id` on the `Stats` table. All the data in the column will be lost.
  - You are about to drop the `CategoriesOfStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Games` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Players` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Players_Teams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tournaments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria_id` to the `Stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jogador_id` to the `Stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partida_id` to the `Stats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_team_one_id_fkey";

-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_team_two_id_fkey";

-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_team_winner_id_fkey";

-- DropForeignKey
ALTER TABLE "Games" DROP CONSTRAINT "Games_tournament_id_fkey";

-- DropForeignKey
ALTER TABLE "Players_Teams" DROP CONSTRAINT "Players_Teams_player_id_fkey";

-- DropForeignKey
ALTER TABLE "Players_Teams" DROP CONSTRAINT "Players_Teams_team_id_fkey";

-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_categorie_id_fkey";

-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_game_id_fkey";

-- DropForeignKey
ALTER TABLE "Stats" DROP CONSTRAINT "Stats_player_id_fkey";

-- AlterTable
ALTER TABLE "Stats" DROP COLUMN "categorie_id",
DROP COLUMN "game_id",
DROP COLUMN "name",
DROP COLUMN "player_id",
ADD COLUMN     "categoria_id" INTEGER NOT NULL,
ADD COLUMN     "jogador_id" INTEGER NOT NULL,
ADD COLUMN     "nome" VARCHAR(100) NOT NULL,
ADD COLUMN     "partida_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "CategoriesOfStats";

-- DropTable
DROP TABLE "Games";

-- DropTable
DROP TABLE "Players";

-- DropTable
DROP TABLE "Players_Teams";

-- DropTable
DROP TABLE "Teams";

-- DropTable
DROP TABLE "Tournaments";

-- CreateTable
CREATE TABLE "Torneios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Torneios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogadores" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jogadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Times" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JogadoresTimes" (
    "id" SERIAL NOT NULL,
    "jogador_id" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JogadoresTimes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partidas" (
    "id" SERIAL NOT NULL,
    "time_A_id" INTEGER NOT NULL,
    "time_B_id" INTEGER NOT NULL,
    "time_vencedor_id" INTEGER,
    "torneio_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partidas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriasStats" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoriasStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jogadores_nome_key" ON "Jogadores"("nome");

-- AddForeignKey
ALTER TABLE "JogadoresTimes" ADD CONSTRAINT "JogadoresTimes_jogador_id_fkey" FOREIGN KEY ("jogador_id") REFERENCES "Jogadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JogadoresTimes" ADD CONSTRAINT "JogadoresTimes_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "Times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partidas" ADD CONSTRAINT "Partidas_time_A_id_fkey" FOREIGN KEY ("time_A_id") REFERENCES "Times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partidas" ADD CONSTRAINT "Partidas_time_B_id_fkey" FOREIGN KEY ("time_B_id") REFERENCES "Times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partidas" ADD CONSTRAINT "Partidas_time_vencedor_id_fkey" FOREIGN KEY ("time_vencedor_id") REFERENCES "Times"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partidas" ADD CONSTRAINT "Partidas_torneio_id_fkey" FOREIGN KEY ("torneio_id") REFERENCES "Torneios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_jogador_id_fkey" FOREIGN KEY ("jogador_id") REFERENCES "Jogadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_partida_id_fkey" FOREIGN KEY ("partida_id") REFERENCES "Partidas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "CategoriasStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
