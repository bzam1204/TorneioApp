'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_estisticas";
import imagem_cartao from '../../../../public/img/botoes_jogador/direita-3.png'
import image_url from "../../../../public/img/botoes_estatisticas/roubo.png";

import {criaEstatistica} from "./Botao_Esquerda_A";
import {useRouter, useSearchParams} from "next/navigation";

export default function Botao_Direita_C() {
    const searchParams = useSearchParams()
    const jogador_id = searchParams.get("id")
    const _time = searchParams.get("time")
    const partida_id = searchParams.get("partida_id")
    const categoria_id = 2 //id da cesta de um no banco.. isso deve melhorar
    const router = useRouter()


    return (
        <Container_Cartao
            onClick={() => {
                criaEstatistica(categoria_id, partida_id, _time, jogador_id, router)
            }} style={{borderRadius: '20px 0 0 20px'}} imagem_url={imagem_cartao.src}>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
            <Nome_Opcao style={{textAlign: "center"}}>roubo</Nome_Opcao>
        </Container_Cartao>
    )
}