'use client'
import {useRouter, useSearchParams} from 'next/navigation';
import {React, useEffect, useState} from 'react';
import {Container_Jogadores, Container_Principal} from './estilo/estilo_homepage'
import Jogador_Esquerda_A from "./cartao_jogadores/Jogador_Esquerda_A";
import Jogador_Esquerda_B from "./cartao_jogadores/Jogador_Esquerda_B";
import Jogador_Esquerda_C from "./cartao_jogadores/Jogador_Esquerda_C";
import Jogador_Esquerda_D from "./cartao_jogadores/Jogador_Esquerda_D";
import Jogador_Esquerda_E from "./cartao_jogadores/Jogador_Esquerda_E";
import Jogador_Direita_A from "./cartao_jogadores/Jogador_Direita_A";
import Jogador_Direita_B from "./cartao_jogadores/Jogador_Direita_B";
import Jogador_Direita_C from "./cartao_jogadores/Jogador_Direita_C";
import Jogador_Direita_D from "./cartao_jogadores/Jogador_Direita_D";
import Jogador_Direita_E from "./cartao_jogadores/Jogador_Direita_E";
import Painel_Interacao from "./Painel_Interacao/Painel_Interacao";
import {useRecoilState} from "recoil";
import {times_montados} from "../../State/times_montados";
import {metadados_partida} from "../../State/partida.metadados";


function geraArrayJogadoresDinamicamente(_jogadores_registrados, _time_array) {
    let copy_time_array = [..._time_array]
    _jogadores_registrados.map((jogador, index) => {
        copy_time_array[index] = jogador
    })
    return copy_time_array
}


async function buscaJogadoresTime(_time, _partida_id, _time_state, _setTime, _setIsLoading) {
    await fetch(`http://localhost:3000/api/time/jogador?id=${_partida_id}&time=${_time}`, {
        method: 'GET', headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json()
    }).then(jogadores_time => {
        console.log(geraArrayJogadoresDinamicamente(jogadores_time, _time_state))
        // Lide com a resposta da API conforme necessário
        _setTime(geraArrayJogadoresDinamicamente(jogadores_time, _time_state))
        _setIsLoading(false)
    }).catch(err => {
        console.log(err)
    })
}


export default function Page() {
    const router = useRouter()
    const search = useSearchParams()

    const [is_loading, setIsLoading] = useState(true);
    const [time_a, setTimeA] = useState([])
    const [time_b, setTimeB] = useState([])

    const [_times_montados, setTimesMontados] = useRecoilState(times_montados)
    const [_metadados_partida, setMetadadosPartida] = useRecoilState(metadados_partida)

    const partida_id = parseInt(search.get('id'))

    useEffect(() => {
        buscaJogadoresTime(0, partida_id, _times_montados.time_a, setTimeA, setIsLoading)
    }, [time_a])

    useEffect(() => {
        buscaJogadoresTime(1, partida_id, _times_montados.time_b, setTimeB, setIsLoading)
    }, [time_b])


    if (is_loading) {
        return <p>Loading...</p>;
    }
    return <>
        <Container_Principal>

            <Container_Jogadores>
                <Jogador_Esquerda_A time={0} dados_jogador={time_a[0].jogador}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B time={0} dados_jogador={time_a[1].jogador}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C time={0} dados_jogador={time_a[2].jogador}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D time={0} dados_jogador={time_a[3].jogador}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E time={0} dados_jogador={time_a[4].jogador}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao/>
            <Container_Jogadores>
                <Jogador_Direita_A time={1} dados_jogador={time_b[0].jogador}></Jogador_Direita_A>
                <Jogador_Direita_B time={1} dados_jogador={time_b[1].jogador}></Jogador_Direita_B>
                <Jogador_Direita_C time={1} dados_jogador={time_b[2].jogador}></Jogador_Direita_C>
                <Jogador_Direita_D time={1} dados_jogador={time_b[3].jogador}></Jogador_Direita_D>
                <Jogador_Direita_E time={1} dados_jogador={time_b[4].jogador}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

