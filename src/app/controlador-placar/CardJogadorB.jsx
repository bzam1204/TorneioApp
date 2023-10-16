"use client";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import colors from "../../js/colors.js";
import {Poppins} from "next/font/google";
import {useRecoilState} from "recoil";
import {jogadores_state, placar_state} from "../../state/placar";

const poppins = Poppins({subsets: ["latin"], weight: "400"});

const CardJogadorTime1 = styled.article`
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
  outline: none;
  border: none;
  height: 50px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;

  :focus-visible {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: none !important;
  }
`;
const PontosIndividuais = styled(Btn_Jogador_Default)`
  background-color: transparent;
  font-size: 20px;
`;

export default function CardJogadorB({index}) {
    const [placar, setPlacar] = useRecoilState(placar_state);
    const [jogadores, setJogadores] = useRecoilState(jogadores_state);


    function changeNomeJogador(e, _index,) {
        setJogadores((prev) => {
            const novo_timeB = [...prev.timeB]
            novo_timeB[_index] = {
                ...novo_timeB[_index],
                nome: e.target.textContent
            }
            console.log(e.target.textContent)
            return {
                ...prev,
                timeB: novo_timeB,
            }
        })
    }

    function changePontuacao(_index, pontuacao_a_modificar) {
        setJogadores((prev) => {
            const novo_timeB = [...prev.timeB]
            novo_timeB[_index] = {
                ...novo_timeB[_index],
                pontuacao: novo_timeB[_index].pontuacao + pontuacao_a_modificar
            }

            return {
                ...prev,
                timeB: novo_timeB,
            }
        })
    }

    function cesta1() {
        changePontuacao(index, 1)

        setPlacar((prev) => {
            return {...prev, timeB: prev.timeB + 1};
        });
    }

    function desfazer1(event) {
        event.preventDefault();
        if (jogadores.timeB[index].pontuacao >= 1) {
            changePontuacao(index, -1)
            setPlacar((prev) => {
                return {...prev, timeB: prev.timeB - 1};
            });
        }
    }

    function cesta2() {
        changePontuacao(index, 2)

        setPlacar((prev) => {
            return {...prev, timeB: prev.timeB + 2};
        });
    }

    function desfazer2(event) {
        event.preventDefault();
        if (jogadores.timeB[index].pontuacao >= 2) {
            changePontuacao(index, -2)
            setPlacar((prev) => {
                return {...prev, timeB: prev.timeB - 2};
            });
        }
    }

    function cesta3() {
        changePontuacao(index, 3)

        setPlacar((prev) => {
            return {...prev, timeB: prev.timeB + 3};
        });
    }

    function desfazer3(event) {
        event.preventDefault();
        if (jogadores.timeB[index].pontuacao >= 3) {
            changePontuacao(index, -3)
            setPlacar((prev) => {
                return {...prev, timeB: prev.timeB - 3};
            });
        }
    }


    return (
        <CardJogadorTime1>
            <Btn_Falta>F</Btn_Falta>
            <Btn_3_Ponto onContextMenu={desfazer3} onClick={cesta3}>
                3
            </Btn_3_Ponto>
            <Btn_2_Ponto onContextMenu={desfazer2} onClick={cesta2}>
                2
            </Btn_2_Ponto>
            <Btn_1_Ponto onContextMenu={desfazer1} onClick={cesta1}>
                1
            </Btn_1_Ponto>
            <NomeJogador onChange={changeNomeJogador} suppressContentEditableWarning={true} contentEditable="true"
                         className={poppins.className}>
                {jogadores.timeB.at(index).nome}
            </NomeJogador>
            <PontosIndividuais>{jogadores.timeB.at(index).pontuacao}</PontosIndividuais>
        </CardJogadorTime1>
    );
}
