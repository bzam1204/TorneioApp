import imagem_botao from '../../../../public/img/botoes_especiais/sortear_amarelo.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/sortear_amarelo_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/sortear_amarelo_pressionado.png'
import {useRouter} from 'next/navigation';


import styled from "styled-components";

const Container_Botao_Sorteio = styled.div`
  background-image: url(${props => props.img_url});
  width: 100%;
  height: 7.2vw;
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
export default function Botao_Sortear() {
    const router = useRouter()

    return (
        <Container_Botao_Sorteio
            onClick={function () {
                //para o usuario ver a animação inteira
                setTimeout(function () {
                    router.push(`/tela-controlador-partida`)
                }, 100)
            }}
            img_url={imagem_botao.src}
            img_hover_url={imagem_botao_hover.src}
            img_active_url={imagem_botao_pressionado.src}>
        </Container_Botao_Sorteio>)
}