'use client'
import React, {useEffect, useState} from 'react'
import AutocompleteSelectTorneios from "./AutocompleteSelectTorneios";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selecionar_torneio, setSelecionarTorneio] = useState(null)

    async function criaTorneio() {

        const select = document.querySelector('#AutocompleteSelectTorneios')
        console.log(select.value)


        /* let torneio_criado;

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
                 torneio_name: _torneio_name
             })
         })
             .then(handleResponse) // Call the callback function
             .then((data) => {
                 console.log("Data:", data);
                 torneio_criado = true;
                 // You can perform further processing on the data here
             })
             .catch((error) => {
                 console.error("Error:", error);
                 torneio_criado = false;
             });

         return torneio_criado;*/
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
                        <button onClick={criaTorneio} style={{width: 'fit-content', height: 'fit-content'}}>Selecionar
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
                        <input placeholder={'Nome do Torneio'} type={"text"}/>
                        <button onClick={criaTorneio} style={{width: 'fit-content', height: 'fit-content'}}>Criar
                            Torneio
                        </button>
                    </div>
                ) : null
            }
        </div>

    )
}
