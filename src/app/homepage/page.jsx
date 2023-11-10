// pages/sorteio.js
'use client'
import {React, useState} from 'react';
import {jogadores_cadastrados} from "../../State/jogadores_cadastrados";
import {useRecoilState} from "recoil";

const Sorteio = () => {
    const [_jogadores_cadastrados, setJogadoresCadastrados] = useRecoilState(jogadores_cadastrados)
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);


    const calculateTeamWeight = (team) => team.reduce((sum, player) => sum + player.fator_x, 0);

    const handleSortTeams = () => {
        // Sort players based on fator_x
        const sortedPlayers = [..._jogadores_cadastrados].sort((a, b) => b.fator_x - a.fator_x);

        // Initialize teams
        let team1 = [];
        let team2 = [];

        // Distribute players into teams while trying to balance the weights
        sortedPlayers.forEach((player) => {
            if (calculateTeamWeight(team1) <= calculateTeamWeight(team2)) {
                team1.push(player);
            } else {
                team2.push(player);
            }
        });

        setTeam1(team1);
        setTeam2(team2);
    };

    return (<div>
        <h2>Sorteio dos Times</h2>
        <button onClick={handleSortTeams}>Sortear Times</button>
        <div>
            <h3>Time 1</h3>
            <ul>
                {team1.map((player, index) => (<li key={index}>{player.nome} - Rank: {player.fator_x}</li>))}
                <p>Peso Total: {calculateTeamWeight(team1)}</p>
            </ul>
        </div>
        <div>
            <h3>Time 2</h3>
            <ul>
                {team2.map((player, index) => (<li key={index}>{player.nome} - Rank: {player.fator_x}</li>))}<p>Peso
                Total: {calculateTeamWeight(team2)}</p>
            </ul>
        </div>
    </div>);
};

export default Sorteio;