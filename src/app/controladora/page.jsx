"use client";
import React, {useState, useEffect} from "react";


import {Container_Principal, Container_Time} from "./estilo/estilo_page";
import Painel_Controle_Partida from "./Painel_Controle_Partida";
import Cartao_Jogador from "./Cartao_Jogador";


export default function Page() {


    const jogadores_selecionados_no_check_in = {
        time_a: [{
            id: 1,
            nome: 'Guilherme Borba',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCmk4aqSoZiW92gW10vMY4ZpL_gpFIW6S9N2oqqApU_ieFuqjQcQpnHZeCeyX4uvOUelXX7K_e1iYcxeqLqDioexa_z=w1920-h943',
            numero_camisa: 20,
            pontuacao: 0,
            cestas_3: 0,
            cestas_2: 0,
            cestas_1: 0,
            faltas: 0,
            rebotes: 0,
            assistencias: 0,
            roubos: 0
        }, {
            id: 2,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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
            id: 1,
            nome: 'Bruno Zamorano',
            imagem_url: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958',
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