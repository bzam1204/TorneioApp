"use client";
import React from "react";
import Botoes from "./Botao";
import {useRecoilState} from "recoil";
import new_player_state from "../../../state/new_player";
import AutocompleteInputPlayersForTeams from "./AutocompleteInputPlayersForTeams";

export default function ComboCriarJogador({nome_time}) {
    const [new_player_info, set_new_player_info] =
        useRecoilState(new_player_state);

    const style_centralizar_div = {
        display: "flex",
        flexDirection: "column",
        alignItens: "center",
        justifyContent: "center"
    };

    return (
        <div>
            <AutocompleteInputPlayersForTeams nome_time={nome_time}/>
            <input

                onChange={function (event) {
                    set_new_player_info((old_info) => {
                        return {
                            ...old_info,
                            nome: event.target.value
                        };
                    });
                }}
                type="text"
                value={new_player_info.nome}
                placeholder="Nome do Jogador..."
            />
            <Botoes></Botoes>
        </div>
    );
}
