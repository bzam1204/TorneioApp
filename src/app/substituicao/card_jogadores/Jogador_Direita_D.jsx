'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador";
import imagem_cartao from '../../../../public/img/botoes_jogador/direita-4.png'
import {adicionarJogadorNoTime} from "./Jogador_Esquerda_A";
import {useRouter, useSearchParams} from "next/navigation";

export default function Jogador_Direita_D({dados_jogador}) {
    let router = useRouter();
    const searchParams = useSearchParams();
    let _time = null;
    const id_jogador_na_partida = searchParams.get("id");
    const _time_from_url = searchParams.get("time");
    const partida_id = parseInt(searchParams.get("partida_id"));
    _time_from_url === "0" ? (_time = false) : (_time = true);
    if (!dados_jogador) return null;

    return (
        <Container_Cartao
            onClick={async () => {
                await adicionarJogadorNoTime(
                    _time,
                    dados_jogador.id,
                    partida_id,
                    router,
                    id_jogador_na_partida
                );
            }}
            style={{borderRadius: '20px 0 0 20px'}}
            imagem_url={imagem_cartao.src}
            className="jogador_esquerda_a"
        >

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