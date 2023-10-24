'use client'
import React, {useEffect, useState} from 'react'
import AutocompleteSelectTorneios from "./AutocompleteSelectTorneios";
import {redirect} from "next/navigation";
import {useRouter} from 'next/navigation'


export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selecionar_torneio, setSelecionarTorneio] = useState(null)
    const [id_toneio_selecionado, setIdTorneioSelecionado] = useState()

    async function selecionaTorneio() {

        const select = document.querySelector('#AutocompleteSelectTorneios')
        router.push("/select-teams-players")
        console.log(select.value)


    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    async function criaTorneio() {

        const input = document.querySelector('#input_criar_nome_torneio')
        let _nome_torneio = input.value

        let torneio_criado;

        function handleResponse(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response JSON
            return response.json();
        }

        const res = await fetch("/api/torneios/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome_torneio: _nome_torneio
            })
        })
            .then(handleResponse) // Call the callback function
            .then((data) => {
                console.log("Data:", data);
                torneio_criado = true;
                alert('Torneio criado com sucesso!')
                // You can perform further processing on the data here
            })
            .catch((error) => {
                console.error("Error:", error);
                alert('Não foi possível criar o torneio!')
                torneio_criado = false;
            });
        if (torneio_criado === true) router.push("/select-teams-players")

        return torneio_criado;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column", gap: '30px',
            justifyContent: "center",
            alignItems: "center"
        }}>

            <p>Criar um Torneio ou Selecionar um Já Existente?</p>
            <button onClick={() => {
                setSelecionarTorneio(false)
            }}>Criar Torneio
            </button>
            <button onClick={() => {
                setSelecionarTorneio(true)
            }}>Selecionar Torneio
            </button>

            {
                selecionar_torneio === true ? (
                    <div style={{
                        display: "flex",
                        flexDirection: "column", gap: '30px',
                        justifyContent: "center",
                        alignItems: "center",
                    }}>


                        <AutocompleteSelectTorneios></AutocompleteSelectTorneios>
                        <button onClick={selecionaTorneio}
                                style={{width: 'fit-content', height: 'fit-content'}}>Selecionar
                            Torneio
                        </button>
                    </div>) : null
            }
            {
                selecionar_torneio === false ? (
                    <div style={{
                        display: "flex",
                        flexDirection: "column", gap: '30px',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <input id={'input_criar_nome_torneio'} placeholder={'Nome do Torneio'} type={"text"}/>
                        <button onClick={criaTorneio} style={{width: 'fit-content', height: 'fit-content'}}>Criar
                            Torneio
                        </button>
                    </div>
                ) : null
            }
        </div>

    )
}
