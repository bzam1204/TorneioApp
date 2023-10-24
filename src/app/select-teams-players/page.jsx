'use client'
import React, {useEffect, useState} from 'react'
import AutocompleteInputTimeB from "./autocomplete_input_timeB";
import AutocompleteInputTimeA from "./autocomplete_input_timeA";
import ComboCriarJogador from "./ComboCriarJogador/ComboCriarJogador";
import ListaJogadores from "./ListaJogadores";
import {useRecoilState} from "recoil";
import {jogador_selecionado, lista_times_jogadores} from "../../state/placar";


export default function Page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [lista_jogadores, setListaJogadores] = useRecoilState(lista_times_jogadores)
    const [jogador_escolhido, setJogadorEscolhido] = useRecoilState(jogador_selecionado)

    useEffect(() => {

    }, [jogador_escolhido]);

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            gap: '50px',
            padding: '50px'
        }}>
            <p> selecione times e jogadores </p>

            <div style={{display: "flex", gap: '50px'}}>
                <AutocompleteInputTimeA/>
                <AutocompleteInputTimeB/>
            </div>
            <div style={{display: "flex", gap: '50px'}}>
                <ListaJogadores nome_time={'timeA'}/>
                <ListaJogadores nome_time={'timeB'}/>
            </div>

            <ComboCriarJogador nome_time={'timeB'}/>
            <div style={{display: "flex", gap: '50px'}}>

                <button onClick={function () {
                    const selector = document.querySelector('#AutocompleteInputPlayersFortimeB')
                    console.log(jogador_escolhido)
                    setListaJogadores(prev => {
                        return {...prev, timeA: [...prev.timeA, jogador_escolhido]}
                    })
                }}> Adicionar Jogador ao Time A
                </button>
                <button onClick={function () {
                    const selector = document.querySelector('#AutocompleteInputPlayersFortimeB')
                    console.log(jogador_escolhido)
                    setListaJogadores(prev => {
                        return {...prev, timeB: [...prev.timeB, jogador_escolhido]}
                    })
                }}> Adicionar Jogador ao Time B
                </button>
            </div>
        </div>

    )
}
