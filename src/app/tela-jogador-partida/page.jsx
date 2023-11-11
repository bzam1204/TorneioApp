"use client";
import React, {useState, useEffect} from "react";
import {useRouter, useSearchParams} from 'next/navigation'
import {Container_Principal, Container_Botoes} from "./estilo/estilo_page";
import Painel_Jogador_Info from "./Painel_Jogador_Info";
import Cartao_Botao from "./Cartao_Botao";

const botoes_info = {
    esquerda: [{
        nome: 'CESTA DE 1 PONTO',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaDx5ZTPMRGa0cFBifDlBL5lt-CCG7aBwYA3nop8YKuiWV3xxJ2Vi7DyPspt6PDOFlvl4lVe3oVtb3aT6PAoW2BNjNY5Mg=w1920-h943'
    }, {
        nome: 'CESTA DE 2 PONTOS',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaAMvUyeJpw-ZRtguAF-9Et8ZVhmEqmnMm-lbJHZNcV337Vt64NukOmflPNzS44-uE_jzyk91-z9xPBU-vLKx-9tXEtqGA=w1920-h943'
    }, {
        nome: 'CESTA DE 3 PONTOS',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBZ5rTIW71OyG49oSy7pwza-SDVQne_YW4B6-9yHEKlLEy_2SAFVP8pJqNCYRzdBSKF5jH7m321zbS7iPvrLs4btd9JFw=w1920-h943'
    }, {
        nome: 'FALTA',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBBn_WBwg5hewYU1qWmcp1ll6KtLyaqNpNKTPmnTRSjbKCIqawP3z1_8U_HBctKc5B3UsJTKT_zT8D12lq8IzFYOmKq9g=w1920-h943'
    }, {
        nome: 'VOLTAR',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaB3xQ7uaiehbdo4eN5dxXgZAG1T9xafgxZjtDvlOdkfL530R_qxKRcPfHWOMxff1OCD_nTb2eVXoIMGZVXViI0R2zHOdA=w1920-h943'
    },], direita: [{
        nome: 'ASSISTÊNCIA',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaD13kj3aYczFqNTr_nHvx-4VuBUSF_iWJDOvsSTEdOnG5lxcOujcEuZdrX0guiseAOYq5nSC1zfWI_u9rCa6QdXST0OOg=w1920-h943'
    }, {
        nome: 'BLOQUEIO / TOCO',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaAIJU-Bn9sfx0SjZDx4--pjk-pPIjSsfSWbtmoXtSd12fetMpxbulm6vKDXK7K4WZp_DPVnKO82efJUGFywhr_94eaTaw=w1920-h943'
    }, {
        nome: 'ROUBO',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaBQY5Po6yHcxO8mD3kXOzmp1Gk6nl7oIlWdTd95koMif37dEACFhkcOQBCn42RO4MsWYDTD8nKQVqujWkvHsvRX0Prdyw=w1920-h943'
    }, {
        nome: 'REBOTE',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaCZ3lLVI6qPH3ZR0g7cP4ba7GQbW2Csvg34Ig-kh3GNGr8aWcjPGpHOTX3pjqfaM4GMKSbqnsDZudlJLzCFU_Q2C3R6RA=w1920-h943'
    }, {
        nome: 'SUBSTITUIÇÃO',
        imagem_url: 'https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaDvc-BSVaVRhmse7JQ95tfvkULWUGUHmljGqwTgUK9S85JDXwLY8wA5RqwutaVzTCA8ykM_LyVcXO7OGV9pjWvDVatt2Q=w1920-h943'
    },]
}

export default function Page() {
    const router = useRouter()


    const searchParams = useSearchParams()
    const _dados_jogador = JSON.parse(searchParams.get('dados-jogador'))


    useEffect(() => {
        function keyDown(e) {
            if (e.keyCode === 27) router.push('./controladora')
        }

        window.addEventListener('keydown', keyDown)

        return () => {
            window.removeEventListener('keydown', keyDown)
        }


    }, []);

    return <>
        <Container_Principal>
            <Container_Botoes>
                {botoes_info.esquerda.map(function (_dados_botao, _key) {
                    return (<Cartao_Botao dados_botao={_dados_botao}
                                          dados_jogador={_dados_jogador}
                                          key={_key}
                                          index={_key}
                                          lado={'ESQUERDO'}>

                    </Cartao_Botao>)
                })}
            </Container_Botoes>
            <Painel_Jogador_Info dados_jogador={_dados_jogador}/>
            <Container_Botoes>
                {botoes_info.direita.map(function (_dados_botao, _key) {
                    return (<Cartao_Botao
                        dados_jogador={_dados_jogador}
                        dados_botao={_dados_botao}
                        key={_key}
                        index={_key}
                        lado={'DIREITO'}>
                    </Cartao_Botao>)
                })}
            </Container_Botoes>
        </Container_Principal>
    </>
}