import type {NextApiRequest, NextApiResponse} from "next";

import prisma from "../../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const time_id = req.query.id;

    const found_time = await prisma.times.findUnique({
        where: {
            id: Number(time_id)
        }
    });

    return res.json(found_time);
}
