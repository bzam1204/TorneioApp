'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_opcao";

import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-2.png'
import image_url from "../../../../public/img/botoes_estatisticas/cesta_dois.png";

export default function Botao_Esquerda_B() {


    return (
        <Container_Cartao style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src}>
            <Nome_Opcao style={{textAlign: "center"}}>cesta de 2 pontos</Nome_Opcao>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
        </Container_Cartao>
    )
}