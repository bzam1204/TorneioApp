import {
    Contador_Jogadores_Selecionados,
    Container_Camada_Interna,
    Container_Painel_Interacao, Jogadores_Label, Numero_Jogadores_Selecionados,
    Titulo_Pagina
} from "../estilo/painel_interacao";
import Botao_Anterior from '../botoes/Botao_Anterior'
import Botao_Proximo from '../botoes/Botao_Proximo'
import Botao_Sortear from "../botoes/Botao_Sortear";
import Botao_Tela_Inicial from "../botoes/Botao_Tela_Inicial";


export default function Painel_Interacao() {

    return (<Container_Painel_Interacao>
        <Container_Camada_Interna>
            <div style={{
                display: "flex", gap: '16px', justifyContent: "space-between"
            }}>

                <Botao_Anterior></Botao_Anterior>
                <Botao_Proximo></Botao_Proximo>
            </div>
            <Contador_Jogadores_Selecionados>
                <Jogadores_Label>JOGADORES</Jogadores_Label>
                <Numero_Jogadores_Selecionados>0</Numero_Jogadores_Selecionados>
            </Contador_Jogadores_Selecionados>
            <Titulo_Pagina>selecione jogadores</Titulo_Pagina>
            <Botao_Sortear></Botao_Sortear>
            <Botao_Tela_Inicial></Botao_Tela_Inicial>
        </Container_Camada_Interna>
    </Container_Painel_Interacao>)
}