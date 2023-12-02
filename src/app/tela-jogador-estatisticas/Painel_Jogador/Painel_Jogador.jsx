import {
    Container_Camada_Interna,
    Container_Painel_Jogador,
    Numero_Camisa, Imagem_Jogador,
    Nome_Jogador
} from "../estilo/painel_jogador";
import {useSearchParams} from 'next/navigation'
import { useEffect, useState } from "react";

function buscaDadosJogador(_id, setDadosJogador) {
    fetch(`http://localhost:3000/api/jogador/${_id}`, {
        method: 'GET', // Correct method for fetching data
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            setDadosJogador(res); // Update state with fetched data
        })
        .catch(err => {
            console.log(err);
        });
}

export default function Painel_Jogador() {
    const router = useSearchParams(); // Correct hook name

    const [dados_jogador, setDadosJogador] = useState({
        nome: null,
        numeroCamisa: null,
        imagemUrl: null
    });

    useEffect(() => {
        const id = router.get('id');
        if (id) {
            buscaDadosJogador(id, setDadosJogador);
        }
    }, [router]); // Include router in dependency array

    return (
        <Container_Painel_Jogador>
            <Container_Camada_Interna>
                <Nome_Jogador>{dados_jogador.nome}</Nome_Jogador>
                <Imagem_Jogador imagem_url={dados_jogador.imagemUrl} />
                <Numero_Camisa>{dados_jogador.numeroCamisa}</Numero_Camisa>
            </Container_Camada_Interna>
        </Container_Painel_Jogador>
    );
}
