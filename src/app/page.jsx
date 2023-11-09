'use client'
import React, {useEffect, useState} from 'react'

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selecionar_torneio, setSelecionarTorneio] = useState(null)

    async function criaTorneio() {

        const select = document.querySelector('#AutocompleteSelectTorneios')


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
        </div>

    )
}
