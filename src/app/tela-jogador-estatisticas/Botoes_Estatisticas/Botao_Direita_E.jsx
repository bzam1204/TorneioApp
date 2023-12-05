'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_estisticas";

import imagem_cartao from '../../../../public/img/botoes_jogador/direita-5.png'
import image_url from "../../../../public/img/botoes_estatisticas/substituicao.png";
import {useRecoilState} from "recoil";
import {metadados_partida} from "../../../State/partida.metadados";
import {useRouter} from "next/navigation";

export default function Botao_Direita_E({jogador_id, time}) {
    const router = useRouter()
    const [_metadados_partida, setPartidaConfig] = useRecoilState(metadados_partida)

    return (
        <Container_Cartao onClick={function () {
            setTimeout(router.push(`/substituicao?id=${jogador_id}&time=${time}`), 100)
        }} style={{borderRadius: '20px 0 0 20px'}} imagem_url={imagem_cartao.src}>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
            <Nome_Opcao style={{textAlign: "center"}}>substituição</Nome_Opcao>
        </Container_Cartao>
    )
}