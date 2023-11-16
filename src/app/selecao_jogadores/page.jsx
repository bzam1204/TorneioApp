// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';


import '../controladora/estilo/style.css'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";

import {Container_Jogadores, Container_Principal, Painel_Interacao} from './estilo/estilo_homepage'
import Jogador_Esquerda_A from "./card_jogadores/Jogador_Esquerda_A";

const dado_mockado = {
    id: 1,
    nome: "antonino praxedes",
    numero_camisa: 45,
    imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958'
}

export default function page() {
    const router = useRouter()
    const event_id = 1
    return <>
        <Container_Principal className="layer_jogadores_select">

            <Container_Jogadores>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>

            </Container_Jogadores>
            <Painel_Interacao>


            </Painel_Interacao>
            <Container_Jogadores>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>
                <Jogador_Esquerda_A dados_jogador={dado_mockado}></Jogador_Esquerda_A>

            </Container_Jogadores>
        </Container_Principal>
    </>
};

