"use client";
import React, {useState, useEffect} from "react";
import {Container_Cartao_Jogador_Time_A, Container_Cartao_Jogador_Time_B} from "./estilo/estilo_cartao_jogador";
import colors from "../../js/colors";

export default function Cartao_Jogador({dados_jogador, index, time}) {

    function retornaCorDoCartao() {
        let cor = 'não foi atribuido'

        if (time === 'time_a') {
            if (index === 0) cor = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul
            if (index === 1) cor = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde
            if (index === 2) cor = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho
            if (index === 3) cor = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja
            if (index === 4) cor = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza
        }
        if (time === 'time_b') {
            if (index === 0) cor = colors.cores_fundo_botoes_laterais.lado_direito.azul
            if (index === 1) cor = colors.cores_fundo_botoes_laterais.lado_direito.verde
            if (index === 2) cor = colors.cores_fundo_botoes_laterais.lado_direito.vermelho
            if (index === 3) cor = colors.cores_fundo_botoes_laterais.lado_direito.laranja
            if (index === 4) cor = colors.cores_fundo_botoes_laterais.lado_direito.amarelo
        }
        return cor
    }

    return (<>
        {time === 'time_a' ? <Container_Cartao_Jogador_Time_A
            background_color={retornaCorDoCartao()}>
            dica de cor
            foto
            nome
            número camisa
        </Container_Cartao_Jogador_Time_A> : null}
        {time === 'time_b' ? <Container_Cartao_Jogador_Time_B
            background_color={retornaCorDoCartao()}></Container_Cartao_Jogador_Time_B> : null}
    </>)
}