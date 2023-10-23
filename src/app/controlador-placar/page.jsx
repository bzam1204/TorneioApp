"use client";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import localFont from "next/font/local";
import CardJogadorA from "./CardJogador/CardJogadorA";
import CardJogadorB from "./CardJogador/CardJogadorB";
import {useRecoilState} from "recoil";
import {
    jogadores_state,

    placar_state,

} from "../../state/placar";

import colors from "../../js/colors.js";
import PainelDeComando from "./PainelDeComando.jsx";
import img_btn_counter from "../../img/btn_stats/btn_counter.png";
import img_btn_plus from "../../img/btn_stats/plus.png";

const digital_numbers = localFont({
    src: "../../fonts/DigitalNumbers-Regular.ttf"
});


const Placar = styled.main`
  border-radius: 10px;
  border: 10px solid ${colors.bordas};
  background: ${colors.fundo};
  display: flex;
  width: auto;
  height: calc(100vh - 34px * 2);
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
`;
const Info_Geral = styled.section`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 5px;
  border: 2px solid ${colors.bordas};
`;
const Painel_Dos_Jogadores = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;
const Nome_Time = styled.p`
  color: ${colors.nome_time};
  font-family: Orbitron;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex: 1 0 0;
`;
const Info_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;
const Pontuacao = styled.p`
  color: ${colors.pontuacao};
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Jogadores = styled.div`
  height: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;


export default function ControladorPlacar() {
    const [placar, setPlacar] = useRecoilState(placar_state);
    const [jogadores, setJogadores] = useRecoilState(jogadores_state);

    function criaJogador () {

    }

    return (
        <>
            <Placar>
                <Info_Geral>
                    <Nome_Time>Vermelho</Nome_Time>
                    <Info_Container>
                        <Pontuacao className={digital_numbers.className}>
                            {placar.timeA}
                        </Pontuacao>
                        <Nome_Time style={{textAlign: "center"}}>vs</Nome_Time>
                        <Pontuacao className={digital_numbers.className}>
                            {placar.timeB}
                        </Pontuacao>
                    </Info_Container>

                    <Nome_Time style={{textAlign: "right"}}>Preto</Nome_Time>
                </Info_Geral>

                <Painel_Dos_Jogadores>

                    <Jogadores>
                        {jogadores.timeA.map((jogador, index) => {
                            return <CardJogadorA index={index} key={index}/>;
                        })}
                        {
                            jogadores.timeA.length < 9 ?
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundSize: "cover",
                                    justifySelf: `center`, alignSelf: "center",
                                    cursor: "pointer",
                                    backgroundImage: `url(${img_btn_plus.src}`
                                }}
                                />

                                : null}

                    </Jogadores>

                    <PainelDeComando/>
                    <Jogadores>
                        {jogadores.timeB.map((jogador, index) => {
                            return <CardJogadorB index={index} key={index}/>;
                        })}
                    </Jogadores>
                </Painel_Dos_Jogadores>
            </Placar>
        </>
    )
        ;
}
