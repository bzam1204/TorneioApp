'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-2.png'
import {useRouter} from "next/navigation";

export default function Jogador_Esquerda_B({dados_jogador}) {

    const router = useRouter()

    return (<Container_Cartao onClick={function () {
        router.push(`/tela-jogador-estatisticas?id=${dados_jogador.id}`)
    }} style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src} className="jogador_esquerda_b">
        <div style={{display: "flex", alignSelf: "stretch", alignItems:"center"}}>
            <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagem_url})`}}></Imagem_Jogador>
            <Nome_Jogador>
                <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
            </Nome_Jogador>
        </div>
        <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
    </Container_Cartao>)
}