"use client";
import React, {useState, useEffect} from "react";
import {
    Frame_Container_Painel_Jogador_Info, Container_Painel_Jogador_Info, Imagem_Jogador, Nome_Jogador, Numero_Camisa

} from "./estilo/estilo_painel_jogador_info";


export default function Painel_Jogador_Info({dados_jogador}) {
    return (<Frame_Container_Painel_Jogador_Info>
        <Container_Painel_Jogador_Info>


            <Nome_Jogador>
                <pre> {dados_jogador.nome.replace(' ', '\n')}</pre>
            </Nome_Jogador>
            <Imagem_Jogador imagem_url={dados_jogador.imagem_url}></Imagem_Jogador>

            <Numero_Camisa>
                {dados_jogador.numero_camisa}
            </Numero_Camisa>
        </Container_Painel_Jogador_Info>
    </Frame_Container_Painel_Jogador_Info>)
}