const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createNewPlayer(playerName) {
  await prisma.players.create({
    data: {
      name: playerName
    }
  });
}

async function updatePlayer(_id, _data) {
  await prisma.players.update({
    where: {
      id: _id
    },
    data: _data
  });
}

async function deletePlayer(_id) {
  await prisma.players.delete({
    where: {
      id: _id
    }
  });
}

async function getAllPlayers() {
  return await prisma.players.findMany();
}

async function getOnePlayer(_id) {
  return await prisma.players.findUnique(_id);
}

export {
  createNewPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
  getOnePlayer
};
