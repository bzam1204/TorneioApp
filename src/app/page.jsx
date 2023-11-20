// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';

import './tela-controlador-partida/estilo/style.css'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";

import {Container_Principal} from './homepage/estilo/estilo_homepage'
import {metadados_partida} from "../State/partida.metadados";


async function criaPartida() {
    let partida_id = null
    await fetch('http://localhost:3000/api/partida', {
        method: 'POST', headers: {
            'Content-Type': 'application/json'

        }, body: JSON.stringify({
            "eventoId": 1, "inicio": null, "fim": null
        })
    }).then(res => {
        return res.json()
    }).then(res => {
        setPartidaConfig(res.id)
    }).catch(err => {
        console.log(err)
    })
}


const page = () => {
    const [_metadados_partida, setPartidaConfig] = useRecoilState(metadados_partida)
    const router = useRouter()
    const event_id = 1
    return <>
        <Container_Principal className="layer_jogadores_select">

            <div onClick={function () {
                criaPartida()
                router.push(`/selecao_jogadores`)
            }} className="botao_adicionar">
                INICIAR EVENTO
            </div>

            <img src="/img/LOGO_BASQUETE_RANKEADA.png" alt=""/>
        </Container_Principal>
    </>
};

export default page;