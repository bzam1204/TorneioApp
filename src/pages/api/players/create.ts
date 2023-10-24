import {NextApiRequest, NextApiResponse} from "next";

const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function verifyNameExists(req, res, nome_jogador) {
    const busca = await prisma.jogadores.findUnique({
        where: {
            nome: nome_jogador.toString()
        }
    });

    if (busca === null) {
        res.status(200).json({nome_exists: false});
    } else {
        res.status(200).json({nome_exists: true});
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {nome_jogador} = req.body;
    let nome_disponivel = false;

    const busca = await prisma.jogadores.findUnique({
        where: {
            nome: nome_jogador.toString()
        }
    });

    if (busca === null) {
        nome_disponivel = true;
    } else {
        nome_disponivel = false;
    }

    console.log(nome_disponivel);

    if (nome_disponivel) {
        const criado_jogador = await prisma.jogadores.create({
            data: {nome: nome_jogador.toUpperCase()}
        });

        res.status(200).json({
            message: "jogador criado com sucesso",
            criado_jogador_data: criado_jogador
        });
    } else {
        res.status(500).json("já existe um jogador com esse nome");
    }
}
