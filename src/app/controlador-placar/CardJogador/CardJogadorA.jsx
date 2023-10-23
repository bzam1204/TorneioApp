"use client";
import React, {useState, useEffect} from "react";
import {useRecoilState} from "recoil";
import {jogadores_state, placar_state} from "../../../state/placar";
import {Poppins} from "next/font/google";
import img_btn_assist from "../../../img/btn_stats/assist.png";
import img_btn_falta from "../../../img/btn_stats/falta.png"
import img_btn_rebote from "../../../img/btn_stats/rebote.png"
import img_btn_toco from "../../../img/btn_stats/toco.png"
import img_btn_ponto_1 from "../../../img/btn_stats/ponto_1.png"
import img_btn_ponto_2 from "../../../img/btn_stats/ponto_2.png"
import img_btn_ponto_3 from "../../../img/btn_stats/ponto_3.png"
import img_btn_roubo from "../../../img/btn_stats/roubo.png"
import img_btn_counter from "../../../img/btn_stats/btn_counter.png"


import {
    Botao,
    BotaoStats,
    Card_jogador,
    IconeBotao,
    ImagemJogador,
    NomeJogador,
    TextoBotao
} from "./card_jogador_style_secondary";
import localFont from "next/font/local";

const digital_numbers = localFont({
    src: "../../../fonts/DigitalNumbers-Regular.ttf"
});
const poppins = Poppins({subsets: ["latin"], weight: "400"});

export default function CardJogadorA({index}) {
    const [placar, setPlacar] = useRecoilState(placar_state);
    const [jogadores, setJogadores] = useRecoilState(jogadores_state);
    const [showStats, setShowStats] = useState(false)

    function changeNomeJogador(e, _index,) {
        setJogadores((prev) => {
            const novo_timeA = [...prev.timeA]
            novo_timeA[_index] = {
                ...novo_timeA[_index],
                nome: e.target.textContent
            }
            console.log(e.target.textContent)
            return {
                ...prev,
                timeA: novo_timeA,
            }
        })


    }

    function changePontuacao(_index, pontuacao_a_modificar) {
        return {
            cesta_um(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            pontuacao: novo_timeA[_index].pontuacao + pontuacao_a_modificar,
                            stats: {
                                ...novo_timeA[_index].stats,
                                cesta_1: novo_timeA[_index].stats.cesta_1 + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            },
            cesta_dois(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            pontuacao: novo_timeA[_index].pontuacao + pontuacao_a_modificar * 2,
                            stats: {
                                ...novo_timeA[_index].stats,
                                cesta_2: novo_timeA[_index].stats.cesta_2 + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
            cesta_tres(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            pontuacao: novo_timeA[_index].pontuacao + pontuacao_a_modificar * 3,
                            stats: {
                                ...novo_timeA[_index].stats,
                                cesta_3: novo_timeA[_index].stats.cesta_3 + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
            falta(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            stats: {
                                ...novo_timeA[_index].stats,
                                faltas: novo_timeA[_index].stats.faltas + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
            rebote(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            stats: {
                                ...novo_timeA[_index].stats,
                                rebotes: novo_timeA[_index].stats.rebotes + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
            roubo(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            stats: {
                                ...novo_timeA[_index].stats,
                                roubos: novo_timeA[_index].stats.roubos + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
            toco(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            stats: {
                                ...novo_timeA[_index].stats,
                                tocos: novo_timeA[_index].stats.tocos + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
            assistencia(_index, pontuacao_a_modificar) {
                setJogadores((prev) => {
                        const novo_timeA = [...prev.timeA]
                        novo_timeA[_index] = {
                            ...novo_timeA[_index],
                            stats: {
                                ...novo_timeA[_index].stats,
                                assistencias: novo_timeA[_index].stats.assistencias + pontuacao_a_modificar
                            }
                        }

                        return {
                            ...prev,
                            timeA: novo_timeA,
                        }
                    }
                )
            }
            ,
        }
    }


    function cesta1() {
        // changePontuacao(index, 1)
        changePontuacao().cesta_um(index, 1)
        setPlacar((prev) => {
            return {...prev, timeA: prev.timeA + 1};
        });
    }

    function desfazer1(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.cesta_1 >= 1) {
            changePontuacao().cesta_um(index, -1)
            setPlacar((prev) => {
                return {...prev, timeA: prev.timeA - 1};
            });
        }
    }

    function cesta2() {
        changePontuacao().cesta_dois(index, 1)

        setPlacar((prev) => {
            return {...prev, timeA: prev.timeA + 2};
        });
    }

    function desfazer2(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.cesta_2 >= 1) {
            changePontuacao().cesta_dois(index, -1)
            setPlacar((prev) => {
                return {...prev, timeA: prev.timeA - 2};
            });
        }
    }

    function cesta3() {
        changePontuacao().cesta_tres(index, 1)

        setPlacar((prev) => {
            return {...prev, timeA: prev.timeA + 3};
        });
    }

    function desfazer3(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.cesta_3 >= 1) {
            changePontuacao().cesta_tres(index, -1)
            setPlacar((prev) => {
                return {...prev, timeA: prev.timeA - 3};
            });
        }
    }

    function falta() {
        changePontuacao().falta(index, 1)
    }

    function desfazerFalta(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.faltas >= 1) {
            changePontuacao().falta(index, -1)
        }
    }

    function assistencia() {
        changePontuacao().assistencia(index, 1)
    }

    function desfazerAssistencia(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.assistencias >= 1) {
            changePontuacao().assistencia(index, -1)

        }
    }

    function rebote() {
        changePontuacao().rebote(index, 1)
    }

    function desfazerRebote(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.rebotes >= 1) {
            changePontuacao().rebote(index, -1)

        }
    }

    function toco() {
        changePontuacao().toco(index, 1)
    }

    function desfazerToco(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.tocos >= 1) {
            changePontuacao().toco(index, -1)
        }
    }

    function roubo() {
        changePontuacao().roubo(index, 1)
    }

    function desfazerRoubo(event) {
        event.preventDefault();
        if (jogadores.timeA[index].stats.roubos >= 1)
            changePontuacao().roubo(index, -1)
    }


    useEffect(function () {
        const card_jogador = document.getElementById(`timeA${jogadores.timeA[index].nome}${index}`)

        card_jogador.addEventListener('mouseover', function (e) {
            setShowStats(true)
        })
        card_jogador.addEventListener('mouseleave', function (e) {
            setShowStats(false)
        })
        return () => {
            card_jogador.removeEventListener("mouseover")
            card_jogador.removeEventListener("mouseleave")
        }
    }, [])


    return (
        <Card_jogador id={`timeA${jogadores.timeA[index].nome}${index}`}>

            {showStats === true ? (
                <>
                    <div style={{
                        alignItems: "center", padding: '8px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridGap: '14px 5.5px '
                    }}>
                        <BotaoStats onContextMenu={desfazer1} onClick={cesta1}
                                    style={{backgroundImage: `url(${img_btn_ponto_1.src})`}}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.cesta_1}
                            </div>
                        </BotaoStats>
                        <BotaoStats onContextMenu={desfazer2} onClick={cesta2}
                                    style={{backgroundImage: `url(${img_btn_ponto_2.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.cesta_2}
                            </div>
                        </BotaoStats>
                        <BotaoStats onContextMenu={desfazer3} onClick={cesta3}
                                    style={{backgroundImage: `url(${img_btn_ponto_3.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.cesta_3}
                            </div>
                        </BotaoStats>
                        <BotaoStats onContextMenu={desfazerFalta} onClick={falta}
                                    style={{backgroundImage: `url(${img_btn_falta.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.faltas}
                            </div>
                        </BotaoStats>
                        <div></div>
                        <BotaoStats onContextMenu={desfazerAssistencia} onClick={assistencia}
                                    style={{backgroundImage: `url(${img_btn_assist.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.assistencias}
                            </div>
                        </BotaoStats>
                        <BotaoStats onContextMenu={desfazerRebote} onClick={rebote}
                                    style={{backgroundImage: `url(${img_btn_rebote.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.rebotes}
                            </div>
                        </BotaoStats>
                        <BotaoStats onContextMenu={desfazerToco} onClick={toco}
                                    style={{backgroundImage: `url(${img_btn_toco.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.tocos}
                            </div>
                        </BotaoStats>
                        <BotaoStats onContextMenu={desfazerRoubo} onClick={roubo}
                                    style={{backgroundImage: `url(${img_btn_roubo.src})`}}>
                            <div className={poppins.className} style={{
                                width: '15px',
                                height: '15px',
                                backgroundSize: "cover",
                                backgroundImage: `url(${img_btn_counter.src}`,
                                textAlign: "center",
                                fontSize: '10px',
                                fontWeight: 'bold',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                                 alt="btn counter">{jogadores.timeA[index].stats.roubos}
                            </div>
                        </BotaoStats>
                    </div>
                </>
            ) : (
                <>
                    <div style={{display: "flex", justifyContent: 'flex-start', border: '0px solid #FFF;'}}>
                        <ImagemJogador
                            style={{backgroundImage: `url(${jogadores.timeA[index].imagem_jogador})`}}></ImagemJogador>
                        <div style={{
                            display: "flex",
                            padding: " 8px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            gap: " 16px",
                            alignSelf: " stretch,"
                        }}>
                            <Botao>
                                <TextoBotao>{jogadores.timeA[index].pontuacao}</TextoBotao>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                     fill="none">
                                    <path
                                        d="M8.5 1.5C7.21442 1.5 5.95772 1.88122 4.8888 2.59545C3.81988 3.30968 2.98676 4.32484 2.49479 5.51256C2.00282 6.70028 1.87409 8.00721 2.1249 9.26809C2.3757 10.529 2.99477 11.6872 3.90381 12.5962C4.81285 13.5052 5.97104 14.1243 7.23192 14.3751C8.49279 14.6259 9.79973 14.4972 10.9874 14.0052C12.1752 13.5132 13.1903 12.6801 13.9046 11.6112C14.6188 10.5423 15 9.28558 15 8C14.9982 6.27665 14.3128 4.62441 13.0942 3.40582C11.8756 2.18722 10.2234 1.50182 8.5 1.5ZM4.25 4.51063C4.95175 5.36015 5.37952 6.40243 5.47688 7.5H3.02313C3.12179 6.40275 3.5494 5.36084 4.25 4.51063ZM9 7.5V2.52313C10.1209 2.62464 11.1833 3.0692 12.0425 3.79625C11.1539 4.83755 10.6202 6.13487 10.5188 7.5H9ZM8 7.5H6.48125C6.3798 6.13487 5.84608 4.83755 4.9575 3.79625C5.81668 3.0692 6.87908 2.62464 8 2.52313V7.5ZM5.47688 8.5C5.37952 9.59757 4.95175 10.6399 4.25 11.4894C3.5494 10.6392 3.12179 9.59725 3.02313 8.5H5.47688ZM6.48125 8.5H8V13.4769C6.87908 13.3754 5.81668 12.9308 4.9575 12.2038C5.84596 11.1624 6.37967 9.8651 6.48125 8.5ZM9 8.5H10.5188C10.6203 9.8651 11.154 11.1624 12.0425 12.2038C11.1833 12.9308 10.1209 13.3754 9 13.4769V8.5ZM11.5231 8.5H13.9769C13.8782 9.59725 13.4506 10.6392 12.75 11.4894C12.0483 10.6399 11.6205 9.59757 11.5231 8.5ZM11.5231 7.5C11.6205 6.40243 12.0483 5.36015 12.75 4.51063C13.4506 5.36084 13.8782 6.40275 13.9769 7.5H11.5231Z"
                                        fill="white"/>
                                </svg>
                            </Botao>
                            <Botao>
                                <TextoBotao>99</TextoBotao>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M10 1.33325C10 2.43782 9.10457 3.33325 8 3.33325C6.89543 3.33325 6 2.43782 6 1.33325H5C4.6318 1.33325 4.33253 1.6313 4.3227 1.99936C4.29983 2.8567 4.22763 4.31699 4 4.99992C3.7463 5.76099 2.72034 6.71512 2.24454 7.12762C2.09151 7.26029 2 7.45115 2 7.65369V13.9999C2 14.3681 2.29848 14.6666 2.66667 14.6666H13.3333C13.7015 14.6666 14 14.3681 14 13.9999V7.65369C14 7.45115 13.9085 7.26029 13.7555 7.12762C13.2797 6.71512 12.2537 5.76099 12 4.99992C11.7724 4.31699 11.7002 2.8567 11.6773 1.99936C11.6675 1.6313 11.3682 1.33325 11 1.33325H10Z"
                                        stroke="white" stroke-linejoin="round"/>
                                </svg>
                            </Botao>
                        </div>
                    </div>
                    <NomeJogador>{jogadores.timeA.at(index).nome}</NomeJogador>
                </>
            )}


        </Card_jogador>
    )
        ;
}
