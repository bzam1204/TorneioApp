import { NextApiRequest, NextApiResponse } from "next";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function verifyNameExists(req, res, player_name) {
  const search = await prisma.players.findUnique({
    where: {
      name: player_name.toString()
    }
  });

  if (search === null) {
    res.status(200).json({ name_exists: false });
  } else {
    res.status(200).json({ name_exists: true });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { player_name } = req.body;
  let name_available = false;

  const search = await prisma.players.findUnique({
    where: {
      name: player_name.toString()
    }
  });

  if (search === null) {
    name_available = true;
  } else {
    name_available = false;
  }

  console.log(name_available);

  if (name_available) {
    const created_player = await prisma.players.create({
      data: { name: player_name }
    });

    res.status(200).json({
      message: "jogador criado com sucesso",
      created_player_data: created_player
    });
  } else {
    res.status(500).json("já existe um jogador com esse nome");
  }
}
