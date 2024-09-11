import {
    Contador_Jogadores_Selecionados,
    Container_Camada_Interna,
    Container_Painel_Interacao, Jogadores_Label, Numero_Jogadores_Selecionados,
    Titulo_Pagina
} from "../estilo/painel_interacao";
import Botao_Desfazer from '../botoes/Botao_Desfazer'
import Botao_Opcoes from '../botoes/Botao_Opcoes'
import Botao_Tempo from "../botoes/Botao_Tempo";
import Btn_24_Seg from "../botoes/Botao_24_Seg";
import Botao_Informativo from "../botoes/Botao_Informativo";
import Frame_Placar from "./Frame_Placar";
import {useSearchParams} from "next/navigation";


export default function Painel_Interacao() {
    const search_params = useSearchParams()
    const partida_id = parseInt(search_params.get('id'))

    return (<Container_Painel_Interacao>
        <Container_Camada_Interna>
            <Frame_Placar/>
            <Botao_Informativo/>
            <Botao_Tempo/>
            <Btn_24_Seg/>
            <div style={{
                display: "flex", gap: '16px', justifyContent: "space-between"
            }}>

                <Botao_Desfazer></Botao_Desfazer>
                <Botao_Opcoes></Botao_Opcoes>
            </div>
        </Container_Camada_Interna>
    </Container_Painel_Interacao>)
}