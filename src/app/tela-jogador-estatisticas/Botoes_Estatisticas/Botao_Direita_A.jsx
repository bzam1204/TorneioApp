"use client";
import {
    Container_Cartao,
    Opcao_Icone,
    Nome_Opcao,
} from "../estilo/botao_estisticas";
import imagem_cartao from "../../../../public/img/botoes_jogador/direita-1.png";
import image_url from "../../../../public/img/botoes_estatisticas/assist.png";

import { useRouter, useSearchParams } from "next/navigation";
import { criaEstatistica } from "../../../lib/actions";

export default function Botao_Direita_B() {
    const searchParams = useSearchParams();
    const jogador_id = searchParams.get("id");
    const _time = searchParams.get("time");
    const partida_id = searchParams.get("partida_id");
    const categoria_id = "7a29082c-4640-4d92-8230-965d4629416b"; //id da cesta de um no banco.. isso deve melhorar
    const router = useRouter();

    return (
        <Container_Cartao
            onClick={() => {
                criaEstatistica(
                    categoria_id,
                    partida_id,
                    _time,
                    jogador_id,
                    router
                );
            }}
            style={{ borderRadius: "20px 0 0 20px" }}
            imagem_url={imagem_cartao.src}
        >
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
            <Nome_Opcao style={{ textAlign: "center" }}>assistência</Nome_Opcao>
        </Container_Cartao>
    );
}
