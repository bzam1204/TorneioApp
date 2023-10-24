import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {nome_time} = req.body;

    const time_criado = await prisma.times.create({
        data: {nome: nome_time.toUpperCase()}
    });

    res.status(200).json({
        mensagem: "time criado com sucesso",
        dados_time_criado: time_criado
    });
}
