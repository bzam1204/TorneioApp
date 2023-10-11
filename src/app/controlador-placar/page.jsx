"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import CardJogadorA from "./CardJogadorA";
import CardJogadorB from "./CardJogadorB";
import { useRecoilState } from "recoil";
import placar_state from "../../state/placar";
import desfazer from "../../img/desfazer.png";
import mais_um from "../../img/mais_um.png";
import menos_1 from "../../img/menos_1.png";
import new_game from "../../img/new_game.png";
import play from "../../img/play.png";
import reset_24s from "../../img/reset_24s.png";
import pause from "../../img/pause.png";
import colors from "../../js/colors.js";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const digital_numbers = localFont({
  src: "../../fonts/DigitalNumbers-Regular.ttf"
});

const rgbToCSS = (rgbArray) => {
  return `rgb(${rgbArray.join(",")})`;
};

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
const Painel_De_Comando = styled.div`
  display: flex;
  padding: 32px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const Jogadores = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const CardJogadorTime1 = styled.article`
  border-bottom: 2px solid ${colors.bordas};
  display: flex;
  width: 517px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const CardJogadorTime2 = styled.article`
  border-bottom: 2px solid ${colors.bordas};
  display: flex;
  width: 517px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Btn_Jogador_Default = styled.button`
  border-radius: 500px;
  border: 2px solid ${colors.bordas};
  display: flex;
  width: 40px;
  height: 40px;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${colors.txt_botoes_jogador};
  font-family: Orbitron;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Btn_Falta = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_Falta};
`;
const Btn_3_Ponto = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_3_Ponto};
`;
const Btn_2_Ponto = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_2_Ponto};
`;
const Btn_1_Ponto = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_1_Ponto};
`;
const NomeJogador = styled.p`
  color: ${colors.nome_jogador};
  width: 100%;
  text-align: left;
  overflow: hidden; /* Oculta o conteúdo que excede a largura máxima */
  white-space: nowrap; /* Impede a quebra de texto em várias linhas */
  text-overflow: ellipsis;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  height: 50px;
`;
const PontosIndividuais = styled(Btn_Jogador_Default)`
  background-color: transparent;
  font-size: 20px;
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

const Btn_Controlador_Default = styled.button`
  width: 70px;
  height: 70px;
  padding: 2px 3px;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
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

const interpolateColor = (color1, color2, factor) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
};

// Função para transformar um array RGB em uma string de cor CSS

export default function Page() {
  const [segundosRestantes, setSegundosRestantes] = useState(24);
  const [tempoRestante, setTempoRestante] = useState({
    minutos: 10,
    segundos: 0
  });
  const [placar, setPlacar] = useRecoilState(placar_state);
  const [isRunning, setIsRunning] = useState(false);
  const [currentColor, setCurrentColor] = useState([0, 87, 255]);
  // const music15s = new Audio("./audio/music15s.mp3");
  const music15s = document.querySelector('#music15s')
  console.log(music15s)
  const buzzer = new Audio("./audio/buzzer.mp3");

  const [dadosDaPartida, setDadosDaPartida] = useState({
    id: 2,
    segundos_restantes: 59,
    minutos_restantes: 10,
    tempo24s: 23,
    pontos_time_a: 35,
    pontos_time_b: 89,
    updatedAt: "2023-10-07T12:13:42.866Z"
  });

  setTimeout(() => {
    updateDadosPartida({
      segundos_restantes: tempoRestante.segundos,
      minutos_restantes: tempoRestante.minutos,
      tempo24s: segundosRestantes,
      pontos_time_a: placar.timeA,
      pontos_time_b: placar.timeB
    });
  }, 500);

  async function updateDadosPartida(_dados) {
    function handleResponse(response) {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON
      return response.json();
    }

    const response = await fetch("/api/partida_cansada/update_dados", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ..._dados
      })
    })
      .then(handleResponse) // Call the callback function
      .then((data) => {
        console.log("Data:", data);
        // You can perform further processing on the data here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    let timer;

    if (isRunning && segundosRestantes > 0) {
      timer = setTimeout(() => {
        setTempoRestante((old_info) => {
          let _minutos = tempoRestante.minutos;
          let _segundos = tempoRestante.segundos;

          if (tempoRestante.minutos == 0 && tempoRestante.segundos == 0) {
            alert("tempo acabou");
          } else if (tempoRestante.segundos - 1 < 0) {
            _minutos = tempoRestante.minutos - 1;
            _segundos = 59;
          } else if (
            (tempoRestante.segundos <= 0 && tempoRestante <= 0) === false
          ) {
            _segundos = tempoRestante.segundos - 1;
          }

          return { minutos: _minutos, segundos: _segundos };
        });
        setSegundosRestantes((prev) => prev - 1);
      }, 1000);
    } else if (segundosRestantes === 0) {
      setIsRunning(false);
      buzzer.play();
    }

    // if (segundosRestantes < 15) {
    //   music15s.play();
    // } else {
    //   music15s.pause();
    // }

    // Calcular a cor
    const startColor = [0, 87, 255]; // Azul 0057FF
    const endColor = [255, 0, 0]; // Vermelho FF0000
    const factor = (24 - segundosRestantes) / 24;
    setCurrentColor(interpolateColor(startColor, endColor, factor));

    return () => {
      clearTimeout(timer);
    };
  }, [isRunning, segundosRestantes, tempoRestante]);

  function correTempoPartida() {
    _segundos = _segundos - 1;
    console.log(tempoRestante);
    console.log(_minutos);
    console.log(_segundos);
    setTempoRestante({ minutos: _minutos, segundos: _segundos });
  }

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleResetClick = () => {
    const btnPlayPause = document.querySelector("#btnPlayPause");
    setIsRunning(false);
    setSegundosRestantes(24);
    setCurrentColor([0, 87, 255]);
    btnPlayPause.style.backgroundImage = `url(${play.src})`;

    // Resetando a cor para azul
  };

  function handleResetAndPlayClick(e) {
    music15s.pause();
    e.preventDefault();
    const btnPlayPause = document.querySelector("#btnPlayPause");
    setIsRunning(true);
    setSegundosRestantes(24);
    setCurrentColor([0, 87, 255]);
    btnPlayPause.style.backgroundImage = `url(${pause.src})`;
  }

  function switchPausePlayTempoPartida(e) {
    const btnPlayPause = document.querySelector("#btnPlayPause");
    if (isRunning) {
      setIsRunning(false);
      btnPlayPause.style.backgroundImage = `url(${play.src})`;
    } else {
      setIsRunning(true);
      btnPlayPause.style.backgroundImage = `url(${pause.src})`;
    }
  }

  function addMinute() {
    setTempoRestante((prev) => {
      return { ...prev, minutos: prev.minutos + 1 };
    });
  }
  function removeMinute() {
    setTempoRestante((prev) => {
      return { ...prev, minutos: prev.minutos - 1 };
    });
  }

  function placarMais() {
    setPlacar(placar);
  }

  return (
    <>
      <Placar>
        <audio id="music15s" preload="auto" controls>
          <source src="./audio/music15s.mp3" type="audio/mp3" />
        </audio>
        <Info_Geral>
          <Nome_Time>Vermelho</Nome_Time>
          <Info_Container>
            <Pontuacao className={digital_numbers.className}>
              {placar.timeA}
            </Pontuacao>
            <Nome_Time style={{ textAlign: "center" }}>vs</Nome_Time>
            <Pontuacao className={digital_numbers.className}>
              {placar.timeB}
            </Pontuacao>
          </Info_Container>

          <Nome_Time style={{ textAlign: "right" }}>Preto</Nome_Time>
        </Info_Geral>

        <Painel_Dos_Jogadores>
          <Jogadores>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return <CardJogadorA key={index} />;
            })}
          </Jogadores>

          <Painel_De_Comando>
            <Controlador_Tempo>
              <Tempo_Partida className={digital_numbers.className}>
                {`${tempoRestante.minutos
                  .toString()
                  .padStart(2, "0")}:${tempoRestante.segundos
                  .toString()
                  .padStart(2, "0")}`}
              </Tempo_Partida>
              <Tempo_24seg
                style={{ color: rgbToCSS(currentColor) }}
                className={digital_numbers.className}
              >
                {segundosRestantes}
              </Tempo_24seg>
              <Botoes_Controle_Tempo>
                <Container_Btn_Controle>
                  <Btn_Play_Pause
                    id="btnPlayPause"
                    onClick={switchPausePlayTempoPartida}
                    style={{ backgroundImage: `url(${play.src})` }}
                  />{" "}
                  <Btn_Reset_24seg
                    onContextMenu={handleResetAndPlayClick}
                    onClick={handleResetClick}
                    style={{ backgroundImage: `url(${reset_24s.src})` }}
                  />
                </Container_Btn_Controle>

                <Container_Btn_Controle>
                  <Btn_Mais_Um
                    onClick={addMinute}
                    style={{ backgroundImage: `url(${mais_um.src})` }}
                  />
                  <Btn_Menos_Um
                    onClick={removeMinute}
                    style={{ backgroundImage: `url(${menos_1.src})` }}
                  />
                </Container_Btn_Controle>
              </Botoes_Controle_Tempo>
            </Controlador_Tempo>

            <Controlador_Partida>
              <Btn_Desfazer
                style={{ backgroundImage: `url(${desfazer.src})` }}
              />
              <Btn_New_Game
                style={{ backgroundImage: `url(${new_game.src})` }}
              />
            </Controlador_Partida>
          </Painel_De_Comando>

          <Jogadores>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return <CardJogadorB key={index} />;
            })}
          </Jogadores>
        </Painel_Dos_Jogadores>
      </Placar>
    </>
  );
}
