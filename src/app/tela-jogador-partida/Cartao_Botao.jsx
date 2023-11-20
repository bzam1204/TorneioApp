"use client";
import React, {useState, useEffect} from "react";
import {useRouter} from 'next/navigation';

import {
    Container_Cartao_Botoes_Esquerdo,
    Container_Cartao_Botoes_Direito,
    Dica_Cor_Botao,
    Imagem_Icone_Botao,
    Nome_Estatistica,
} from "./estilo/estilo_cartao_botao";
import colors from "../../js/colors";
import {useRecoilState} from "recoil";
import {times_montados} from "../../state/times_montados";

export default function Cartao_Botao({dados_botao, index, lado, dados_jogador}) {
    const [_times_montados, setTimesMontados] = useRecoilState(times_montados)
    useEffect(() => {

    }, [times_montados])

    function retornaCorDoCartao() {
        let cor = {time: '', fundo: 'Não atribuído', indicador_botao: '', borda: '', dado_mostrado: ''}


        if (lado === 'ESQUERDO') {
            if (index === 0) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.cestas_1

            }
            if (index === 1) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.cestas_2
            }
            if (index === 2) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.cestas_3
            }
            if (index === 3) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.cestas_1
            }
            if (index === 4) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
                cor.time = 'A'
            }
        }
        if (lado === 'DIREITO') {
            if (index === 0) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.azul.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.azul.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita

                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.assistencias

            }
            if (index === 1) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.verde.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.verde.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita

                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.bloqueios

            }
            if (index === 2) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.vermelho.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.vermelho.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita

                cor.time = 'B'
                cor.dado_mostrado = dados_jogador.roubos

            }
            if (index === 3) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.laranja.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.laranja.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita

                cor.time = 'A'
                cor.dado_mostrado = dados_jogador.rebotes

            }
            if (index === 4) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.amarelo.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.amarelo.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita

                cor.time = 'A'


            }
        }
        return cor
    }

    const router = useRouter()

    return (<>
        {lado === 'ESQUERDO' ? <Container_Cartao_Botoes_Esquerdo onClick={function () {
            //router.push('./controladora')

            if (retornaCorDoCartao().time === 'A') {

                setTimesMontados(prev => {
                    let time_a = [...prev.time_a]
                    const newdados = {...dados_jogador, cesta_um: dados_jogador + 1}
                    time_a[index] = newdados
                    return {...prev, time_a: [...time_a]}
                })
            } else if (retornaCorDoCartao().time === 'B') {
            }
        }} background_color={retornaCorDoCartao().fundo}>
            <Dica_Cor_Botao borda={retornaCorDoCartao().borda} cor={retornaCorDoCartao().indicador_botao}/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(30vw - 48px)',
                alignItems: "center",
                padding: '24px'
            }}>

                <Nome_Estatistica>{dados_botao.nome}</Nome_Estatistica>
                <Imagem_Icone_Botao imagem_url={dados_botao.imagem_url}/>
            </div>
            <div style={{
                width: '30px',
                height: '30px',
                display: "flex",
                justifyContent: "flex-start",
                paddingLeft: '.5vw',
                background: '#ccc',
                borderRadius: '500px'
            }}
            >{retornaCorDoCartao().dado_mostrado}
            </div>
        </Container_Cartao_Botoes_Esquerdo> : null}

        {lado === 'DIREITO' ? <Container_Cartao_Botoes_Direito onClick={function () {
            router.push('./controladora')
        }} background_color={retornaCorDoCartao().fundo}>
            <div style={{
                width: '30px',
                height: '30px',
                display: "flex",
                justifyContent: "flex-start",
                paddingLeft: '.5vw',
                background: '#ccc',
                borderRadius: '500px'
            }}
            >{retornaCorDoCartao().dado_mostrado}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(30vw - 48px)',
                alignItems: "center",
                padding: '24px'
            }}>

                <Imagem_Icone_Botao imagem_url={dados_botao.imagem_url}/>
                <Nome_Estatistica style={{textAlign: 'right'}}
                >{dados_botao.nome}</Nome_Estatistica>
            </div>
            <Dica_Cor_Botao borda={retornaCorDoCartao().borda} cor={retornaCorDoCartao().indicador_botao}/>
        </Container_Cartao_Botoes_Direito> : null}
    </>)
}