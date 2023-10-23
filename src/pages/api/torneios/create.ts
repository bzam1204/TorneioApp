import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {nome_torneio} = req.body;

    const torneio_criado = await prisma.tournaments.create({
        data: {name: nome_torneio}
    });

    res.status(200).json({
        mensagem: "torneio criado com sucesso",
        dados_torneio_criado: torneio_criado
    });
}
