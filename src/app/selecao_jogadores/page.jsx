// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';


import '../controladora/estilo/style.css'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";

import {Container_Jogadores, Container_Principal, Painel_Interacao} from './estilo/estilo_homepage'
import Jogador_Esquerda_A from "./card_jogadores/Jogador_Esquerda_A";


export default function page() {
    const router = useRouter()
    const event_id = 1
    return <>
        <Container_Principal className="layer_jogadores_select">

            <Container_Jogadores>
                <Jogador_Esquerda_A></Jogador_Esquerda_A>
                <Jogador_Esquerda_A></Jogador_Esquerda_A>
                <Jogador_Esquerda_A></Jogador_Esquerda_A>

            </Container_Jogadores>
            <Painel_Interacao>


            </Painel_Interacao>
            <Container_Jogadores>
                <Jogador_Esquerda_A></Jogador_Esquerda_A>
                <Jogador_Esquerda_A></Jogador_Esquerda_A>
                <Jogador_Esquerda_A></Jogador_Esquerda_A>

            </Container_Jogadores>
        </Container_Principal>
    </>
};

