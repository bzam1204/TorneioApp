'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador_esquerda";
import cartao_esquerda_a from '../../../../public/img/botoes_jogador/esquerda-1.png'
import Image from "next/image";

export default function Jogador_Esquerda_A({dados_jogador}) {


    return (<Container_Cartao imagem_url={cartao_esquerda_a.src} className="jogador_esquerda_a">
        <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagem_url})`}}></Imagem_Jogador>
        <Nome_Jogador>
            <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
        </Nome_Jogador>
        <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
    </Container_Cartao>)
}