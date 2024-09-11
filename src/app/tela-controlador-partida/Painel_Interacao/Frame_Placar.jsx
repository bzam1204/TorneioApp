'use client'
import imagem_botao from '../../../../public/img/botoes_especiais/placar_frame.png'

import {useRouter} from 'next/navigation';


import styled from "styled-components";
import {useEffect, useState} from "react";
import socket from "../../../config/socket_config";
import {useRecoilState} from "recoil";
import {pontuacao_time_zero, pontuacao_time_um} from "../../../State/partida.metadados";
import connection from '../../../../signalr';

const Container_Botao_Tela_Inicial = styled.div`
  background-image: url(${props => props.img_url});
  height: 12.37vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: 20ms;
  margin-bottom: 6.66vw;
  padding: .52vw 1.75vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: calc(100% - 3.51vw);
  user-select: none;
`

export const Pontuacao = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Orbitron;
  font-size: 2.92vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export default function Frame_Placar() {
    const router = useRouter()
    const [time_zero, setTimeZero] = useRecoilState(pontuacao_time_zero)
    const [time_um, setTimeUm] = useRecoilState(pontuacao_time_um)
    const [pontuacao, setPontuacao] = useState(null)


    useEffect(() => {
        if (time_um === 0 && time_zero === 0) {
            connection.on('pontuacao', (dado) => {
                setTimeZero(dado.pontuacao.timeA)
                setTimeUm(dado.pontuacao.timeB)
                console.log(dado.pontuacao)
            })
        }
    }, [time_zero, time_um])


    if (time_zero !== null) {
        return (
            <Container_Botao_Tela_Inicial
                img_url={imagem_botao.src}>
                <Pontuacao>{time_zero}</Pontuacao>
                <Pontuacao>{time_um}</Pontuacao>
            </Container_Botao_Tela_Inicial>
        )
    } else {
        return (
            <Container_Botao_Tela_Inicial
                img_url={imagem_botao.src}>
                <Pontuacao>0</Pontuacao>
                <Pontuacao>0</Pontuacao>
            </Container_Botao_Tela_Inicial>
        )
    }
}