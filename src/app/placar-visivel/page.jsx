"use client";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import localFont from "next/font/local";
import colors from "../../js/colors.js";
import {useRecoilState} from "recoil";
import {tempo_partida} from "../../State/tempo_partida";
import {segundos_posse} from "../../State/segundos_posse";
import {placar} from "../../State/placar";
import socket from "../../config/socket_config";

const digital_numbers = localFont({
    src: "../../fonts/DigitalNumbers-Regular.ttf"
});

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

export default function PlacarVisivel() {

    const [_tempo_partida, setTempoPartida] = useRecoilState(tempo_partida)
    const [_segundos_posse, setSegundosPosse] = useRecoilState(segundos_posse)
    const [_placar, setPlacar] = useRecoilState(placar)
    useEffect(() => {
        socket.on('update', function ({currentTime, possessionTime, isRunning}) {
            setSegundosPosse(possessionTime)
            setTempoPartida(currentTime)
        })
    }, [_tempo_partida, _segundos_posse]);


    const [dadosDaPartida, setDadosDaPartida] = useState({
        id: 2,
        segundos_restantes: 59,
        minutos_restantes: 10,
        tempo24s: 23,
        pontos_time_a: 35,
        pontos_time_b: 89,
        createdAt: "2023-10-07T12:13:42.866Z",
        updatedAt: "2023-10-07T12:13:42.866Z"
    });

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                const response = await fetch("./api/partida_cansada/dados_partida");

                const dados_partida = await response.json();
                console.log(dados_partida)
                setDadosDaPartida(dados_partida);
            })();
        }, 250);
    }, [dadosDaPartida]);

    return (<>
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
                <Pontuacao className={digital_numbers.className}>{dadosDaPartida.pontos_time_a}</Pontuacao>

                <Pontuacao className={digital_numbers.className}>{dadosDaPartida.pontos_time_b}</Pontuacao>
            </ContainerPontuacao>

            <ContainerTempo>
                <Tempo_24seg className={digital_numbers.className}>
                    {`${_segundos_posse.toString().padStart(2, "0")}`}
                </Tempo_24seg>
                <Tempo_Partida className={digital_numbers.className}>
                    {`${Math.trunc(_tempo_partida / 60).toString().padStart(2, "0")}:${Math.trunc(_tempo_partida % 60).toString().padStart(2, "0")}`}
                </Tempo_Partida>
                <Tempo_24seg className={digital_numbers.className}>
                    {`${_segundos_posse.toString().padStart(2, "0")}`}
                </Tempo_24seg>
            </ContainerTempo>
        </Placar>
    </>);
}
