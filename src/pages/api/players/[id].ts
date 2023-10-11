import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const player_id = req.query.id;

  const found_player = await prisma.players.findUnique({
    where: {
      id: Number(player_id)
    }
  });

  return res.json(found_player);
}
