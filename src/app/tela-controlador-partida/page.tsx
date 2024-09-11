"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Container_Jogadores,
    Container_Principal,
} from "./estilo/estilo_homepage";
import Jogador from "./cartao_jogadores/Jogador";
import Painel_Interacao from "./Painel_Interacao/Painel_Interacao";
import { useRecoilState } from "recoil";
import { times_montados } from "../../State/times_montados";
import { buscaJogadoresTime } from "../../lib/actions";
import { Player } from "../../lib/definitions";

function mergeJogadoresVaziosComTodosJogadores(
    PlayersInMatch: Player[] | [],
    arrayPlayersState: Player[] | []
) {
    console.log("PlayersInMatch", PlayersInMatch);
    console.log("arrayPlayersState", arrayPlayersState);
    let copy_arrayPlayersState = [...arrayPlayersState];
    PlayersInMatch.map((dados_jogador, index) => {
        copy_arrayPlayersState[index] = dados_jogador.player;
    });
    return copy_arrayPlayersState;
}

// async function buscaJogadoresTime(partidaId, time_zero, time_um, setTimeZero, setTimeUm, setIsLoading) {
//     const response_time_zero = await fetch(`http://localhost:5144/match/${partidaId}/team/true/players`);
//     const jogadores_time_zero = await response_time_zero.json();
//     const response_time_um = await fetch(`http://localhost:5144/match/${partidaId}/team/false/players`);
//     const jogadores_time_um = await response_time_um.json();

//     const merge_time_zero = mergeJogadoresVaziosComTodosJogadores(jogadores_time_zero, time_zero)
//     const merge_time_um = mergeJogadoresVaziosComTodosJogadores(jogadores_time_um, time_um)
//     await setTimeZero(merge_time_zero)
//     await setTimeUm(merge_time_um)
//     await setIsLoading(false)
// }

export default function Page() {
    const [_times_montados, setTimesMontados] = useRecoilState(times_montados);
    const [time_zero, setTimeZero] = useState<Player[]>([]);
    const [time_um, setTimeUm] = useState<Player[]>([]);
    const [is_loading, setIsLoading] = useState(true);
    const search = useSearchParams();
    const partida_id = search.get("id");
    const router = useRouter();

    function NavigateToPlayerStats(router, dados_jogador, time, partida_id) {
        router.push(
            `/tela-jogador-estatisticas?${dados_jogador.id ? ('id=' + dados_jogador.id + '&') : ''}time=${time}&partida_id=${partida_id}`
        );
    }

    useEffect(() => {
        buscaJogadoresTime(
            partida_id,
            _times_montados.time_zero,
            _times_montados.time_zero,
            setTimeZero,
            setTimeUm,
            setIsLoading,
            mergeJogadoresVaziosComTodosJogadores
        );
    }, []);

    if (is_loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Container_Principal>
                <Container_Jogadores>
                    {time_zero.map((jogador, i) => {
                        return (
                            <Jogador
                                key={i}
                                time={0}
                                index={i}
                                playerData={jogador}
                                onClick={() => NavigateToPlayerStats(router, jogador, 0, partida_id)}
                                router={router}
                            />
                        );
                    })}
                </Container_Jogadores>
                <Painel_Interacao />
                <div></div>
                <Container_Jogadores>
                    {time_um.map((jogador, i) => {
                        return (
                            <Jogador
                                key={i}
                                time={1}
                                index={i}
                                playerData={jogador}
                                onClick={() => NavigateToPlayerStats(router, jogador, 1, partida_id)}
                                router={router}
                            />
                        );
                    })}
                </Container_Jogadores>
            </Container_Principal>
        </>
    );
}
