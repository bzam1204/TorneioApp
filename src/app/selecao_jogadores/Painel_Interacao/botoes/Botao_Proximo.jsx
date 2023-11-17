import imagem_botao from '../../../../../public/img/botoes_especiais/proximo_half_verde.png'
import imagem_botao_hover from '../../../../../public/img/botoes_especiais/proximo_half_verde_hovered.png'
import imagem_botao_pressionado from '../../../../../public/img/botoes_especiais/proximo_half_verde_pressionado.png'


import styled from "styled-components";

const Container_Botao_Avancar = styled.div`
  background-image: url(${props => props.img_url});
  display: flex;
  width: 229px;
  height: 128px;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: 229px 128px;
  justify-content: flex-start;
  text-transform: uppercase;
  text-align: center;
  font-family: Orbitron;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #62DBFF;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    background-image: url(${props => props.img_hover_url});
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`
export default function Botao_Proximo() {
    return (<Container_Botao_Avancar
        img_url={imagem_botao.src}
        img_hover_url={imagem_botao_hover.src}
        img_active_url={imagem_botao_pressionado.src}>
    </Container_Botao_Avancar>)
}