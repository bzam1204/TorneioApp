"use client";
import React, {useState, useEffect} from "react";


import {Container_Principal, Container_Time} from "./estilo/estilo_page";
import Painel_Controle_Partida from "./Painel_Controle_Partida";
import Cartao_Jogador from "./Cartao_Jogador";
import {useRecoilState} from "recoil";
import {times_montados} from "../../State/times_montados";


export default function Page() {
    const [_times_montados, setJogadoresSelecionadoNoCheckIn] = useRecoilState(times_montados)

    return <>
        <Container_Principal>
            <Container_Time>
                {_times_montados.time_a.map(function (jogador, _key) {
                    return (<Cartao_Jogador dados_jogador={jogador} key={_key} index={_key}
                                            time={'time_a'}></Cartao_Jogador>)
                })}
            </Container_Time>
            <Painel_Controle_Partida/>
            <Container_Time>
                {_times_montados.time_b.map(function (jogador, _key) {
                    return (<Cartao_Jogador dados_jogador={jogador} key={_key} index={_key}
                                            time={'time_b'}></Cartao_Jogador>)
                })}
            </Container_Time>
        </Container_Principal>
    </>
}