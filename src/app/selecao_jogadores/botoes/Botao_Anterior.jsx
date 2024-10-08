import imagem_botao from '../../../../public/img/botoes_especiais/avancar_half_azul.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/avancar_half_azul_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/avancar_half_azul_pressionado.png'


import styled from "styled-components";

const Container_Botao_Avancar = styled.div`
  background-image: url(${props => props.img_url});
  width: 16.76vw;
  height: 9.37vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  transition: 20ms;

  &:hover {
    background-image: url(${props => props.img_hover_url});
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`
export default function Botao_Anterior() {
    return (
        <Container_Botao_Avancar
            img_url={imagem_botao.src}
            img_hover_url={imagem_botao_hover.src}
            img_active_url={imagem_botao_pressionado.src}>
        </Container_Botao_Avancar>)
}