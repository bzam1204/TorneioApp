"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { placar } from "../../state/placar";
import styled from "styled-components";
import ScoreBoard from "./Scoreboard";
import Controller from "./Controller";

const Container = styled("div")`
  align-items: center;
  background-color: #8a8a8a !important;
  display: flex;
  gap: 4vw;
  height: fit-content;
  justify-content: center;
  border-radius: 0.33vw;
  padding: 1vw;
  width: fit-content;
`;

export default function Page() {
  const SCORE_STORAGE_KEY = "placar";

  function salvarScoreNoLocalStorage(dados) {
    localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(dados));
  }

  function carregarScoreLocalStorage() {
    const storedScoreData = localStorage.getItem(SCORE_STORAGE_KEY);
    if (dados) {
      return JSON.parse(dados);
    }
    return null;
  }
  
  const [placarSelecionado, setPlacarSelecionado] = React.useState("");
  const [getPlacar, setPlacar] = useRecoilState(placar);

  useEffect(() => {
    salvarScoreNoLocalStorage(getPlacar)
    // Carrega os dados salvos (se existirem)
    const loadedScoreData = carregarScoreLocalStorage();
    if (loadedScoreData) {
      setPlacar(loadedScoreData);
      alert("loadedScoreData")
    }
  }, []);
  return (
    <>
      <Container style={{ margin: "0 auto" }}>
        <button
          onClick={function () {
            setPlacarSelecionado(true);
          }}
        >
          Placar
        </button>
        <button
          onClick={function () {
            setPlacarSelecionado(false);
          }}
        >
          Controlador
        </button>
      </Container>
      {(function () {
        return placarSelecionado ? (
          <ScoreBoard dados={getPlacar} />
        ) : (
          <Controller />
        );
      })()}
    </>
  );
}
