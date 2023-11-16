// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';

import '../controladora/estilo/style.css'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";

import {Container_Principal} from './estilo/estilo_homepage'


export default function page() {
    const router = useRouter()
    const event_id = 1
    return <>
        <Container_Principal className="layer_jogadores_select">
            seleção de jogadores
        </Container_Principal>
    </>
};

