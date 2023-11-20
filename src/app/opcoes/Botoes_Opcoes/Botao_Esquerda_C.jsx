'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_opcao";
import {useEffect, useState} from "react";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-3.png'
import Botao_Finalizar_Partida from "./Botao_Finalizar_Partida";
import {createRoot} from 'react-dom/client';


export default function Botao_Esquerda_C() {
    const [modal_is_hidden, setModalIsHidden] = useState(true)

    useEffect(() => {
        alternaVisibilidadeModalFinalizarPartida()
    }, [modal_is_hidden]);

    function alternaVisibilidadeModalFinalizarPartida() {
        const modal = document.getElementById('modal_finalizar_partida')
        modal.style.display = modal_is_hidden ? 'none' : 'flex'
    }


    return <Container_Cartao
        onClick={function () {
            setModalIsHidden(!modal_is_hidden)
        }}
        style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src}>

        <Nome_Opcao style={{textAlign: "center"}}>finalizar partida</Nome_Opcao>
        <Opcao_Icone>()</Opcao_Icone>

    </Container_Cartao>
}