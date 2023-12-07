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
        copy_time_array[index] = jogador.jogador
    })
    return copy_time_array
}


async function buscaJogadoresTime(time, partidaId, timeState) {
    try {
        const response = await fetch(`http://localhost:3000/api/time/jogador?id=${partidaId}&time=${time}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jogadoresTime = await response.json();
        return geraArrayJogadoresDinamicamente(jogadoresTime, timeState);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to be caught by the calling code
    }
}

export default function Page() {
    const [salva_time_a, setTimeA] = useState([])
    const [salva_time_b, setTimeB] = useState([])
    const [is_loading, setIsLoading] = useState(true);
    const router = useRouter()
    const search = useSearchParams()


    const [_times_montados, setTimesMontados] = useRecoilState(times_montados)
    const [_metadados_partida, setMetadadosPartida] = useRecoilState(metadados_partida)

    const partida_id = parseInt(search.get('id'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const jogadoresTimeA = await buscaJogadoresTime(0, partida_id, _times_montados.time_a);
                setTimeA(jogadoresTimeA);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('o primeiro já foi')
            }
        };

        fetchData();
    }, [partida_id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const jogadoresTimeB = await buscaJogadoresTime(1, partida_id, _times_montados.time_b);
                setTimeB(jogadoresTimeB);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [partida_id]);

    if (is_loading) {
        return <p>Loading...</p>;
    }

    return <>
        <Container_Principal>
            <Container_Jogadores>
                <Jogador_Esquerda_A time={0} dados_jogador={salva_time_a[0]}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B time={0} dados_jogador={salva_time_a[1]}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C time={0} dados_jogador={salva_time_a[2]}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D time={0} dados_jogador={salva_time_a[3]}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E time={0} dados_jogador={salva_time_a[4]}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao/>
            <Container_Jogadores>
                <Jogador_Direita_A time={1} dados_jogador={salva_time_b[0]}></Jogador_Direita_A>
                <Jogador_Direita_B time={1} dados_jogador={salva_time_b[1]}></Jogador_Direita_B>
                <Jogador_Direita_C time={1} dados_jogador={salva_time_b[2]}></Jogador_Direita_C>
                <Jogador_Direita_D time={1} dados_jogador={salva_time_b[3]}></Jogador_Direita_D>
                <Jogador_Direita_E time={1} dados_jogador={salva_time_b[4]}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

