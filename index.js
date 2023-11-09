const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const playerNames = [
  ];
  playerNames.forEach(async (name) => {
    await CreateNewPlayer(name);
  });
  await findAllPlayers();
}

async function CreateNewPlayer(playerName) {
  await prisma.players.create({
    data: {
      name: playerName
    }
  });
}

async function findAllPlayers() {
  const allPlayers = await prisma.players.findMany();
  return allPlayers;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
