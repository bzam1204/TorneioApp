import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const todos_os_torneios = await prisma.tournaments.findMany();

  return res.json(todos_os_torneios);
}
