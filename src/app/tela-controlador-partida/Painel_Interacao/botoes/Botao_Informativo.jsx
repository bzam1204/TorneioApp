import imagem_botao from '../../../../../public/img/botoes_especiais/default_info.png'

import {useRouter} from 'next/navigation';


import styled from "styled-components";

const Container_Botao_Sorteio = styled.div`
  background-image: url(${props => props.img_url});
  width: 100%;
  height: 5.12vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
export default function Botao_Informativo() {
    const router = useRouter()

    return (
        <Container_Botao_Sorteio
            img_url={imagem_botao.src}>
        </Container_Botao_Sorteio>
    )
}