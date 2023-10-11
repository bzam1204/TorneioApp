import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const _data = req.body;

  console.log(_data);

  const updateDados = await prisma.partidaCansada.update({
    where: {
      id: 2
    },
    data: {
      ..._data
    }
  });

  return res.json(updateDados);
}
