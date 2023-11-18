'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_opcao";
import imagem_cartao from '../../../../public/img/botoes_jogador/direita-3.png'

export default function Botao_Direita_C() {


    return (
        <Container_Cartao style={{borderRadius: '20px 0 0 20px'}} imagem_url={imagem_cartao.src}>
            <Opcao_Icone>()</Opcao_Icone>
            <Nome_Opcao style={{textAlign: "center"}}>OPÇÃO</Nome_Opcao>
        </Container_Cartao>
    )
}