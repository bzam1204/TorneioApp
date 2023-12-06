// pages/sorteio.js
'use client'
import {useRouter} from 'next/navigation';
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

export async function buscaTodosJogadoresTime(_set, _setIsLoading) {
    await fetch('http://localhost:3000/api/jogador', {
        method: 'GET', headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json()
    }).then(res => {
        _set(divideEmGruposDeDez(res, 10))
        _setIsLoading(false)
    }).catch(err => {
        console.log(err)
    })
}

export default function Page() {
    const [conjunto_10_todos_jogadores, setConjunto10TodosJogadores] = useState([])
    const [pagina_atual, setPaginaAtual] = useState(0)
    const [is_loading, setIsLoading] = useState(true);
    const router = useRouter()


    useEffect(() => {
        buscaTodosJogadoresTime(setConjunto10TodosJogadores, setIsLoading)
    }, [conjunto_10_todos_jogadores]);


    // Render content based on loading state
    if (is_loading) {
        return <p>Loading...</p>;
    }

    return <>


        <Container_Principal>
            <Container_Jogadores>
                <Jogador_Esquerda_A dados_jogador={conjunto_10_todos_jogadores[pagina_atual][0]}></Jogador_Esquerda_A>
                <Jogador_Esquerda_B dados_jogador={conjunto_10_todos_jogadores[pagina_atual][1]}></Jogador_Esquerda_B>
                <Jogador_Esquerda_C dados_jogador={conjunto_10_todos_jogadores[pagina_atual][2]}></Jogador_Esquerda_C>
                <Jogador_Esquerda_D dados_jogador={conjunto_10_todos_jogadores[pagina_atual][3]}></Jogador_Esquerda_D>
                <Jogador_Esquerda_E dados_jogador={conjunto_10_todos_jogadores[pagina_atual][4]}></Jogador_Esquerda_E>
            </Container_Jogadores>
            <Painel_Interacao/>
            <Container_Jogadores>
                <Jogador_Direita_A dados_jogador={conjunto_10_todos_jogadores[pagina_atual][5]}></Jogador_Direita_A>
                <Jogador_Direita_B dados_jogador={conjunto_10_todos_jogadores[pagina_atual][6]}></Jogador_Direita_B>
                <Jogador_Direita_C dados_jogador={conjunto_10_todos_jogadores[pagina_atual][7]}></Jogador_Direita_C>
                <Jogador_Direita_D dados_jogador={conjunto_10_todos_jogadores[pagina_atual][8]}></Jogador_Direita_D>
                <Jogador_Direita_E dados_jogador={conjunto_10_todos_jogadores[pagina_atual][9]}></Jogador_Direita_E>
            </Container_Jogadores>
        </Container_Principal>
    </>
};

