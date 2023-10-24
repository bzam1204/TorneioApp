"use client";
import React, {useEffect, useState} from "react";
import {lista_times_jogadores} from "../../state/placar";
import {useRecoilState} from "recoil";

export default function ListaJogadores({nome_time}) {
    const [lista_jogadores, setListaJogadores] = useRecoilState(lista_times_jogadores)

    useEffect(function () {

    }, [lista_jogadores])

    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch("./api/players/all");
    //
    //         const _lista_jogadores = await response.json();
    //
    //         _lista_jogadores.forEach((element) => {
    //         });
    //         setListaJogadores(_lista_jogadores)
    //
    //     })();
    // }, []);

    return (<ul style={{
        border: '1px solid black', width: '200px', height: '200px'
    }} id={`lista_jogadores_${nome_time}`}>
        {lista_jogadores[nome_time] && lista_jogadores[nome_time].map((jogador, index) => {
            return <p key={index}> {jogador.nome}</p>;
        })}
    </ul>);
}
