// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';

import '../controladora/estilo/style.css'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";


const Sorteio = () => {
    const router = useRouter()
    const event_id = 1
    return <>
        <div className="layer_jogadores_select" style={{background: 'black'}}>

            <div onClick={function () {
                fetch('http://localhost:3000/api/partida', {
                    method: 'POST', body: JSON.stringify({eventoId: event_id, inicio: "2023-11-11T15:15:00Z"})
                }).then(res => res.json()).then(data => alert(data))
                router.push(`/controladora`)

            }} className="botao_adicionar">
                INICIAR PARTIDA
            </div>
        </div>
    </>
};

export default Sorteio;