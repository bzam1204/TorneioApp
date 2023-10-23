import type {NextApiRequest, NextApiResponse} from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const torneio_id = req.query.id;

    const found_torneio = await prisma.tournaments.findUnique({
        where: {
            id: Number(torneio_id)
        }
    });

    return res.json(found_torneio);
}
