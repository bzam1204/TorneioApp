import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dados_partida = await prisma.partidaCansada.findFirst()

  return res.json(dados_partida);
}
