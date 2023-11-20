'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../../opcoes/estilo/botao_opcao";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-3.png'

export default function Jogador_Esquerda_C({dados_jogador}) {


    return (<Container_Cartao  style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src} className="jogador_esquerda_a">
        <div style={{display: "flex", alignSelf: "stretch", alignItems:"center"}}>
            <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagem_url})`}}></Imagem_Jogador>
            <Nome_Jogador>
                <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
            </Nome_Jogador>
        </div>
        <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
    </Container_Cartao>)
}