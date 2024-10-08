'use client'
import {Container_Jogadores, Container_Principal} from './estilo/opcoes'

import Botao_Esquerda_A from "./Botoes_Opcoes/Botao_Esquerda_A";
import Botao_Esquerda_B from "./Botoes_Opcoes/Botao_Esquerda_B";
import Botao_Esquerda_C from "./Botoes_Opcoes/Botao_Esquerda_C";
import Botao_Esquerda_D from "./Botoes_Opcoes/Botao_Esquerda_D";
import Botao_Esquerda_E from "./Botoes_Opcoes/Botao_Esquerda_E";
import Botao_Direita_A from "./Botoes_Opcoes/Botao_Direita_A";
import Botao_Direita_B from "./Botoes_Opcoes/Botao_Direita_B";
import Botao_Direita_C from "./Botoes_Opcoes/Botao_Direita_C";
import Botao_Direita_D from "./Botoes_Opcoes/Botao_Direita_D";
import Botao_Direita_E from "./Botoes_Opcoes/Botao_Direita_E";
import Botao_Finalizar_Partida from "./Botoes_Opcoes/Botao_Finalizar_Partida";


export default function Page() {
    return <>

        <Container_Principal id={'main'}>

            <Container_Jogadores>
                <Botao_Esquerda_A/>
                <Botao_Esquerda_B/>
                <Botao_Esquerda_C/>
                <Botao_Esquerda_D/>
                <Botao_Esquerda_E/>
            </Container_Jogadores>
            <img src="/img/frame_opcoes.png" alt=""/>

            <Container_Jogadores>
                <Botao_Direita_A/>
                <Botao_Direita_B/>
                <Botao_Direita_C/>
                <Botao_Direita_D/>
                <Botao_Direita_E/>
            </Container_Jogadores>
            <Botao_Finalizar_Partida id={'modal_finalizar_partida'}/>
        </Container_Principal>
    </>
};

