// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';


import '../controladora/estilo/style.css'
import {React, useState} from 'react';

import {Container_Jogadores, Container_Principal} from './estilo/estilo_homepage'

import Jogador_Esquerda_A from "./card_jogadores/Jogador_Esquerda_A";
import Jogador_Esquerda_B from "./card_jogadores/Jogador_Esquerda_B";
import Jogador_Esquerda_C from "./card_jogadores/Jogador_Esquerda_C";
import Jogador_Esquerda_D from "./card_jogadores/Jogador_Esquerda_D";
import Jogador_Esquerda_E from "./card_jogadores/Jogador_Esquerda_E";
import Jogador_Direita_A from "./card_jogadores/Jogador_Direita_A";
import Jogador_Direita_B from "./card_jogadores/Jogador_Direita_B";
import Jogador_Direita_C from "./card_jogadores/Jogador_Direita_C";
import Jogador_Direita_D from "./card_jogadores/Jogador_Direita_D";
import Jogador_Direita_E from "./card_jogadores/Jogador_Direita_E";

import Painel_Interacao from "./Painel_Interacao/Painel_Interacao";


const dado_mockado = {
    id: 1,
    nome: "bruno zamorano",
    numero_camisa: 45,
    imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958'
}

export default function page() {
    const router = useRouter()
    const event_id = 1
    return <>
        <Container_Principal>

            <Container_Jogadores>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B dados_jogador={dado_mockado}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C dados_jogador={dado_mockado}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D dados_jogador={dado_mockado}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E dados_jogador={dado_mockado}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao/>
            <Container_Jogadores>
                <Jogador_Direita_A dados_jogador={dado_mockado}></Jogador_Direita_A>
                <Jogador_Direita_B dados_jogador={dado_mockado}></Jogador_Direita_B>
                <Jogador_Direita_C dados_jogador={dado_mockado}></Jogador_Direita_C>
                <Jogador_Direita_D dados_jogador={dado_mockado}></Jogador_Direita_D>
                <Jogador_Direita_E dados_jogador={dado_mockado}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

