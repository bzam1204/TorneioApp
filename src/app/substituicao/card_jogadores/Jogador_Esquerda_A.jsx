'use client'
import {Container_Cartao, Numero_Camisa, Nome_Jogador, Imagem_Jogador} from "../estilo/cartao_jogador";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-1.png'
import {useRouter, useSearchParams} from "next/navigation";
import {useRecoilState} from "recoil";
import {metadados_partida} from "../../../State/partida.metadados";

export function adicionarJogadorNoTime(_time, _jogador_selecionado_id, _partida_id, router, jogador_id) {

    if(jogador_id !== null) {
    }

    if(jogador_id === _jogador_selecionado_id) {
    }

    const dadosParaEnviar = {
        time: _time,
        jogadorId: _jogador_selecionado_id,
        titular: true,
        partidaId: parseInt(_partida_id),
    };

// Substitua 'https://sua-api.com/endpoint' pela URL real do seu endpoint
    const url = 'http://localhost:3000/api/time/jogador';

// Configurações da solicitação
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Adicione quaisquer cabeçalhos adicionais que seu servidor possa exigir
        },
        body: JSON.stringify(dadosParaEnviar)
    };

// Realizar a solicitação
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta da API:', data);
            // Lide com a resposta da API conforme necessário
            router.push(`/tela-controlador-partida?id=${_partida_id}`)
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
            // Lide com erros de solicitação conforme necessário
        });

}


export default function Jogador_Esquerda_A({dados_jogador}) {
    let router = useRouter()
    const searchParams = useSearchParams()
    let _time = null
    const jogador_id = searchParams.get("id")
    const _time_from_url = searchParams.get("time")
    const partida_id = parseInt(searchParams.get("partida_id"))
    _time_from_url === '0' ? _time = false : _time = true;

    return (
        <Container_Cartao
            onClick={
                async () => {
                    await adicionarJogadorNoTime(_time, dados_jogador.id, partida_id, router, jogador_id)
                }
            }
            style={{borderRadius: '0 20px 20px 0'}}
            imagem_url={imagem_cartao.src} className="jogador_esquerda_a">

            <div style={{display: "flex", alignSelf: "stretch", alignItems: "center"}}>
                <Imagem_Jogador style={{backgroundImage: `url(${dados_jogador.imagemUrl})`}}></Imagem_Jogador>
                <Nome_Jogador>
                    <pre>{dados_jogador.nome.replace(' ', '\n')}</pre>
                </Nome_Jogador>
            </div>
            <Numero_Camisa>{dados_jogador.numeroCamisa}</Numero_Camisa>
        </Container_Cartao>
    )
}