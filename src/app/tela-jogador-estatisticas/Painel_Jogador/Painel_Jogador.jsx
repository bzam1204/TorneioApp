import {
    Container_Camada_Interna,
    Container_Painel_Jogador,
    Numero_Camisa,Imagem_Jogador,
    Nome_Jogador
} from "../estilo/painel_jogador";


export default function Painel_Jogador() {

    return (<Container_Painel_Jogador>
        <Container_Camada_Interna>
            <Nome_Jogador>Bruno Zamorano</Nome_Jogador>
            <Imagem_Jogador imagem_url={"https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCy9sEthqm8pg_PtUl1H3KM0XHRoixnho0Oe7g-sbK-SVNr52nc8wj1kJZEc9DBQxTf2jPDBNRtS47GWex4Iy1MGGDC4A=w1911-h958"}/>
            <Numero_Camisa>76</Numero_Camisa>
        </Container_Camada_Interna>
    </Container_Painel_Jogador>)
}