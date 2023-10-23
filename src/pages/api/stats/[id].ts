import type {NextApiRequest, NextApiResponse} from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const stats_id = req.query.id;

    const found_stats = await prisma.stats.findUnique({
        where: {
            id: Number(stats_id)
        }
    });

    return res.json(found_stats);
}
