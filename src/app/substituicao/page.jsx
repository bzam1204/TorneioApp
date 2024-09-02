// pages/sorteio.js
'use client'
import {useRouter, useSearchParams} from 'next/navigation';
import {React, useEffect, useState} from 'react';
import {Container_Jogadores, Container_Principal} from './estilo/estilo_homepage'

import Jogador_Esquerda_A from "./card_jogadores/Jogador_Esquerda_A";
import Jogador_Esquerda_B from "./card_jogadores/Jogador_Esquerda_B";
import Jogador_Esquerda_C from "./card_jogadores/Jogador_Esquerda_C";
import Jogador_Esquerda_D from "./card_jogadores/Jogador_Esquerda_D";
import Jogador_Esquerda_E from "./card_jogadores/Jogador_Esquerda_E";
import Jogador_Direita_A from "./card_jogadores/Jogador_Direita_A";
import Jogador_Direita_B from "./card_jogadores/Jogador_Direita_B";
import Jogador_Direita_C from "./card_jogadores/Jogador_Direita_C";
import Jogador_Direita_D from "./card_jogadores/Jogador_Direita_D";
import Jogador_Direita_E from "./card_jogadores/Jogador_Direita_E";

import Painel_Interacao from "./Painel_Interacao/Painel_Interacao";

//busca todos os jogadores cadastrados
//divide os jogadores em grupos de 10 jogadores
//hidrata os cartoes de jogadores com os dados do primeiro array

function divideEmGruposDeDez(_array, _tamanhoGrupo) {
    const grupos = [];
    for (let i = 0; i < _array.length; i += _tamanhoGrupo) {
        grupos.push(_array.slice(i, i + _tamanhoGrupo));
    }
    return grupos;
}

export async function buscaTodosJogadoresTime(_set, _setIsLoading, partida_id, time) {
    const res = await fetch(`http://localhost:5144/match/${partida_id}/team/${time}/players`);
    const jogadores_time = await res.json();
    const response = await fetch('http://localhost:5122/players')
    const todos_jogadores = await response.json()

    //filtrando os jogadores que já estão no time
    await Promise.all(jogadores_time.map((jogador_time, index) => {
        todos_jogadores.map((jogador, index) => {
            if (jogador_time.jogador.id === jogador.id) {
                todos_jogadores.splice(index, 1)
            }
        })
    }))
        .then(() => {
            _set(divideEmGruposDeDez(todos_jogadores, 10))
            console.log(todos_jogadores)
            _setIsLoading(false)
        })

}

export default function Page() {
    const searchParams = useSearchParams()
    const [conjunto_10_todos_jogadores, setConjunto10TodosJogadores] = useState([])
    const [pagina_atual, setPaginaAtual] = useState(0)
    const [is_loading, setIsLoading] = useState(true);
    const router = useRouter()
    const partida_id = searchParams.get("partida_id")
    const time = searchParams.get("time")


    useEffect(() => {
        buscaTodosJogadoresTime(setConjunto10TodosJogadores, setIsLoading, partida_id, time)
    }, []);


    // Render content based on loading state
    if (is_loading) {
        return <p>Loading...</p>;
    }


    return <>


        <Container_Principal>
            <Container_Jogadores>
                <Jogador_Esquerda_A
                    dados_jogador={conjunto_10_todos_jogadores[pagina_atual][0]}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B
                    dados_jogador={conjunto_10_todos_jogadores[pagina_atual][1]}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C
                    dados_jogador={conjunto_10_todos_jogadores[pagina_atual][2]}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D
                    dados_jogador={conjunto_10_todos_jogadores[pagina_atual][3]}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E
                    dados_jogador={conjunto_10_todos_jogadores[pagina_atual][4]}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao setState={setPaginaAtual}/>
            <Container_Jogadores>
                <Jogador_Direita_A dados_jogador={conjunto_10_todos_jogadores[pagina_atual][5]}></Jogador_Direita_A>
                <Jogador_Direita_B dados_jogador={conjunto_10_todos_jogadores[pagina_atual][6]}></Jogador_Direita_B>
                <Jogador_Direita_C dados_jogador={conjunto_10_todos_jogadores[pagina_atual][7]}></Jogador_Direita_C>
                <Jogador_Direita_D dados_jogador={conjunto_10_todos_jogadores[pagina_atual][8]}></Jogador_Direita_D>
                <Jogador_Direita_E dados_jogador={conjunto_10_todos_jogadores[pagina_atual][9]}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>


}