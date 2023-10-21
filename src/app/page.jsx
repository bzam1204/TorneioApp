'use client'
import React, {useEffect, useState} from 'react'
import ControladorPlacar from "./controlador-placar/page";
import PlacarVisivel from "./placar-visivel/page";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'p' || event.key === 'P') {
                setComponentToShow(null);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [componentToShow, setComponentToShow] = useState(null);

    return (
        <div>
            {componentToShow === null ? (
                <>
                    <button onClick={() => setComponentToShow('placarControlador')}>Mostrar Controlador de Placar
                    </button>
                    <button onClick={() => setComponentToShow('placarVisivel')}>Mostrar Placar Visível</button>
                </>
            ) : (
                componentToShow === 'placarControlador' ? <ControladorPlacar/> : <PlacarVisivel/>
            )}
        </div>
    );
}
