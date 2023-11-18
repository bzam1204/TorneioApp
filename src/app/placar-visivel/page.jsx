"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import localFont from "next/font/local";

import colors from "../../js/colors.js";
import socket from "../../config/socket.js";

const digital_numbers = localFont({
  src: "../../fonts/DigitalNumbers-Regular.ttf"
});

import { useRecoilState, useRecoilValue } from "recoil";
import { placar_state } from "../../state/placar.js";

const Placar = styled.main`
  border-radius: 10px;
  border: 10px solid ${colors.bordas};
  background: ${colors.fundo};
  display: flex;
  width: auto;
  height: calc(100vh - 10px * 2);
  flex-direction: column;
  align-items: flex-start;
`;
const ContainerNomeTime = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

const Nome_Time = styled.div`
  vertical-align: baseline;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Orbitron;
  font-size: 80px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  width: 100%;
  height: 100%;
`;
const ContainerPontuacao = styled.div`
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 402px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Tempo_Partida = styled.p`
  color: #fffd00;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Tempo_24seg = styled.p`
  color: #0057ff;

  font-size: 140px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Pontuacao = styled.p`
  color: #fff;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ContainerTempo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 119px;
  flex: 1 0 0;
  align-self: stretch;
`;

export default function Page() {
  const [dadosDaPartida, setDadosDaPartida] = useState({
    segundos_restantes: 0,
    minutos_restantes: 10,
    tempo24s: 24,
  });

  const [placarPartida, setPlacar] = useRecoilState(placar_state);

  useEffect(() => {
    socket.on("update", ({ currentTime, possessionTime, iRunning }) => {
      setDadosDaPartida({
        minutos_restantes: Math.trunc(currentTime / 60),
        segundos_restantes: Math.trunc(currentTime % 60),
        tempo24s: possessionTime
      })

      console.log(placarPartida)
    })
  }, [dadosDaPartida, placarPartida]);

  return (
    <>
      <Placar>
        <ContainerNomeTime>
          <Nome_Time>Vermelho</Nome_Time>
          <div
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Orbitron",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch"
            }}
          >
            vs
          </div>
          <Nome_Time>Preto</Nome_Time>
        </ContainerNomeTime>

        <ContainerPontuacao>
          <Pontuacao className={digital_numbers.className}>{placarPartida.timeA}</Pontuacao>

          <Pontuacao className={digital_numbers.className}>{placarPartida.timeB}</Pontuacao>
        </ContainerPontuacao>

        <ContainerTempo>
          <Tempo_24seg className={digital_numbers.className}>
            {`${dadosDaPartida.tempo24s.toString().padStart(2, "0")}`}
          </Tempo_24seg>
          <Tempo_Partida className={digital_numbers.className}>
            {`${dadosDaPartida.minutos_restantes
              .toString()
              .padStart(2, "0")}:${dadosDaPartida.segundos_restantes
                .toString()
                .padStart(2, "0")}`}{" "}
          </Tempo_Partida>
          <Tempo_24seg className={digital_numbers.className}>
            {`${dadosDaPartida.tempo24s.toString().padStart(2, "0")}`}
          </Tempo_24seg>
        </ContainerTempo>
      </Placar>
    </>
  );
}
