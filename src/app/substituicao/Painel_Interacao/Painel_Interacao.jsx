import {
    Container_Camada_Interna,
    Container_Painel_Interacao,
    Titulo_Pagina
} from "../estilo/painel_interacao";
import Botao_Anterior from '../botoes/Botao_Anterior'
import Botao_Proximo from '../botoes/Botao_Proximo'
import Botao_Tela_Inicial from "../botoes/Botao_Tela_Inicial";


export default function Painel_Interacao({setState}) {

    return (<Container_Painel_Interacao>
        <Container_Camada_Interna>
            <div style={{
                display: "flex", gap: '16px', justifyContent: "space-between"
            }}>

                <Botao_Anterior setState={setState}></Botao_Anterior>
                <Botao_Proximo  setState={setState}></Botao_Proximo>
            </div>

            <Titulo_Pagina>selecione o jogador</Titulo_Pagina>
            <Botao_Tela_Inicial></Botao_Tela_Inicial>
        </Container_Camada_Interna>
    </Container_Painel_Interacao>)
}