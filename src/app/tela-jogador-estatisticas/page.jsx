'use client'
import {useRouter, useSearchParams} from 'next/navigation';
import {React, useState} from 'react';
import {Container_Jogadores, Container_Principal} from './estilo/estatisticas'

import Botao_Esquerda_A from "./Botoes_Estatisticas/Botao_Esquerda_A";
import Botao_Esquerda_B from "./Botoes_Estatisticas/Botao_Esquerda_B";
import Botao_Esquerda_C from "./Botoes_Estatisticas/Botao_Esquerda_C";
import Botao_Esquerda_D from "./Botoes_Estatisticas/Botao_Esquerda_D";
import Botao_Esquerda_E from "./Botoes_Estatisticas/Botao_Esquerda_E";
import Botao_Direita_A from "./Botoes_Estatisticas/Botao_Direita_A";
import Botao_Direita_B from "./Botoes_Estatisticas/Botao_Direita_B";
import Botao_Direita_C from "./Botoes_Estatisticas/Botao_Direita_C";
import Botao_Direita_D from "./Botoes_Estatisticas/Botao_Direita_D";
import Botao_Direita_E from "./Botoes_Estatisticas/Botao_Direita_E";
import Painel_Jogador from "./Painel_Jogador/Painel_Jogador";


export default function Page({_jogador_id}) {
    const router = useRouter()
    const event_id = 1

    let search = useSearchParams()
    let id = search.get('id')
    console.log('jogador id: ' + id)
    return <>

        <Container_Principal id={'main'}>

            <Container_Jogadores>
                <Botao_Esquerda_A/>
                <Botao_Esquerda_B/>
                <Botao_Esquerda_C/>
                <Botao_Esquerda_D/>
                <Botao_Esquerda_E/>
            </Container_Jogadores>
            <Painel_Jogador/>
            <Container_Jogadores>
                <Botao_Direita_A/>
                <Botao_Direita_B/>
                <Botao_Direita_C/>
                <Botao_Direita_D/>
                <Botao_Direita_E jogador_id={_jogador_id}/>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

