// pages/sorteio.js
'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container_Jogadores, Container_Principal } from './estilo/estilo_homepage'

import Painel_Interacao from "./Painel_Interacao/Painel_Interacao";
import { useAdicionarJogadorNoTime } from '../../lib/actions';
import { Player } from '../../lib/definitions';
import Jogador from '../tela-controlador-partida/cartao_jogadores/Jogador';
import axiosInstance from '../../../axios.config';

//busca todos os jogadores cadastrados
//divide os jogadores em grupos de 10 jogadores
//hidrata os cartoes de jogadores com os dados do primeiro array

function divideEmGruposDeDez<T>(_array: T[], _tamanhoGrupo: number): T[][] {
    const grupos: T[][] = [];
    for (let i = 0; i < _array.length; i += _tamanhoGrupo) {
        grupos.push(_array.slice(i, i + _tamanhoGrupo));
    }
    return grupos;
}

export async function buscaTodosJogadoresTime(_set, _setIsLoading, partida_id, time) {
    time == "1" ? time = 'false' : time = 'true'
    const jogadores_time = await axiosInstance.get(`/match/${partida_id}/team/${time}/players`).then((res) => { return res.data });
    const todos_jogadores: Player[] = await axiosInstance.get('/players').then((res) => { return res.data });

    //filtrando os jogadores que já estão no time
    await Promise.all(jogadores_time.map(({ player }, index) => {
        todos_jogadores.map((jogador, index) => {
            if (player.id === jogador.id) {
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
    const adicionaJogadorNoTime = useAdicionarJogadorNoTime();
    const searchParams = useSearchParams()
    const [conjunto_10_todos_jogadores, setConjunto10TodosJogadores] = useState<[Player[]] | []>([])
    const [pagina_atual, setPaginaAtual] = useState(0)
    const [is_loading, setIsLoading] = useState(true);
    const router = useRouter()
    const partida_id = searchParams.get("partida_id")
    const id_jogador_na_partida = searchParams.get("id");
    const time = searchParams.get("time")

    function renderLeftPlayers() {
        return conjunto_10_todos_jogadores[pagina_atual].slice(0, 5).map((playerData, i) => (
            <Jogador key={i} time={0} index={i} playerData={playerData} onClick={() => adicionaJogadorNoTime('true', playerData.id, partida_id, id_jogador_na_partida)} />)
        )
    }

    function renderRightPlayers() {
        return conjunto_10_todos_jogadores[pagina_atual].slice(5, 11).map((playerData, i) => (
            <Jogador key={i} time={1} index={i} playerData={playerData} onClick={() => adicionaJogadorNoTime('false', playerData.id, partida_id, id_jogador_na_partida)} />)
        )
    }

    useEffect(() => {
        buscaTodosJogadoresTime(setConjunto10TodosJogadores, setIsLoading, partida_id, time)
    }, []);

    // Render content based on loading state
    if (is_loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container_Principal>
            <Container_Jogadores>
                {renderLeftPlayers()}
            </Container_Jogadores>
            <Painel_Interacao setState={setPaginaAtual} />
            <Container_Jogadores>
                {renderRightPlayers()}
            </Container_Jogadores>
        </Container_Principal>
    );

}