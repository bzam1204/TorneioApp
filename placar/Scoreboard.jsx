"use client";
import * as React from "react";
import { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const Scoreboard = styled("main")`
  align-items: center;
  background-color: white !important;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0;
  max-height: 100vh;
  max-width: 100vw;
  padding: 0;
  width: 100vw;
`;

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
const NomeTime = styled("p")`
  text-align: Center;
  font-family: "Orbitron";
  outline: 0px solid transparent;
  margin: 0;
  border: none;
`;

const Score = styled("p")`
  text-align: Center;
  font-family: "Orbitron";
  outline: 0px solid transparent;
  border: none;
  font-size: 6vw;
  margin: 0;
`;

const Faltas = styled("div")`
  text-align: Center;
  font-family: "Orbitron";
  outline: 0px solid transparent;
  border: none;
  font-size: 6vw;
  margin: 0;
`;
const Periodo = styled("p")`
  text-align: Center;
  font-family: "Orbitron";
  outline: 0px solid transparent;
  border: none;
  font-size: 6vw;
  margin: 0;
`;
const Temporizador = styled("p")`
  text-align: Center;
  font-family: "Orbitron";
  outline: 0px solid transparent;
  border: none;
  font-size: 6vw;
  margin: 0;
`;

const Label = styled("p")`
  font-family: "Orbitron";
  text-align: Center;
  outline: 0px solid transparent;
  border: none;
  font-size: 1vw;
  margin: 0;
`;

export default function ScoreBoard(dados) {
  const [getPlacar, setPlacar] = useRecoilState(placar);
  useEffect(function () {
    console.log(getPlacar)
  }, [getPlacar]);


  const [placarSelecionado, setPlacarSelecionado] = React.useState("");

  return (
    <Scoreboard>
      <Container style={{ flexDirection: "column", gap: 0 }}>
        <Container
          style={{ margin: 0, width: "100%", justifyContent: "space-around" }}
        >
          <NomeTime>{dados.nomeTeamA}</NomeTime>{" "}
          <NomeTime>{dados.nomeTeamB}</NomeTime>{" "}
        </Container>
        <Container style={{ margin: 0 }}>
          <Score>{dados.scoreTeamA}</Score>
          <Score>{dados.scoreTeamB}</Score>
        </Container>
        <Container style={{ margin: 0, gap: 0, flexDirection: "column" }}>
          <Label style={{ margin: 0 }}>Posse de Bola</Label>
          <Label style={{ margin: 0, fontSize: "3vw" }}>{dados.seg24}</Label>
        </Container>
      </Container>
      <Container>
        <Faltas style={{ flexDirection: "column" }}>
          <Label>Faltas</Label>
          {dados.faltasTeamA}
        </Faltas>
        <Periodo style={{ flexDirection: "column" }}>
          <Label>Período</Label>
          {dados.periodo}
        </Periodo>
        <Faltas style={{ flexDirection: "column" }}>
          <Label>Faltas</Label>
          {dados.faltasTeamB}
        </Faltas>
      </Container>
      <Container>
        <Temporizador style={{ flexDirection: "column" }}>
          {dados.tempo}
        </Temporizador>
      </Container>
    </Scoreboard>
  );
}
