'use client'
import {Container_Cartao, Opcao_Icone, Nome_Opcao} from "../estilo/botao_estisticas";
import imagem_cartao from '../../../../public/img/botoes_jogador/esquerda-5.png'
import {useRouter} from "next/navigation";
import image_url from "../../../../public/img/botoes_estatisticas/voltar.png";
import {useRecoilState} from "recoil";
import {metadados_partida} from "../../../State/partida.metadados";

export default function Botao_Esquerda_E() {
    const router = useRouter()
    const [_metadados_partida, setPartidaConfig] = useRecoilState(metadados_partida)

    return (
        <Container_Cartao onClick={function () {
            setTimeout(router.push(`/tela-controlador-partida?id=${_metadados_partida.partida_id}`), 100)
        }} style={{borderRadius: '0 20px 20px 0'}} imagem_url={imagem_cartao.src}>
            <Nome_Opcao>voltar</Nome_Opcao>
            <Opcao_Icone image_url={image_url.src}></Opcao_Icone>
        </Container_Cartao>
    )
}