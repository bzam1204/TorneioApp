'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_estisticas";

import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-2.png'
import image_url from "../../../../public/img/botoes_estatisticas/cesta_dois.png";
import {useRouter, useSearchParams} from "next/navigation";
import {criaEstatistica} from "./Botao_Esquerda_A";

export default function Botao_Esquerda_B() {
    const searchParams = useSearchParams()
    const jogador_id = searchParams.get("id")
    const _time = searchParams.get("time")
    const partida_id = searchParams.get("partida_id")
    const categoria_id = 7 //id da cesta de um no banco.. isso deve melhorar
    const router = useRouter()


    return (
        <Container_Cartao
            onClick={() => {
                criaEstatistica(categoria_id, partida_id, _time, jogador_id, router)
            }}
            style={{borderRadius: '0 20px 20px 0'}}
            imagem_url={imagem_cartao.src}>

            <Nome_Opcao style={{textAlign: "center"}}>cesta de 2 ponto</Nome_Opcao>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
        </Container_Cartao>
    )
}