'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_estisticas";

import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-4.png'
import image_url from "../../../../public/img/botoes_estatisticas/faltas.png";

export default function Botao_Esquerda_D() {
    return (
        <Container_Cartao style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src}>
            <Nome_Opcao style={{textAlign: "center"}}>falta</Nome_Opcao>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
        </Container_Cartao>
    )
}