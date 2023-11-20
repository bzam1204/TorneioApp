'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_opcao";
import imagem_cartao from '../../../../public/img/botoes_jogador/direita-2.png'
import image_url from "../../../../public/img/botoes_estatisticas/block.png";


export default function Botao_Direita_B() {


    return (
        <Container_Cartao style={{borderRadius: '20px 0 0 20px'}} imagem_url={imagem_cartao.src}>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
            <Nome_Opcao image_url={image_url.src} style={{textAlign: "center"}}>toco /bloqueio</Nome_Opcao>
        </Container_Cartao>
    )
}