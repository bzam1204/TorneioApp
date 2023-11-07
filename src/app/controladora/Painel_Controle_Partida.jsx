"use client";
import React, {useState, useEffect} from "react";
import {
    Frame_Container_Painel_Controle_Partida,
    Container_Painel_Controle_Partida,
    Container_Time_Info,
    Container_Nome_Time,
    Nome_Time, Pontuacao_Time, Container_Pontuacao, Botao_Menu_Opcoes, Botao_24_Segundos, Botao_Tempo
} from "./estilo/estilo_painel_controle_partida";



export default function Painel_Controle_Partida() {
    return (
        <Frame_Container_Painel_Controle_Partida>
            <Container_Painel_Controle_Partida>
                <Container_Time_Info>
                    <Container_Nome_Time>
                        <Nome_Time>
                            golden state warriors
                        </Nome_Time>
                        <p style={{
                            color: '#FFF',
                            fontSize: '24px',
                            textAlign: 'center',
                            fontFamily: 'Orbitron',
                            fontWeight: '700'
                        }}>x</p>
                        {/*apenas insere o 'x' entre os times*/}
                        <Nome_Time>
                            los angeles lakers
                        </Nome_Time>
                    </Container_Nome_Time>
                    <Container_Pontuacao>
                        <Pontuacao_Time>153</Pontuacao_Time>
                        <Pontuacao_Time>124</Pontuacao_Time>
                    </Container_Pontuacao>
                </Container_Time_Info>
                <Botao_Tempo>10:00</Botao_Tempo>
                <Botao_24_Segundos>24</Botao_24_Segundos>
                <Botao_Menu_Opcoes>Opções</Botao_Menu_Opcoes>

            </Container_Painel_Controle_Partida>
        </Frame_Container_Painel_Controle_Partida>
    )
}