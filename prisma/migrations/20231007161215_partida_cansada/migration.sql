-- CreateTable
CREATE TABLE "PartidaCansada" (
    "id" SERIAL NOT NULL,
    "segundos_restantes" INTEGER NOT NULL,
    "minutos_restantes" INTEGER NOT NULL,
    "tempo24s" INTEGER NOT NULL,
    "pontos_time_a" INTEGER NOT NULL,
    "pontos_time_b" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartidaCansada_pkey" PRIMARY KEY ("id")
);
