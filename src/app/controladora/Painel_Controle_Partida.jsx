"use client";
import React, {useState, useEffect} from "react";
import {
    Frame_Container_Painel_Controle_Partida,
    Container_Painel_Controle_Partida,
    Container_Time_Info,
    Container_Nome_Time,
    Nome_Time,
    Pontuacao_Time,
    Container_Pontuacao,
    Botao_Menu_Opcoes,
    Botao_24_Segundos,
    Botao_Tempo
} from "./estilo/estilo_painel_controle_partida";
import {useRecoilState} from "recoil";
import {tempo_partida} from "../../State/tempo_partida";
import {segundos_posse} from "../../State/segundos_posse";
import {placar} from "../../State/placar";
import socket from "../../config/socket_config";


export default function Painel_Controle_Partida() {

    const [_tempo_partida, setTempoPartida] = useRecoilState(tempo_partida)
    const [_segundos_posse, setSegundosPosse] = useRecoilState(segundos_posse)
    const [_placar, setPlacar] = useRecoilState(placar)
    useEffect(() => {
        socket.on('update', function ({currentTime, possessionTime, isRunning}) {
            setSegundosPosse(possessionTime)
            setTempoPartida(currentTime)
        })
    }, [_tempo_partida, _segundos_posse]);


    return (<Frame_Container_Painel_Controle_Partida>
        <Container_Painel_Controle_Partida>
            <Container_Time_Info>
                <Container_Nome_Time>
                    <Nome_Time>Time Vermelho</Nome_Time>
                    <p style={{
                        color: '#FFF',
                        fontSize: '2.5vw',
                        textAlign: 'center',
                        fontFamily: 'Orbitron',
                        fontWeight: '700',
                        padding: '0 1vw'
                    }}>x</p>
                    {/*apenas insere o 'x' entre os nomes dos times*/}
                    <Nome_Time>
                        <pre>{'Time\nPreto'}</pre>
                    </Nome_Time>
                </Container_Nome_Time>
                <Container_Pontuacao>
                    <Pontuacao_Time>{_placar.time_a}</Pontuacao_Time>
                    <Pontuacao_Time>{_placar.time_b}</Pontuacao_Time>
                </Container_Pontuacao>
            </Container_Time_Info>
            <Botao_Tempo onClick={function () {
                socket.emit('playpause')
            }}>
                {`${Math.trunc(_tempo_partida / 60).toString().padStart(2, "0")}:${Math.trunc(_tempo_partida % 60).toString().padStart(2, "0")}`}
            </Botao_Tempo>
            <Botao_24_Segundos>{_segundos_posse}</Botao_24_Segundos>
            <Botao_Menu_Opcoes>Opções</Botao_Menu_Opcoes>

        </Container_Painel_Controle_Partida>
    </Frame_Container_Painel_Controle_Partida>)
}