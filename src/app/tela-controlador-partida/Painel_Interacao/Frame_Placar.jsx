'use client'
import imagem_botao from '../../../../public/img/botoes_especiais/placar_frame.png'

import {useRouter} from 'next/navigation';


import styled from "styled-components";

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

    return (
        <Container_Botao_Tela_Inicial
            img_url={imagem_botao.src}>
            <Pontuacao>123</Pontuacao>
            <Pontuacao>125</Pontuacao>
        </Container_Botao_Tela_Inicial>
    )
}