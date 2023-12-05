'use client'
import {useRouter} from 'next/navigation';
import './tela-controlador-partida/estilo/style.css'
import {React} from 'react';
import {useRecoilState} from "recoil";
import {Container_Principal} from './homepage/estilo/estilo_homepage'
import {metadados_partida} from "../State/partida.metadados";


async function criaPartida(setPartidaConfig, router, _metadados_partida) {
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
        //atribui o id da partida ao atributo 'partida_id' do estado de metadados da partida
        partida_id = res.id
        setPartidaConfig(prev => {
            return {
                ...prev,
                partida_id: res.id
            }
        })
        router.push(`/tela-controlador-partida?id=${partida_id}`)

    }).catch(err => {
        console.log(err)
    })

}


export default function Page() {
    const [_metadados_partida, setPartidaConfig] = useRecoilState(metadados_partida)
    const router = useRouter()
    return (
        <Container_Principal className="layer_jogadores_select">

            <div onClick={async function () {
                await criaPartida(setPartidaConfig, router, _metadados_partida)
            }} className="botao_adicionar">
                INICIAR EVENTO
            </div>

            <img src="/img/LOGO_BASQUETE_RANKEADA.png" alt=""/>
        </Container_Principal>
    )
};
