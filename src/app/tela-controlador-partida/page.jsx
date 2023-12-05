'use client'
import {useRouter} from 'next/navigation';
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


export default function Page() {
    const [_times_montados, setTimesMontados] = useRecoilState(times_montados)
    const router = useRouter()
    const event_id = 1

    function buscaTodosJogadoresTime(setTimesMontados) {
        fetch('http://localhost:3000/api/jogador', {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(function () {
        buscaTodosJogadoresTime()
    }, [_times_montados])

    return <>
        <Container_Principal>

            <Container_Jogadores>
                <Jogador_Esquerda_A time={0} dados_jogador={_times_montados.time_a[0]}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B time={0} dados_jogador={_times_montados.time_a[1]}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C time={0} dados_jogador={_times_montados.time_a[2]}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D time={0} dados_jogador={_times_montados.time_a[3]}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E time={0} dados_jogador={_times_montados.time_a[4]}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao/>
            <Container_Jogadores>
                <Jogador_Direita_A time={1} dados_jogador={_times_montados.time_b[0]}></Jogador_Direita_A>
                <Jogador_Direita_B time={1} dados_jogador={_times_montados.time_b[1]}></Jogador_Direita_B>
                <Jogador_Direita_C time={1} dados_jogador={_times_montados.time_b[2]}></Jogador_Direita_C>
                <Jogador_Direita_D time={1} dados_jogador={_times_montados.time_b[3]}></Jogador_Direita_D>
                <Jogador_Direita_E time={1} dados_jogador={_times_montados.time_b[4]}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

