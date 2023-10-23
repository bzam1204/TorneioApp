import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const _data = req.body;

    const torneio_atualizado = await prisma.tournaments.update({
        where: {
            id: 2
        },
        data: {
            ..._data
        }
    });

    res.status(200).json({
        mensagem: "torneio atualizado com sucesso",
        dados_torneio_criado: torneio_atualizado
    });

}
