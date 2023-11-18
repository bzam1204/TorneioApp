import imagem_botao from '../../../../public/img/botoes_especiais/default_amarelo.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/default_amarelo_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/default_amarelo_pressionado.png'
import {useRouter} from 'next/navigation';


import styled from "styled-components";
import {useRecoilState} from "recoil";
import {time_is_running} from "../../../State/time_is_running";
import {useEffect} from "react";

const Container_Botao_Tempo = styled.div`
  background-image: url(${props => props.img_url});
  width: calc(34.69vw - 4.68vw);
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

  &:active p {
    line-height: 4.97vw;
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`

export const Label = styled.p`
  font-family: Orbitron, serif;
  width: fit-content;
  font-size: 1.75vw;
  font-style: normal;
  font-weight: 700;
  height: 4.97vw;
  text-transform: uppercase;
  line-height: 4.46vw;
  color: #DED500;
  user-select: none;
`

const Layer = styled.div`
  width: 100%;
  padding: 0;
  height: 100%;
  position: absolute;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  -webkit-filter:blur(4px);

  
`

const Modal = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 20px;
  background: linear-gradient(97deg, rgba(60, 37, 39, 0.30) -178.97%, rgba(11, 11, 79, 0.30) 247.86%);
 
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
`


export default function Botao_Finalizar_Partida() {
    const router = useRouter()


    return (
        <Layer>
            <Modal>

                <Label>Deseja Finalizar a Partida?</Label>
                <Container_Botao_Tempo
                    id={'botao_finalizar_partida'}
                    img_url={imagem_botao.src}
                    img_hover_url={imagem_botao_hover.src}
                    img_active_url={imagem_botao_pressionado.src}>
                    <Label>finalizar partida</Label>
                </Container_Botao_Tempo>
            </Modal>
        </Layer>
    )
}