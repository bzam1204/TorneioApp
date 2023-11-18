'use client'
import imagem_botao from '../../../../../public/img/botoes_especiais/default_red.png'
import imagem_botao_hover from '../../../../../public/img/botoes_especiais/default_red_hovered.png'
import imagem_botao_pressionado from '../../../../../public/img/botoes_especiais/default_red_pressionado.png'
import {useRouter} from 'next/navigation';


import styled from "styled-components";

const Container_Botao_24_seg = styled.div`
  background-image: url(${props => props.img_url});
  width: calc(100% - 4.68vw);
  height: 7.2vw;
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
 
  &:active p{
    line-height: 4.97vw;
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`

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
export default function Botao_24_Seg() {
    const router = useRouter()

    return (<Container_Botao_24_seg

        img_url={imagem_botao.src}
        img_hover_url={imagem_botao_hover.src}
        img_active_url={imagem_botao_pressionado.src}>

        <Label_24_seg>24</Label_24_seg>
    </Container_Botao_24_seg>)
}