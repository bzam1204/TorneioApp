import {Container_Cartao} from "../estilo/cartao_jogador_esquerda";
import cartao_esquerda_a from '../../../../public/img/botoes_jogador/esquerda-1.png'

const dado_mockado = {
    id: 1,
    nome: "nome sobrenome",
    numero_camisa: 45,
    imagem_url: 'imagem_url'
}
export default function Jogador_Esquerda_A({dados_jogador}) {

    return (
        <Container_Cartao imagem_url={cartao_esquerda_a.src} className="jogador_esquerda_a">
            <img src={dado_mockado.imagem_url} alt=""/>
            <div className="jogador_esquerda_a_nome">
                {dado_mockado.nome}
            </div>
        </Container_Cartao>
    )
}