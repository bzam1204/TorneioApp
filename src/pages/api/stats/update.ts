import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const _data = req.body;

    const stats_atualizado = await prisma.stats.update({
        where: {
            id: _data.id
        },
        data: {
            ..._data
        }
    });

    res.status(200).json({
        mensagem: "stats atualizado com sucesso",
        dados_stats_criado: stats_atualizado
    });

}
