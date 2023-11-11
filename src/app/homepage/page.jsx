// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';

import '../controladora/estilo/style.css'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";


const Sorteio = () => {
    const router = useRouter()

    return <>
        <div className="layer_jogadores_select" style={{background: 'black'}}>

            <div onClick={function () {
                router.push(`/controladora`)

            }} className="botao_adicionar">
                INICIAR PARTIDA
            </div>
        </div>
    </>
};

export default Sorteio;