import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const time_id = req.query.id;

    const time_deletado = await prisma.times.delete({
        where: {
            id: Number(time_id)
        }
    });

    res.status(200).json({
        mensagem: "time deletado com sucesso",
        dados_time_criado: time_deletado
    });

}
