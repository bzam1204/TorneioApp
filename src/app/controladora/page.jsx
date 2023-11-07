"use client";
import React, {useState, useEffect} from "react";

import {Container_Principal, Container_Time} from "./estilo/estilo_page";
import {Cartao_Jogador} from "./estilo/estilo_cartao_jogador";
import Painel_Controle_Partida from "./Painel_Controle_Partida";


export default function Page() {
    return <>
        <Container_Principal>
            <Container_Time>
                <Cartao_Jogador></Cartao_Jogador>
            </Container_Time>
            <Painel_Controle_Partida></Painel_Controle_Partida>
            <Container_Time>
                <Cartao_Jogador></Cartao_Jogador>
            </Container_Time>
        </Container_Principal>
    </>

}