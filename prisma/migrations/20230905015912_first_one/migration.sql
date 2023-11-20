-- CreateTable
CREATE TABLE "Tournaments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tournaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players_Teams" (
    "id" SERIAL NOT NULL,
    "player_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Players_Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "team_one_id" INTEGER NOT NULL,
    "team_two_id" INTEGER NOT NULL,
    "team_winner_id" INTEGER,
    "tournament_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "player_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "categorie_id" INTEGER NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOfStats" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoriesOfStats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Players_Teams" ADD CONSTRAINT "Players_Teams_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players_Teams" ADD CONSTRAINT "Players_Teams_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_team_one_id_fkey" FOREIGN KEY ("team_one_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_team_two_id_fkey" FOREIGN KEY ("team_two_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_team_winner_id_fkey" FOREIGN KEY ("team_winner_id") REFERENCES "Teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_categorie_id_fkey" FOREIGN KEY ("categorie_id") REFERENCES "CategoriesOfStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
