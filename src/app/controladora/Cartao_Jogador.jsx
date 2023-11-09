"use client";
import React, {useState, useEffect} from "react";
import {useRouter} from 'next/navigation';

import {
    Container_Cartao_Jogador_Time_A,
    Container_Cartao_Jogador_Time_B,
    Dica_Cor_Botao,
    Imagem_Jogador,
    Nome_Jogador,
    Numero_Camisa
} from "./estilo/estilo_cartao_jogador";
import colors from "../../js/colors";

export default function Cartao_Jogador({dados_jogador, index, time}) {

    function retornaCorDoCartao() {
        let cor = {fundo: 'Não atribuído', indicador_botao: '', borda: ''}

        if (time === 'time_a') {
            if (index === 0) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 1) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 2) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 3) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 4) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
        }
        if (time === 'time_b') {
            if (index === 0) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.azul.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.azul.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 1) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.verde.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.verde.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 2) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.vermelho.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.vermelho.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 3) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.laranja.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.laranja.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 4) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.amarelo.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.amarelo.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
        }
        return cor
    }

    const router = useRouter()

    return (<>
        {time === 'time_a' ? <Container_Cartao_Jogador_Time_A onClick={function () {
            router.push(`/tela-jogador-partida?id=${dados_jogador.id}`
            )
        }} background_color={retornaCorDoCartao().fundo}>
            <Dica_Cor_Botao borda={retornaCorDoCartao().borda} cor={retornaCorDoCartao().indicador_botao}/>
            <Imagem_Jogador imagem_url={dados_jogador.imagem_url}/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(21.66vw - 48px)',
                alignItems: "center",
                padding: '24px'
            }}>

                <Nome_Jogador>{dados_jogador.nome}</Nome_Jogador>
                <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
            </div>
        </Container_Cartao_Jogador_Time_A> : null}

        {time === 'time_b' ? <Container_Cartao_Jogador_Time_B onClick={function () {
            router.push(`/tela-jogador-partida/${dados_jogador.id}`)
        }} background_color={retornaCorDoCartao().fundo}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(21.66vw - 48px)',
                alignItems: "center",
                padding: '24px'
            }}>

                <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
                <Nome_Jogador>{dados_jogador.nome}</Nome_Jogador>
            </div>
            <Imagem_Jogador imagem_url={dados_jogador.imagem_url}/>
            <Dica_Cor_Botao borda={retornaCorDoCartao().borda} cor={retornaCorDoCartao().indicador_botao}/>
        </Container_Cartao_Jogador_Time_B> : null}
    </>)
}