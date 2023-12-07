'use client'
import imagem_botao from '../../../../public/img/botoes_especiais/default_red.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/default_red_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/default_red_pressionado.png'
import {useRouter, useSearchParams} from 'next/navigation';


import styled from "styled-components";
import {useRecoilState} from "recoil";
import {metadados_partida} from "../../../State/partida.metadados";

const Container_Botao_Tela_Inicial = styled.div`
  background-image: url(${props => props.img_url});
  width: 100%;
  height: 7.2vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  transition: 20ms;
  font-family: Orbitron, serif;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 4.46vw;
  text-indent: 1vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #DF3D3D;
  user-select: none;

  &:hover {
    background-image: url(${props => props.img_hover_url});
  }

  &:active {
    background-image: url(${props => props.img_active_url});
  }
`
export default function Botao_Sortear() {
    const [_metadados_partida, setPartidaConfig] = useRecoilState(metadados_partida)
    const search = useSearchParams()
    const router = useRouter()

    const partida_id = parseInt(search.get('partida_id'))


    return (<Container_Botao_Tela_Inicial
        onClick={function () {
            //para o usuario ver a animação inteira
            setTimeout(function () {
                router.push(`/tela-controlador-partida?id=${partida_id}`)
            }, 100)
        }}
        img_url={imagem_botao.src}
        img_hover_url={imagem_botao_hover.src}
        img_active_url={imagem_botao_pressionado.src}>Voltar para a Partida
    </Container_Botao_Tela_Inicial>)
}