import {Container_Camada_Interna, Container_Painel_Interacao, Titulo_Pagina} from "../estilo/painel_interacao";
import Botao_Avancar from './botoes/Botao_Avancar'
import Botao_Proximo from './botoes/Botao_Proximo'


export default function Painel_Interacao() {

    return (<Container_Painel_Interacao>
        <Container_Camada_Interna>
            <div style={{
                display: "flex", gap: '16px', justifyContent: "space-between"
            }}>

                <Botao_Avancar></Botao_Avancar>
                <Botao_Proximo></Botao_Proximo>
            </div>
            <Titulo_Pagina>selecione jogadores</Titulo_Pagina>
        </Container_Camada_Interna>
    </Container_Painel_Interacao>)
}