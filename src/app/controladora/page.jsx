"use client";
import React, {useState, useEffect} from "react";

import {Container_Principal, Container_Time} from "./estilo/estilo_page";
import Painel_Controle_Partida from "./Painel_Controle_Partida";
import Cartao_Jogador from "./Cartao_Jogador";


export default function Page() {

    const jogadores_selecionados_no_check_in = {
        time_a: [{
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }], time_b: [{
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            nome: 'Bruno',
            rota_imagem: '',
            numero_camisa: 76,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }]
    }

    return <>
        <Container_Principal>
            <Container_Time>
                {jogadores_selecionados_no_check_in.time_a.map(function (jogador, _key) {
                    return (<Cartao_Jogador dados_jogador={jogador} key={_key} index={_key}
                                            time={'time_a'}></Cartao_Jogador>)
                })}
            </Container_Time>
            <Painel_Controle_Partida/>
            <Container_Time>
                {jogadores_selecionados_no_check_in.time_b.map(function (jogador, _key) {
                    return (<Cartao_Jogador dados_jogador={jogador} key={_key} index={_key}
                                            time={'time_b'}></Cartao_Jogador>)
                })}
            </Container_Time>
        </Container_Principal>
    </>
}