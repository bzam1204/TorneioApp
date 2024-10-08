import imagem_botao from "../../../../public/img/botoes_especiais/default_amarelo.png";
import imagem_botao_hover from "../../../../public/img/botoes_especiais/default_amarelo_hovered.png";
import imagem_botao_pressionado from "../../../../public/img/botoes_especiais/default_amarelo_pressionado.png";
import { useRouter } from "next/navigation";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { time_is_running } from "../../../State/time_is_running";
import { useEffect, useState } from "react";
import connection from "../../../../signalr";
import axiosInstance from "../../../../axios.config";

const Container_Botao_Tempo = styled.div`
    background-image: url(${(props) => props.img_url});
    width: calc(100% - 4.68vw);
    height: 7.2vw;
    display: flex;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    align-items: center;
    padding: 0 2.34vw;
    transition: 20ms;

    &:hover {
        background-image: url(${(props) => props.img_hover_url});
    }

    &:active p {
        line-height: 4.97vw;
    }

    &:active {
        background-image: url(${(props) => props.img_active_url});
    }
`;

export const Label_Tempo = styled.p`
    font-family: Orbitron, serif;
    width: fit-content;
    font-size: 4.39vw;
    font-style: normal;
    font-weight: 700;
    height: 4.97vw;
    line-height: 4.46vw;
    color: #ded500;
    user-select: none;
`;

function handleBotaoCinza(_time_is_running) {
    const botao = document.querySelector("#botao_tempo");
    if (!_time_is_running) {
        botao.classList.add("botao_cinza");
    } else {
        botao.classList.remove("botao_cinza");
    }
}

export function toggleTimeIsRunning(_time_is_running, setTimeIsRunning) {
    setTimeIsRunning(!_time_is_running);
}

function playPauseTimerOnServer() {
    connection.invoke("playPauseTimer");
}

function emitUpdatedInfo(setTempo) {
    connection.invoke("emitUpdatedInfo", (dados) => {
        setTempo(dados.currentTime);
    });
}

export default function Botao_Tempo() {
    const router = useRouter();
    const [_time_is_running, setTimeIsRunning] =
        useRecoilState(time_is_running);
    const [tempo_partida, setTempoPartida] = useState("Iniciar");

    // atualiza o time is running
    useEffect(() => {
        connection.on("update", ({ isRunning }) => {
            setTimeIsRunning(isRunning);
            handleBotaoCinza(isRunning);
        });
    }, [_time_is_running]);

    // atualiza o tempo da partida
    useEffect(() => {
        connection.on("update", ({ currentTime }) => {
            setTempoPartida(currentTime);
        });
    }, [tempo_partida]);

    return (
        <Container_Botao_Tempo
            onClick={function () {
                toggleTimeIsRunning(_time_is_running, setTimeIsRunning);
                axiosInstance.post("api/socket/17");
            }}
            id={"botao_tempo"}
            img_url={imagem_botao.src}
            img_hover_url={imagem_botao_hover.src}
            img_active_url={imagem_botao_pressionado.src}
        >
            <Label_Tempo>
                {tempo_partida === "Iniciar"
                    ? tempo_partida
                    : `${Math.trunc(tempo_partida / 60)}:${Math.trunc(
                          tempo_partida % 60
                      )}`}
            </Label_Tempo>
        </Container_Botao_Tempo>
    );
}
