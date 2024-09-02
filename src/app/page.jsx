'use client'
import {useRouter} from 'next/navigation';
import './tela-controlador-partida/estilo/style.css'
import {React} from 'react';
import {useRecoilState} from "recoil";
import {Container_Principal} from './homepage/estilo/estilo_homepage'
import {metadados_partida} from "../State/partida.metadados";


async function criaPartida(setPartidaConfig, router, _metadados_partida) {
    let partida_id = null
    await fetch('http://localhost:5144/matches/', {
        method: 'POST', 
    }).then(res => {
        return res.json()
    }).then(res => {
        router.push(`/tela-controlador-partida?id=${res.id}`)
    })

        .catch(err => {
            console.log(err)
        })
}


export default function Page() {
    const [_metadados_partida, setPartidaConfig] = useRecoilState(metadados_partida)
    const router = useRouter()
    return (
        <Container_Principal className="layer_jogadores_select">

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                justifyContent: 'flex-start',
                height: '80%',
                alignItems: 'center'
            }}>

                <button onClick={async function () {
                    await criaPartida(setPartidaConfig, router, _metadados_partida)
                }} className="botao_adicionar">
                    INICIAR EVENTO
                </button>
            </div>

            <img src="/img/LOGO_BASQUETE_RANKEADA.png" alt=""/>
        </Container_Principal>
    )
};
