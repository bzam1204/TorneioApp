'use client'
import {useRouter} from 'next/navigation';
import {React, useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation'
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
import {useRecoilState} from "recoil";
import {pontuacao_time_zero, pontuacao_time_um} from "../../State/partida.metadados";
import socket from "../../config/socket_config";


export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const _time = searchParams.get("time")
    const partida_id = searchParams.get("partida_id")



    return <>

        <Container_Principal id={'main'}>

            <Container_Jogadores>
                <Botao_Esquerda_A/>
                <Botao_Esquerda_B/>
                <Botao_Esquerda_C/>
                <Botao_Esquerda_D/>
                <Botao_Esquerda_E partida_id={partida_id}/>
            </Container_Jogadores>
            <Painel_Jogador/>
            <Container_Jogadores>
                <Botao_Direita_A/>
                <Botao_Direita_B/>
                <Botao_Direita_C/>
                <Botao_Direita_D/>
                <Botao_Direita_E time={_time} jogador_id={id} partida_id={partida_id}/>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

