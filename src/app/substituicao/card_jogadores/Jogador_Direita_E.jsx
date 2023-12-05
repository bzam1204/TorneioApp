'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador";
import imagem_cartao from '../../../../public/img/botoes_jogador/direita-5.png'

export default function Jogador_Direita_E({dados_jogador}) {

    return (<Container_Cartao
        style={{borderRadius: '20px 0 0 20px'}} imagem_url={imagem_cartao.src} className="jogador_esquerda_a">
        <Numero_Camisa>{dados_jogador.numeroCamisa}</Numero_Camisa>
        <div style={{display: "flex", alignSelf: "stretch", alignItems: "center"}}>
            <Nome_Jogador style={{textAlign: "right"}}>
                <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
            </Nome_Jogador>
            <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagemUrl})`}}></Imagem_Jogador>
        </div>
    </Container_Cartao>)
}