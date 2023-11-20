'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_opcao";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-5.png'
import {useRouter} from "next/navigation";
import image_url from "../../../../public/img/botoes_estatisticas/voltar.png";

export default function Botao_Esquerda_E() {
    const router = useRouter()

    return (
        <Container_Cartao onClick={function () {
            setTimeout(router.push(`/tela-controlador-partida`), 100)
        }} style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src}>
            <Nome_Opcao >voltar</Nome_Opcao>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
        </Container_Cartao>
    )
}