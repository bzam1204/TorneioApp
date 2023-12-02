'use client'
import styled from "styled-components";
import imagem_botao from '../../../../public/img/botoes_especiais/default_red.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/default_red_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/default_red_pressionado.png'
import {useRouter} from 'next/navigation';
import {useRecoilState} from "recoil";
import {time_is_running} from "../../../State/time_is_running";
import {useEffect, useState} from "react";

import '../estilo/style.css'
import socket from "../../../config/socket_config";

const Container_Botao_24_seg = styled.div`
  background-image: url(${props => props.img_url});
  width: calc(100% - 4.68vw);
  height: 7.2vw;
  border-radius: 1.46vw;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  align-items: center;
  padding: 0 2.34vw;
  transition: 20ms;

  &:hover {
    background-image: url(${props => props.img_hover_url});
  }

  &:active p {
    line-height: 4.97vw;
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`


function handleBotaoCinza(_time_is_running) {
    const botao = document.querySelector('#botao_24_seg')
    if (!_time_is_running) {
        botao.classList.add('botao_cinza')
    } else {
        botao.classList.remove('botao_cinza')
    }
}

export const Label_24_seg = styled.p`
  font-family: Orbitron, serif;
  width: fit-content;
  font-size: 4.39vw;
  font-style: normal;
  font-weight: 700;
  height: 4.97vw;
  line-height: 4.46vw;
  color: #FE5E5E;
  user-select: none;
`

function resetPossessionTime() {
    socket.emit('reset');
}

function emitUpdatedInfo(setTempo) {
    socket.emit('emitUpdatedInfo', (dados) => {
        setTempo(dados.currentTime)
    });

}

export default function Botao_24_Seg() {
    const router = useRouter()
    const [_time_is_running, setTimeIsRunning] = useRecoilState(time_is_running)
    const [tempo_possessao, setTempoPossessao] = useState(24)

    useEffect(() => {

        socket.on('update', ({isRunning}) => {
            setTimeIsRunning(isRunning)
            handleBotaoCinza(isRunning)
        })

    }, [_time_is_running])

    useEffect(() => {
        socket.on('update', ({possessionTime}) => {
            setTempoPossessao(possessionTime)
        })
    }, [tempo_possessao])


    return (<Container_Botao_24_seg

        onClick={() => {
            resetPossessionTime()
        }}
        id={'botao_24_seg'}
        img_url={imagem_botao.src}
        img_hover_url={imagem_botao_hover.src}
        img_active_url={imagem_botao_pressionado.src}>

        <Label_24_seg>{tempo_possessao}</Label_24_seg>
    </Container_Botao_24_seg>)
}