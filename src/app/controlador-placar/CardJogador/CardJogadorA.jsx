"use client";
import React, {useState, useEffect} from "react";

import {useRecoilState} from "recoil";
import {jogadores_state, placar_state} from "../../../state/placar";
import {Poppins} from "next/font/google";
import {
    Btn_1_Ponto, Btn_2_Ponto, Btn_3_Ponto, Btn_Falta,
    CardJogadorTime1,
    NomeJogador,
    PontosIndividuais
} from "./card_jogador_style";

const poppins = Poppins({subsets: ["latin"], weight: "400"});


export default function CardJogadorA({index}) {
    const [placar, setPlacar] = useRecoilState(placar_state);
    const [jogadores, setJogadores] = useRecoilState(jogadores_state);
    const [showStats, setShowStats] = useState(false)

    function changePontuacao(_index, pontuacao_a_modificar) {
        setJogadores((prev) => {
            const novo_timeA = [...prev.timeA]
            novo_timeA[_index] = {
                ...novo_timeA[_index],
                pontuacao: novo_timeA[_index].pontuacao + pontuacao_a_modificar
            }

            return {
                ...prev,
                timeA: novo_timeA,
            }
        })
    }
    function cesta1() {
        changePontuacao(index, 1)

        setPlacar((prev) => {
            return {...prev, timeA: prev.timeA + 1};
        });
    }
    function desfazer1(event) {
        event.preventDefault();
        if (jogadores.timeA[index].pontuacao >= 1) {
            changePontuacao(index, -1)
            setPlacar((prev) => {
                return {...prev, timeA: prev.timeA - 1};
            });
        }
    }
    function cesta2() {
        changePontuacao(index, 2)

        setPlacar((prev) => {
            return {...prev, timeA: prev.timeA + 2};
        });
    }
    function desfazer2(event) {
        event.preventDefault();
        if (jogadores.timeA[index].pontuacao >= 2) {
            changePontuacao(index, -2)
            setPlacar((prev) => {
                return {...prev, timeA: prev.timeA - 2};
            });
        }
    }
    function cesta3() {
        changePontuacao(index, 3)

        setPlacar((prev) => {
            return {...prev, timeA: prev.timeA + 3};
        });
    }
    function desfazer3(event) {
        event.preventDefault();
        if (jogadores.timeA[index].pontuacao >= 3) {
            changePontuacao(index, -3)
            setPlacar((prev) => {
                return {...prev, timeA: prev.timeA - 3};
            });
        }
    }

    return (
        <CardJogadorTime1>
            <PontosIndividuais>{jogadores.timeA.at(index).pontuacao}</PontosIndividuais>
            <NomeJogador suppressContentEditableWarning={true} contentEditable="true" className={poppins.className}>
                {jogadores.timeA.at(index).nome}
            </NomeJogador>
            <Btn_1_Ponto onContextMenu={desfazer1} onClick={cesta1}>
                1
            </Btn_1_Ponto>
            <Btn_2_Ponto onContextMenu={desfazer2} onClick={cesta2}>
                2
            </Btn_2_Ponto>
            <Btn_3_Ponto onContextMenu={desfazer3} onClick={cesta3}>
                3
            </Btn_3_Ponto>
            <Btn_Falta>F</Btn_Falta>
        </CardJogadorTime1>
    );
}
