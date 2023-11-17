import imagem_botao from '../../../../../public/img/botoes_especiais/tela_inicial_red.png'
import imagem_botao_hover from '../../../../../public/img/botoes_especiais/tela_inicial_red_hovered.png'
import imagem_botao_pressionado from '../../../../../public/img/botoes_especiais/tela_inicial_red_pressionado.png'


import styled from "styled-components";

const Container_Botao_Tela_Inicial = styled.div`
  background-image: url(${props => props.img_url});
  display: flex;
  width: 100%;
  height: 7.2vw;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: 100% 7.2vw;
  justify-content: flex-start;
  text-transform: uppercase;
  text-align: center;
  font-family: Orbitron;
  font-size: 1.75vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #62DBFF;
  align-items: center;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    background-image: url(${props => props.img_hover_url});
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`
export default function Botao_Sortear() {
    return (
        <Container_Botao_Tela_Inicial
            img_url={imagem_botao.src}
            img_hover_url={imagem_botao_hover.src}
            img_active_url={imagem_botao_pressionado.src}>
        </Container_Botao_Tela_Inicial>)
}