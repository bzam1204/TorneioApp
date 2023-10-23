import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const torneio_id = req.query.id;

    const torneio_deletado = await prisma.tournaments.delete({
        where: {
            id: Number(torneio_id)
        }
    });

    res.status(200).json({
        mensagem: "torneio deletado com sucesso",
        dados_torneio_criado: torneio_deletado
    });

}
