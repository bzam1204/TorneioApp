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

export default function Cartao_Botao({dados_botao, index, lado}) {

    function retornaCorDoCartao() {
        let cor = {fundo: 'Não atribuído', indicador_botao: '', borda: ''}

        if (lado === 'ESQUERDO') {
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
        if (lado === 'DIREITO') {
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
        {lado === 'ESQUERDO' ? <Container_Cartao_Botoes_Esquerdo onClick={function () {
            router.push('./controladora')
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
        </Container_Cartao_Botoes_Esquerdo> : null}

        {lado === 'DIREITO' ? <Container_Cartao_Botoes_Direito onClick={function () {
            router.push('./controladora')
        }} background_color={retornaCorDoCartao().fundo}>
            <div style={{
                width: '30px', height: '30px', display: "flex", justifyContent: "flex-start", paddingLeft: '.5vw',
                background: '#ccc', borderRadius: '500px'
            }}
            >{}//cada um dos botoes será mockado aqui.
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