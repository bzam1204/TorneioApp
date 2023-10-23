import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const stats_id = req.query.id;

    const stats_deletado = await prisma.stats.delete({
        where: {
            id: Number(stats_id)
        }
    });

    res.status(200).json({
        mensagem: "stats deletado com sucesso",
        dados_stats_criado: stats_deletado
    });

}
