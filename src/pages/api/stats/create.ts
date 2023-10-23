import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const stats_categoria = req.query.categoria;

    const stats_criado = await prisma.stats.create({
        data: {categorie_id: stats_categoria}
    });

    res.status(200).json({
        mensagem: "stats criado com sucesso",
        dados_stats_criado: stats_criado
    });
}
