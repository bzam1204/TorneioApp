"use client";
import React, {useState, useEffect} from "react";
import {useRouter} from 'next/navigation';
import './estilo/style.css'

import {
    Container_Cartao_Jogador_Time_A,
    Container_Cartao_Jogador_Time_B,
    Dica_Cor_Botao,
    Imagem_Jogador,
    Nome_Jogador,
    Numero_Camisa,
} from "./estilo/estilo_cartao_jogador";
import colors from "../../js/colors";
import {useRecoilState} from "recoil";
import {jogadores_cadastrados} from "../../state/jogadores_cadastrados";
import {times_montados} from "../../state/times_montados";

export default function Cartao_Jogador({dados_jogador, index, time}) {
    const router = useRouter()
    const [_jogadores_cadastrados, setJogadoresCadastrados] = useRecoilState(jogadores_cadastrados)
    const [_times_montados, setTimesMontados] = useRecoilState(times_montados)


    function retornaCorDoCartao() {
        let cor = {fundo: 'Não atribuído', indicador_botao: '', borda: ''}

        if (time === 'time_a') {
            if (index === 0) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.azul.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 1) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.verde.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 2) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.vermelho.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 3) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.laranja.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
            if (index === 4) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_esquerdo.cinza.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_esquerda
            }
        }
        if (time === 'time_b') {
            if (index === 0) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.azul.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.azul.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 1) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.verde.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.verde.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 2) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.vermelho.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.vermelho.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 3) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.laranja.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.laranja.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
            if (index === 4) {
                cor.fundo = colors.cores_fundo_botoes_laterais.lado_direito.amarelo.fundo
                cor.indicador_botao = colors.cores_fundo_botoes_laterais.lado_direito.amarelo.indicador_botao_cor
                cor.borda = colors.borda_indicador_cor_botao_direita
            }
        }
        return cor
    }

    useEffect(() => {

    }, [_times_montados]);

    return (<>
        {time === 'time_a' ? <Container_Cartao_Jogador_Time_A onClick={function () {

            if (dados_jogador.nome === "insira um jogador") {
                const container_principal = document.querySelector('#container_principal')
                const select = document.createElement('select')
                const botao_adicionar = document.createElement('article')
                const layer = document.createElement('div')

                function retiraLayer(e) {
                    if (e.target.tagName === "DIV") {
                        e.stopImmediatePropagation()
                        e.stopPropagation()
                        e.preventDefault()
                        layer.remove()
                    }
                }

                function addOptions(jogador) {
                    var novaOpcao = document.createElement('option');
                    novaOpcao.value = JSON.stringify(jogador)
                    novaOpcao.text = jogador.nome + ' ' + jogador.numero_camisa;
                    select.add(novaOpcao);
                }

                _jogadores_cadastrados.map((jogador, index) => {
                    addOptions(jogador, index)
                })
                select.classList.add('jogadores_select')

                botao_adicionar.classList.add('botao_adicionar')
                botao_adicionar.innerText = 'Adicionar'
                botao_adicionar.addEventListener(`click`, () => {
                    setTimesMontados(prev => {
                        let _time_a = [...prev.time_a]
                        let jogador_selecionado = JSON.parse(select.value)
                        _time_a[index] = jogador_selecionado
                        return {...prev, time_a: _time_a}
                    })
                    layer.remove()
                })

                layer.addEventListener(`click`, retiraLayer)
                layer.classList.add('layer_jogadores_select')
                layer.appendChild(select)
                layer.appendChild(botao_adicionar)

                container_principal.appendChild(layer)

            } else {
                router.push(`/tela-jogador-partida?dados-jogador=${JSON.stringify(dados_jogador)}`)
            }
        }} background_color={retornaCorDoCartao().fundo}>
            <Dica_Cor_Botao borda={retornaCorDoCartao().borda} cor={retornaCorDoCartao().indicador_botao}/>
            <Imagem_Jogador imagem_url={dados_jogador.imagem_url}/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(21.66vw - 48px)',
                alignItems: "center",
                padding: '24px'
            }}>

                <Nome_Jogador>
                    <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
                </Nome_Jogador>
                <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
            </div>
        </Container_Cartao_Jogador_Time_A> : null}

        {time === 'time_b' ? <Container_Cartao_Jogador_Time_B onClick={function () {
            if (dados_jogador.nome === "insira um jogador") {
                const container_principal = document.querySelector('#container_principal')
                const select = document.createElement('select')
                const botao_adicionar = document.createElement('article')
                const layer = document.createElement('div')

                function retiraLayer(e) {
                    if (e.target.tagName === "DIV") {
                        e.stopImmediatePropagation()
                        e.stopPropagation()
                        e.preventDefault()
                        layer.remove()
                    }
                }

                function addOptions(jogador) {
                    var novaOpcao = document.createElement('option');
                    novaOpcao.value = JSON.stringify(jogador)
                    novaOpcao.text = jogador.nome + ' ' + jogador.numero_camisa;
                    select.add(novaOpcao);
                }

                _jogadores_cadastrados.map((jogador, index) => {
                    addOptions(jogador, index)
                })
                select.classList.add('jogadores_select')

                botao_adicionar.classList.add('botao_adicionar')
                botao_adicionar.innerText = 'Adicionar'
                botao_adicionar.addEventListener(`click`, () => {
                    setTimesMontados(prev => {
                        let _time_b = [...prev.time_b]
                        let jogador_selecionado = JSON.parse(select.value)
                        _time_b[index] = jogador_selecionado
                        return {...prev, time_b: _time_b}
                    })
                    layer.remove()

                })

                layer.addEventListener(`click`, retiraLayer)
                layer.classList.add('layer_jogadores_select')
                layer.appendChild(select)
                layer.appendChild(botao_adicionar)

                container_principal.appendChild(layer)

            } else {
                router.push(`/tela-jogador-partida?dados-jogador=${JSON.stringify(dados_jogador)}`)
            }
        }} background_color={retornaCorDoCartao().fundo}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(21.66vw - 48px)',
                alignItems: "center",
                padding: '24px'
            }}>

                <Numero_Camisa>{dados_jogador.numero_camisa}</Numero_Camisa>
                <Nome_Jogador style={{textAlign: "right"}}>
                    <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
                </Nome_Jogador>
            </div>
            <Imagem_Jogador imagem_url={dados_jogador.imagem_url}/>
            <Dica_Cor_Botao borda={retornaCorDoCartao().borda} cor={retornaCorDoCartao().indicador_botao}/>
        </Container_Cartao_Jogador_Time_B> : null}
    </>)
}