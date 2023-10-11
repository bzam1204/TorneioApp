"use client";
import React from "react";
import Botoes from "./Botao";
import AutocompleteInput from "./autocomplete_input_players"; 
import { useRecoilState } from "recoil";
import new_player_state from "../../state/new_player";

export default function Page() {
  const [new_player_info, set_new_player_info] =
    useRecoilState(new_player_state);

  const style_centralizar_div = {
    display: "flex",
    flexDirection: "column",
    alignItens: "center",
    justifyContent: "center"
  };

  return (
    <div style={{ ...style_centralizar_div, width: "100vw", height: "100vh" }}>
      <AutocompleteInput></AutocompleteInput>
      <input
      
        onChange={function (event) {
          set_new_player_info((old_info) => {
            return {
              ...old_info,
              name: event.target.value
            };
          });
        }}
        type="text"
        value={new_player_info.name}
        placeholder="Nome do Jogador..."
      />
      {console.log(new_player_info)}
      <Botoes></Botoes>
    </div>
  );
}
