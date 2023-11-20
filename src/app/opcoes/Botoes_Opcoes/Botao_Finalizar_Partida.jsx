'use client'
import {useRouter} from "next/navigation";
import imagem_botao_amarelo from '../../../../public/img/botoes_especiais/default_amarelo.png'
import imagem_botao_hover_amarelo from '../../../../public/img/botoes_especiais/default_amarelo_hovered.png'
import imagem_botao_pressionado_amarelo from '../../../../public/img/botoes_especiais/default_amarelo_pressionado.png'
import imagem_botao_red from '../../../../public/img/botoes_especiais/voltar_partida_red.png'
import imagem_botao_hover_red from '../../../../public/img/botoes_especiais/voltar_partida_red_hovered.png'
import imagem_botao_pressionado_red from '../../../../public/img/botoes_especiais/voltar_partida_red_pressionado.png'
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {metadados_partida} from '../../../State/partida.metadados'
import {useEffect} from "react";

const Container_Botao = styled.div`
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
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  backdrop-filter: blur(7px);
`
const Modal = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  background: #13061D;
  padding: 32px;
  gap: 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
`


export default function Botao_Finalizar_Partida() {
    const router = useRouter()
    const _metadados_partida = useRecoilState(metadados_partida)
    useEffect(() => {
    }, []);

    function voltarParaPartida(partida_id) {
        router.push(`tela-controlador-partida/`)
    }

    function finalizarPartida(partida_id) {
        router.push(`/`)
    }

    return (<Layer id={'modal_finalizar_partida'}>
        <Modal>

            <Label>Deseja Finalizar a Partida?</Label>
            <Container_Botao
                //botao amarelo
                onclick={function () {
                    finalizarPartida(_metadados_partida.partida_id)
                }}
                img_url={imagem_botao_amarelo.src}
                img_hover_url={imagem_botao_hover_amarelo.src}
                img_active_url={imagem_botao_pressionado_amarelo.src}>
                <Label>finalizar partida</Label>
            </Container_Botao>
            <Container_Botao
                //botao vermelho
                onClick={function () {
                    voltarParaPartida(_metadados_partida.partida_id)
                }}
                img_url={imagem_botao_red.src}
                img_hover_url={imagem_botao_hover_red.src}
                img_active_url={imagem_botao_pressionado_red.src}>
            </Container_Botao>
        </Modal>
    </Layer>)
}