"use client";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import localFont from "next/font/local";
import {useRecoilState} from "recoil";
import {
    jogadores_state,
    current_color_state,
    is_running_state,
    placar_state,
    segundos_restantes_state,
    tempo_restante_state
} from "../../state/placar";
import desfazer from "../../img/desfazer.png";
import mais_um from "../../img/mais_um.png";
import menos_1 from "../../img/menos_1.png";
import new_game from "../../img/new_game.png";
import play from "../../img/play.png";
import reset_24s from "../../img/reset_24s.png";
import pause from "../../img/pause.png";
import {
    interpolateColor,
    updateDadosPartida
} from "./functions";

const digital_numbers = localFont({
    src: "../../fonts/DigitalNumbers-Regular.ttf"
});

const Painel_De_Comando = styled.div`
  display: flex;
  padding: 32px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const Btn_Controlador_Default = styled.button`
  width: 70px;
  height: 70px;
  padding: 2px 3px;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Controlador_Partida = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;
`;
const Tempo_Partida = styled.p`
  color: #fff;
  text-align: center;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Tempo_24seg = styled.p`
  color: #f00;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Botoes_Controle_Tempo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
const Controlador_Tempo = styled.div`
  border-radius: 5px;
  border: 2px solid #fff;
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
const Btn_Play_Pause = styled(Btn_Controlador_Default)``;
const Btn_Mais_Um = styled(Btn_Controlador_Default)``;
const Btn_Menos_Um = styled(Btn_Controlador_Default)``;
const Btn_Reset_24seg = styled(Btn_Controlador_Default)``;
const Btn_New_Game = styled(Btn_Controlador_Default)``;
const Btn_Desfazer = styled(Btn_Controlador_Default)``;
const Container_Btn_Controle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  flex-direction: row;
`;
const rgbToCSS = (rgbArray) => {
    return `rgb(${rgbArray.join(",")})`;
};


function PainelDeComando() {

    const [tempoRestante, setTempoRestante] = useRecoilState(tempo_restante_state);
    const [jogadores, setJogadores] = useRecoilState(jogadores_state);
    const [segundosRestantes, setSegundosRestantes] = useRecoilState(segundos_restantes_state);
    const [placar, setPlacar] = useRecoilState(placar_state);
    const [isRunning, setIsRunning] = useRecoilState(is_running_state);
    const [currentColor, setCurrentColor] = useRecoilState(current_color_state);

    const audioRef_buzzer = useRef(`audioRef_buzzer`);
    const audioRef_apito = useRef(`audioRef_apito`);
    const audioRef_24seg_torcida_nervosa = useRef(`audioRef_24seg_torcida_nervosa`);
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
                audioRef_24seg_torcida_nervosa.current.pause()
            }
        }
    }
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
                audioRef_buzzer.current.pause()
            }
        }
    }
    const sound_apito = () => {
        return {

            play: () => {
                audioRef_apito.current.play();
            },

            stop: () => {
                audioRef_apito.current.pause();
                audioRef_apito.current.currentTime = 0; // Isso irá reiniciar o áudio quando parar
            },
            pause: () => {
                audioRef_apito.current.pause()
            }
        }
    }


    useEffect(() => {
        let timer;

        if (isRunning && segundosRestantes > 0) {
            timer = setTimeout(() => {
                setTempoRestante((old_info) => {

                    updateDadosPartida({
                        segundos_restantes: tempoRestante.segundos,
                        minutos_restantes: tempoRestante.minutos,
                        tempo24s: segundosRestantes,
                        pontos_time_a: placar.timeA,
                        pontos_time_b: placar.timeB
                    });
                    let _minutos = tempoRestante.minutos;
                    let _segundos = tempoRestante.segundos;

                    if (tempoRestante.minutos === 0 && tempoRestante.segundos === 0) {
                        alert("tempo acabou");
                    } else if (tempoRestante.segundos - 1 < 0) {
                        _minutos = tempoRestante.minutos - 1;
                        _segundos = 59;
                    } else if (
                        (tempoRestante.segundos <= 0 && tempoRestante <= 0) === false
                    ) {
                        _segundos = tempoRestante.segundos - 1;
                    }

                    return {minutos: _minutos, segundos: _segundos};
                });
                setSegundosRestantes((prev) => prev - 1);
            }, 1000);
        } else if (segundosRestantes === 0) {
            setIsRunning(false);
            sound_buzzer().play();
        }

        if (isRunning === false) {
            clearTimeout(timer);
        }

        if (segundosRestantes === 12) {
            sound_24seg_torcida_nervosa().play()
        }


        // Calcular a cor
        const startColor = [0, 87, 255]; // Azul 0057FF
        const endColor = [255, 0, 0]; // Vermelho FF0000
        const factor = (24 - segundosRestantes) / 24;
        setCurrentColor(interpolateColor(startColor, endColor, factor));

        return () => {
            clearTimeout(timer);
        };
    }, [isRunning, segundosRestantes]);

    function togglePausePlayTempoPartida() {
        const btnPlayPause = document.querySelector("#btnPlayPause");
        if (isRunning) {
            sound_24seg_torcida_nervosa().stop()
            setIsRunning(false);
            btnPlayPause.style.backgroundImage = `url(${play.src})`;
        } else {

            setIsRunning(true);
            btnPlayPause.style.backgroundImage = `url(${pause.src})`;
        }
    }

    function addMinute() {
        setTempoRestante((prev) => {
            return {...prev, minutos: prev.minutos + 1};
        });
    }

    function removeMinute() {
        setTempoRestante((prev) => {
            return {...prev, minutos: prev.minutos - 1};
        });
    }


    function timeControlDevice(e) {
        if (e.code === "Numpad5") {
            togglePausePlayTempoPartida();

        }

        if (e.code === "ArrowLeft") {
            handleResetAndPlayClick();
        }
        if (e.code === "ArrowRight") {
            apitar();
        }
    }

    function handleResetAndPlayClick() {
        sound_24seg_torcida_nervosa().stop()
        const btnPlayPause = document.querySelector("#btnPlayPause");
        setIsRunning(true);
        setSegundosRestantes(24);
        setCurrentColor([0, 87, 255]);
        btnPlayPause.style.backgroundImage = `url(${pause.src})`;
    }

    function apitar() {
        sound_apito().play()
    }

    useEffect(function () {
        document.addEventListener("keydown", timeControlDevice);
        return function () {
            document.removeEventListener("keydown", timeControlDevice)
        }
    }, [isRunning])
    return (
        <Painel_De_Comando>
            <audio ref={audioRef_24seg_torcida_nervosa} src="./audio/basquete_sound_24s_torcida_nervosa_cut.mp3"/>
            <audio ref={audioRef_buzzer} src="./audio/buzzer.mp3"/>
            <audio ref={audioRef_apito} src="./audio/apito.mp3"/>


            <Controlador_Tempo>
                <Tempo_Partida className={digital_numbers.className}>
                    {`${tempoRestante.minutos
                        .toString()
                        .padStart(2, "0")}:${tempoRestante.segundos
                        .toString()
                        .padStart(2, "0")}`}
                </Tempo_Partida>
                <Tempo_24seg
                    style={{color: rgbToCSS(currentColor)}}
                    className={digital_numbers.className}
                >
                    {segundosRestantes}
                </Tempo_24seg>
                <Botoes_Controle_Tempo>
                    <Container_Btn_Controle>
                        <Btn_Play_Pause
                            id="btnPlayPause"
                            onClick={togglePausePlayTempoPartida}
                            style={{backgroundImage: `url(${play.src})`}}
                        />{" "}
                        <Btn_Reset_24seg
                            onClick={handleResetAndPlayClick}
                            style={{backgroundImage: `url(${reset_24s.src})`}}
                        />
                    </Container_Btn_Controle>

                    <Container_Btn_Controle>
                        <Btn_Mais_Um
                            onClick={addMinute}
                            style={{backgroundImage: `url(${mais_um.src})`}}
                        />
                        <Btn_Menos_Um
                            onClick={removeMinute}
                            style={{backgroundImage: `url(${menos_1.src})`}}
                        />
                    </Container_Btn_Controle>
                </Botoes_Controle_Tempo>
            </Controlador_Tempo>

            <Controlador_Partida>
                <Btn_Desfazer
                    style={{backgroundImage: `url(${desfazer.src})`}}
                />
                <Btn_New_Game
                    onClick={() => {

                        setJogadores((prevTimes) => {
                            // Zera as pontuações dos jogadores no timeA.
                            const novoTimeA = prevTimes.timeA.map(jogador => ({
                                ...jogador,
                                pontuacao: 0
                            }));

                            // Zera as pontuações dos jogadores no timeB.
                            const novoTimeB = prevTimes.timeB.map(jogador => ({
                                ...jogador,
                                pontuacao: 0
                            }));

                            // Retorna os novos times.
                            return {
                                timeA: novoTimeA,
                                timeB: novoTimeB
                            };
                        })

                        const btnPlayPause = document.querySelector("#btnPlayPause");
                        if (isRunning) {
                            setIsRunning(false);
                            btnPlayPause.style.backgroundImage = `url(${play.src})`;
                        }
                        setPlacar({timeA: 0, timeB: 0});
                        setSegundosRestantes(24);
                        setTempoRestante({
                            minutos: 10,
                            segundos: 0
                        });
                        updateDadosPartida({
                            segundos_restantes: 59,
                            minutos_restantes: 10,
                            tempo24s: 24,
                            pontos_time_a: 0,
                            pontos_time_b: 0
                        });
                    }
                    }
                    style={{backgroundImage: `url(${new_game.src})`}}
                />
            </Controlador_Partida>
        </Painel_De_Comando>
    );
}

export default PainelDeComando;