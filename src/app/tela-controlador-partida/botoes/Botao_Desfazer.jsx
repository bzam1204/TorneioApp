import imagem_botao from '../../../../public/img/botoes_especiais/desfazer_half_verde.png'
import imagem_botao_hover from '../../../../public/img/botoes_especiais/desfazer_half_verde_hovered.png'
import imagem_botao_pressionado from '../../../../public/img/botoes_especiais/desfazer_half_verde_pressionado.png'


import styled from "styled-components";
import {useSearchParams} from "next/navigation";
import {useState} from "react";
import {useRecoilState} from "recoil";
import {ultima_estatistica} from "../../../State/partida.metadados";

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

async function buscaEstatisticas(setState) {
    const response = await fetch(`http://localhost:3000/api/estatisticas`)
    const data = await response.json()
    const lenth = data.length
    await setState(`${data[lenth - 1].id}   ${data[lenth - 1].categoria.nome} de ${data[lenth - 1].jogador.nome}`)
}

async function deleteUltimaEstatistica(setUltimaEstatistica, partida_id) {
    await fetch(`http://localhost:3000/api/estatisticas/ultima?partida_id=${partida_id}`, {
        method: 'DELETE'
    })

    await buscaEstatisticas(setUltimaEstatistica)

}

export default function Botao_Desfazer() {
    const [ultimaEstatistica, setUltimaEstatistica] = useRecoilState(ultima_estatistica)
    const search = useSearchParams()
    const partida_id = parseInt(search.get('id'))

    return (<Container_Botao_Avancar
        onClick={() => {
            console.log('desfazer')
            deleteUltimaEstatistica(setUltimaEstatistica, partida_id)

        }}
        img_url={imagem_botao.src}
        img_hover_url={imagem_botao_hover.src}
        img_active_url={imagem_botao_pressionado.src}>
    </Container_Botao_Avancar>)
}