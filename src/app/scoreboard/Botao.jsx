"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useRecoilState } from "recoil";
import new_player_state from "../../state/new_player";

export default function Botoes() {
  const [new_player_info, set_new_player_info] =
    useRecoilState(new_player_state);

  async function criaJogador(_player_name) {
    let jogador_criado;
    function handleResponse(response) {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON
      return response.json();
    }
    const res = await fetch("/api/players/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player_name: _player_name
      })
    })
      .then(handleResponse) // Call the callback function
      .then((data) => {
        console.log("Data:", data);
        jogador_criado = true;
        // You can perform further processing on the data here
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("O jogador já existe");
        jogador_criado = false;
      });

    return jogador_criado;
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        onClick={() => {
          criaJogador(new_player_info.name.trim());
        }}
      >
        Criar Jogador
      </Button>
    </ButtonGroup>
  );
}
