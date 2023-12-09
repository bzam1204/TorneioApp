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


function mergeJogadoresVaziosComTodosJogadores(todos_jogadores, array_jogadores_vazios) {
    let copy_array_jogadores_vazios = [...array_jogadores_vazios]
    todos_jogadores.map((dados_jogador, index) => {
        copy_array_jogadores_vazios[index] = dados_jogador.jogador
    })
    return copy_array_jogadores_vazios
}


async function buscaJogadoresTime(partidaId, time_zero, time_um, setTimeZero, setTimeUm, setIsLoading) {
    const response_time_zero = await fetch(`http://localhost:3000/api/time/jogador?id=${partidaId}&time=0`);
    const jogadores_time_zero = await response_time_zero.json();
    const response_time_um = await fetch(`http://localhost:3000/api/time/jogador?id=${partidaId}&time=1`);
    const jogadores_time_um = await response_time_um.json();


    const merge_time_zero = mergeJogadoresVaziosComTodosJogadores(jogadores_time_zero, time_zero)
    const merge_time_um = mergeJogadoresVaziosComTodosJogadores(jogadores_time_um, time_um)
    await setTimeZero(merge_time_zero)
    await setTimeUm(merge_time_um)
    await setIsLoading(false)
}

export default function Page() {
    const [time_zero, setTimeZero] = useState([])
    const [time_um, setTimeUm] = useState([])
    const [is_loading, setIsLoading] = useState(true);
    const [_times_montados, setTimesMontados] = useRecoilState(times_montados)
    const router = useRouter()
    const search = useSearchParams()
    const partida_id = parseInt(search.get('id'))


    useEffect(() => {
        buscaJogadoresTime(partida_id, _times_montados.time_zero, _times_montados.time_zero, setTimeZero, setTimeUm, setIsLoading);
    }, []);


    if (is_loading) {
        return <p>Loading...</p>;
    }

    return <>
        <Container_Principal>
            <Container_Jogadores>
                <Jogador_Esquerda_A time={0} dados_jogador={time_zero[0]}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B time={0} dados_jogador={time_zero[1]}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C time={0} dados_jogador={time_zero[2]}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D time={0} dados_jogador={time_zero[3]}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E time={0} dados_jogador={time_zero[4]}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao/>
            <Container_Jogadores>
                <Jogador_Direita_A time={1} dados_jogador={time_um[0]}></Jogador_Direita_A>
                <Jogador_Direita_B time={1} dados_jogador={time_um[1]}></Jogador_Direita_B>
                <Jogador_Direita_C time={1} dados_jogador={time_um[2]}></Jogador_Direita_C>
                <Jogador_Direita_D time={1} dados_jogador={time_um[3]}></Jogador_Direita_D>
                <Jogador_Direita_E time={1} dados_jogador={time_um[4]}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

