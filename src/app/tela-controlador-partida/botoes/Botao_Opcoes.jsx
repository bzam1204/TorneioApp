import imagem_botao from '../../../../public/img/botoes_especiais/opcoes_half_azul.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/opcoes_half_azul_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/opcoes_half_azul_pressionado.png'


import styled from "styled-components";
import {useRouter, useSearchParams} from "next/navigation";

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
export default function Botao_Opcoes() {
    const router = useRouter()
    const search_params = useSearchParams()
    const partida_id = parseInt(search_params.get('id'))
    return (<Container_Botao_Avancar
        onClick={function () {
            //para o usuario ver a animação inteira
            setTimeout(function () {
                router.push(`/opcoes?partida_id=${partida_id}`)
            }, 100)
        }}
        img_url={imagem_botao.src}
        img_hover_url={imagem_botao_hover.src}
        img_active_url={imagem_botao_pressionado.src}>
    </Container_Botao_Avancar>)
}