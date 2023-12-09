'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_opcao";

import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-5.png'
import {useRouter, useSearchParams} from "next/navigation";
import {useRecoilState} from "recoil";
import {metadados_partida} from "../../../State/partida.metadados";

export default function Botao_Esquerda_E() {
    const search_params = useSearchParams()
    const partida_id = parseInt(search_params.get('partida_id'))
    const router = useRouter()

    return (
        <Container_Cartao onClick={function () {
            setTimeout(router.push(`/tela-controlador-partida?id=${partida_id}`), 100)
        }} style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src}>
            <Nome_Opcao style={{textAlign: "center"}}>voltar</Nome_Opcao>
            <Opcao_Icone>()</Opcao_Icone>
        </Container_Cartao>
    )
}