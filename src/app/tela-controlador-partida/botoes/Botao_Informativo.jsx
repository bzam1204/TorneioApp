'use client'
import imagem_botao from '../../../../public/img/botoes_especiais/default_info.png'
import {Poppins} from 'next/font/google'
import {useRouter} from 'next/navigation';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '700'],})


import styled from "styled-components";

const Container_Botao_Sorteio = styled.div`
  background-image: url(${props => props.img_url});
  width: calc(100% - 4.68vw);
  height: 5.12vw;
  background-repeat: no-repeat;
  padding: 0 2.34vw;
  display: flex;
  user-select: none;
  align-items: center;
  background-size: 100% 100%;
`

export const Label_Informacao = styled.p`
  background: linear-gradient(180deg, rgba(226, 226, 226, 0.83) 0%, rgba(214, 214, 214, 0.83) 52.63%, rgba(115, 115, 115, 0.83) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.75vw;
  font-weight: 700;
  height: fit-content;
`

export default function Botao_Informativo() {
    const router = useRouter()

    return (<Container_Botao_Sorteio
        img_url={imagem_botao.src}>
        <Label_Informacao className={poppins.className}>Cesta de 2 de 76</Label_Informacao>
    </Container_Botao_Sorteio>)
}