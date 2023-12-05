'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-5.png'

export default function Jogador_Esquerda_E({dados_jogador}) {


    return (<Container_Cartao style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src} className="jogador_esquerda_a">
        <div style={{display: "flex", alignSelf: "stretch", alignItems:"center"}}>
            <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagemUrl})`}}></Imagem_Jogador>
            <Nome_Jogador>
                <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
            </Nome_Jogador>
        </div>
        <Numero_Camisa>{dados_jogador.numeroCamisa}</Numero_Camisa>
    </Container_Cartao>)
}