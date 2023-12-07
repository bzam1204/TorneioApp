'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador";
import imagem_cartao from '../../../../public/img/botoes_jogador/direita-3.png'
import {useRouter, useSearchParams} from "next/navigation";

export default function Jogador_Direita_C({dados_jogador, time}) {
    const router = useRouter()
    const search = useSearchParams()
    const partida_id = parseInt(search.get('id'))

    return (
        <Container_Cartao
            onClick={function () {
                router.push(`/tela-jogador-estatisticas?id=${dados_jogador.id}&time=${time}&partida_id=${partida_id}`)
            }}
            style={{borderRadius: '20px 0 0 20px'}}
            imagem_url={imagem_cartao.src}
            className="jogador_esquerda_a">

            <Numero_Camisa>{dados_jogador.numeroCamisa}</Numero_Camisa>
            <div style={{display: "flex", alignSelf: "stretch", alignItems: "center"}}>
                <Nome_Jogador style={{textAlign: "right"}}>
                    <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
                </Nome_Jogador>
                <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagemUrl})`}}></Imagem_Jogador>
            </div>
        </Container_Cartao>
    )
}