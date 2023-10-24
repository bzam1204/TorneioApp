import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const _data = req.body;

    const time_atualizado = await prisma.times.update({
        where: {
            id: _data.id
        },
        data: {
            ..._data
        }
    });

    res.status(200).json({
        mensagem: "time atualizado com sucesso",
        dados_time_criado: time_atualizado
    });
}
