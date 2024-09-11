'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_estisticas";
import image_url from "../../../../public/img/botoes_estatisticas/cesta_um.png";

import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-1.png'
import {useRouter, useSearchParams} from "next/navigation";
import { criaEstatistica } from "../../../lib/actions";


// export async function criaEstatistica(categoria_id, partida_id, time, jogador_id, router) {
//     let time_parsed
//     time === '0' ? time_parsed = false : time_parsed = true


//     const dados = {
//         categoriaId: parseInt(categoria_id),
//         jogadorId: parseInt(jogador_id),
//         time: time_parsed,
//         partidaId: parseInt(partida_id)
//     }
//     console.log('dados: ', dados)
//     const url = 'http://localhost:3000/api/estatisticas';

//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // Adicione quaisquer cabeçalhos adicionais que seu servidor possa exigir
//         },
//         body: JSON.stringify(dados)

//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//         .then((data) => {
//             console.log(data)
//             router.push(`/tela-controlador-partida?id=${partida_id}`)
//         })

// }

export default function Botao_Esquerda_A() {
    const searchParams = useSearchParams()
    const jogador_id = searchParams.get("id")
    const _time = searchParams.get("time")
    const partida_id = searchParams.get("partida_id")
    const categoria_id = "7a29082c-4640-4d92-8230-965d4629416b" //id da cesta de um no banco.. isso deve melhorar
    const router = useRouter()


    return (
        <Container_Cartao
            onClick={() => {
                criaEstatistica(categoria_id, partida_id, _time, jogador_id, router)
            }}
            style={{borderRadius: '0 20px 20px 0'}}
            imagem_url={imagem_cartao.src}>

            <Nome_Opcao style={{textAlign: "center"}}>cesta de 1 ponto</Nome_Opcao>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
        </Container_Cartao>
    )
}