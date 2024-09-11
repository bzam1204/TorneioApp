"use client";
import {
    Container_Cartao,
    Numero_Camisa,
    Nome_Jogador,
    Imagem_Jogador,
} from "../estilo/cartao_jogador";
import IMG_L_CINCO from "../../../../public/img/botoes_jogador/esquerda-5.png";
import IMG_L_QUATRO from "../../../../public/img/botoes_jogador/esquerda-4.png";
import IMG_L_TRES from "../../../../public/img/botoes_jogador/esquerda-3.png";
import IMG_L_DOIS from "../../../../public/img/botoes_jogador/esquerda-2.png";
import IMG_L_UM from "../../../../public/img/botoes_jogador/esquerda-1.png";
import IMG_R_CINCO from "../../../../public/img/botoes_jogador/direita-5.png";
import IMG_R_QUATRO from "../../../../public/img/botoes_jogador/direita-4.png";
import IMG_R_TRES from "../../../../public/img/botoes_jogador/direita-3.png";
import IMG_R_DOIS from "../../../../public/img/botoes_jogador/direita-2.png";
import IMG_R_UM from "../../../../public/img/botoes_jogador/direita-1.png";
import { useSearchParams } from "next/navigation";
import { Player } from "../../../lib/definitions";

const imagens = [
    [IMG_L_UM, IMG_L_DOIS, IMG_L_TRES, IMG_L_QUATRO, IMG_L_CINCO],
    [IMG_R_UM, IMG_R_DOIS, IMG_R_TRES, IMG_R_QUATRO, IMG_R_CINCO],
];

interface JogadorProps {
    playerData: Player;
    index: number;
    time: number;
    onClick?: any;
    router?: any;
}

export default function Jogador({
    playerData,
    index,
    time,
    onClick,
    router,
}: JogadorProps) {
    const search = useSearchParams();
    const partida_id = search.get("id");

    if (!playerData) return null;

    return (
        <Container_Cartao
            // onClick={() => onClick(router, playerData, time, partida_id)}
            onClick={onClick}
            style={{ borderRadius: "0 20px 20px 0" }}
            imagem_url={imagens[time][index].src}
            className="jogador_esquerda_a"
        >
            {time === 0 ? (
                <>
                    <div
                        style={{
                            display: "flex",
                            alignSelf: "stretch",
                            alignItems: "center",
                        }}
                    >
                        <Imagem_Jogador
                            style={{
                                backgroundImage: `url(${playerData.imageUrl})`,
                            }}
                        ></Imagem_Jogador>
                        <Nome_Jogador>
                            <pre>{playerData.name.replace(" ", "\n")}</pre>
                        </Nome_Jogador>
                    </div>
                    <Numero_Camisa>{playerData.shirtNumber}</Numero_Camisa>
                </>
            ) : (
                <>
                    <div
                        style={{
                            display: "flex",
                            alignSelf: "stretch",
                            alignItems: "center",
                        }}
                    >
                        <Numero_Camisa>
                            {playerData.shirtNumber}
                        </Numero_Camisa>
                        <Nome_Jogador>
                            <pre>{playerData.name.replace(" ", "\n")}</pre>
                        </Nome_Jogador>
                        <Imagem_Jogador
                            style={{
                                backgroundImage: `url(${playerData.imageUrl})`,
                            }}
                        ></Imagem_Jogador>
                    </div>
                </>
            )}
        </Container_Cartao>
    );
}
