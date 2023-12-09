'use client'
import imagem_botao from '../../../../public/img/botoes_especiais/default_info.png'
import {Poppins} from 'next/font/google'
import {useRouter, useSearchParams} from 'next/navigation';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '700'],})


import styled from "styled-components";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {ultima_estatistica} from "../../../State/partida.metadados";

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
  font-size: 1.2vw;
  font-weight: 700;
  text-transform: lowercase;
  height: fit-content;


`

function formatarTempo(dataString) {
    const data = new Date(dataString);

// Extrair minutos e segundos
    const minutos = data.getMinutes();
    const horas = data.getHours();
    const segundos = data.getSeconds();

// Formatar para 'mm:ss'
    const tempoFormatado = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    return tempoFormatado
}

async function buscaEstatisticas(setState, partida_id) {
    const response = await fetch(`http://localhost:3000/api/estatisticas`)
    const data = await response.json()

    const compararPorDataCriacao = (a, b) => {
        const dataA = new Date(a.createdAt);
        const dataB = new Date(b.createdAt);

        return dataA - dataB;
    };

// Ordenar o array pela data de criação
    const dadosOrdenados = data.sort(compararPorDataCriacao);
    const length = dadosOrdenados.length;

    console.log(parseInt(dadosOrdenados[length - 1].partidaId), partida_id)
    if (parseInt(dadosOrdenados[length - 1].partidaId) === parseInt(partida_id)) {
        await setState(`${formatarTempo(dadosOrdenados[length - 1].createdAt)} - ${dadosOrdenados[length - 1].categoria.nome} de ${dadosOrdenados[length - 1].jogador.nome}`)
    } else {
        setState(null)
    }
    console.log(dadosOrdenados)
}

export default function Botao_Informativo() {
    const search = useSearchParams()
    const partida_id = parseInt(search.get('id'))
    const router = useRouter()
    const [ultimaEstatistica, setUltimaEstatistica] = useRecoilState(ultima_estatistica)

    useEffect(() => {
        buscaEstatisticas(setUltimaEstatistica, partida_id)
    }, [ultimaEstatistica])

    return (<Container_Botao_Sorteio
        img_url={imagem_botao.src}>
        <Label_Informacao className={poppins.className}>{ultimaEstatistica}</Label_Informacao>
    </Container_Botao_Sorteio>)
}