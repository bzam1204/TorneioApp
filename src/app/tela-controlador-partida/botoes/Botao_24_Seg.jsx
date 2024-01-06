"use client";
import styled from "styled-components";
import imagem_botao from "../../../../public/img/botoes_especiais/default_red.png";
import imagem_botao_hover from "../../../../public/img/botoes_especiais/default_red_hovered.png";
import imagem_botao_pressionado from "../../../../public/img/botoes_especiais/default_red_pressionado.png";
import {useRouter} from "next/navigation";
import {useRecoilState} from "recoil";
import {time_is_running} from "../../../State/time_is_running";
import {useEffect, useRef, useState} from "react";

import "../estilo/style.css";
import socket from "../../../config/socket_config";

const Container_Botao_24_seg = styled.div`
    background-image: url(${(props) => props.img_url});
    width: calc(100% - 4.68vw);
    height: 7.2vw;
    border-radius: 1.46vw;
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

function handleBotaoCinza(_time_is_running) {
    const botao = document.querySelector("#botao_24_seg");
    if (!_time_is_running) {
        botao.classList.add("botao_cinza");
    } else {
        botao.classList.remove("botao_cinza");
    }
}

export const Label_24_seg = styled.p`
    font-family: Orbitron, serif;
    width: fit-content;
    font-size: 4.39vw;
    font-style: normal;
    font-weight: 700;
    height: 4.97vw;
    line-height: 4.46vw;
    color: #fe5e5e;
    user-select: none;
`;

function resetPossessionTime(sound_24seg_torcida_nervosa) {
    socket.emit("reset");
    sound_24seg_torcida_nervosa().stop();
}

function emitUpdatedInfo(setTempo) {
    socket.emit("emitUpdatedInfo", (dados) => {
        setTempo(dados.currentTime);
    });
}

export default function Botao_24_Seg() {
    const router = useRouter();
    const [_time_is_running, setTimeIsRunning] =
        useRecoilState(time_is_running);
    const [tempo_possessao, setTempoPossessao] = useState(24);

    const audioRef_buzzer = useRef(`audioRef_buzzer`);
    const audioRef_apito = useRef(`audioRef_apito`);
    const audioRef_24seg_torcida_nervosa = useRef(
        `audioRef_24seg_torcida_nervosa`
    );

    const sound_24seg_torcida_nervosa = () => {
        return {
            play: () => {
                audioRef_24seg_torcida_nervosa.current.play();
            },

            stop: () => {
                audioRef_24seg_torcida_nervosa.current.pause();
                audioRef_24seg_torcida_nervosa.current.currentTime = 0; // Isso irá reiniciar o áudio quando parar
            },
            pause: () => {
                audioRef_24seg_torcida_nervosa.current.pause();
            },
        };
    };
    const sound_buzzer = () => {
        return {
            play: () => {
                audioRef_buzzer.current.play();
            },

            stop: () => {
                audioRef_buzzer.current.pause();
                audioRef_buzzer.current.currentTime = 0; // Isso irá reiniciar o áudio quando parar
            },
            pause: () => {
                audioRef_buzzer.current.pause();
            },
        };
    };
    const sound_apito = () => {
        return {
            play: () => {
                audioRef_apito.current.play();
                setTimeout(() => {
                    audioRef_apito.current.pause();
                    audioRef_apito.current.currentTime = 0;
                }, 400);
            },

            stop: () => {
                audioRef_apito.current.pause();
                audioRef_apito.current.currentTime = 0; // Isso irá reiniciar o áudio quando parar
            },
            pause: () => {
                audioRef_apito.current.pause();
            },
        };
    };

    function timeControlDevice(e) {
        if (e.code === "ArrowUp") {
            socket.emit("playpause");
        }

        if (e.code === "ArrowRight") {
            resetPossessionTime(sound_24seg_torcida_nervosa);
        }
        if (e.code === "ArrowLeft") {
            sound_apito().play();
        }
    }

    useEffect(() => {
        socket.on("update", ({possessionTime, currentTime}) => {
            setTempoPossessao(possessionTime);

            if (possessionTime === 12) sound_24seg_torcida_nervosa().play();
            if (possessionTime === 0) sound_buzzer().play();
            if (currentTime === 0) sound_buzzer().play();
        });
    }, [tempo_possessao]);

    useEffect(() => {
        socket.on("update", ({isRunning, possessionTime, currentTime}) => {
            setTimeIsRunning(isRunning);
            handleBotaoCinza(isRunning);
            if (isRunning === false && possessionTime > 0) {
                sound_apito().play();
                sound_24seg_torcida_nervosa().stop();
            }
        });
    }, [_time_is_running, setTimeIsRunning]);

    useEffect(
        function () {
            document.addEventListener("keydown", timeControlDevice);
            return function () {
                document.removeEventListener("keydown", timeControlDevice);
            };
        },
        [_time_is_running]
    );
    useEffect(() => {
            socket.on("apito", () => {
                sound_apito().play();
                console.log('apito')
            })
        }, []
    );

    return (
        <Container_Botao_24_seg
            onClick={() => {
                resetPossessionTime(sound_24seg_torcida_nervosa);
            }}
            id={"botao_24_seg"}
            img_url={imagem_botao.src}
            img_hover_url={imagem_botao_hover.src}
            img_active_url={imagem_botao_pressionado.src}
        >
            <audio
                ref={audioRef_24seg_torcida_nervosa}
                src="./audio/basquete_sound_24s_torcida_nervosa_cut.mp3"
            />
            <audio ref={audioRef_buzzer} src="./audio/buzzer.mp3"/>
            <audio ref={audioRef_apito} src="./audio/apito.mp3"/>

            <Label_24_seg>{tempo_possessao}</Label_24_seg>
        </Container_Botao_24_seg>
    );
}
