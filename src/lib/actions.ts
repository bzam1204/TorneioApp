import { useRouter } from "next/navigation";
import axiosInstance from "../../axios.config";
import { Player, Statistic } from "./definitions";

export async function criarPartida(router) {
    try {
        const novaPartida = await axiosInstance.post("/matches").then((res) => {
            return res.data;
        });
        console.log("nova partida ", novaPartida);
        router.push(`/tela-controlador-partida?id=${novaPartida.id}`);
    } catch (error) {
        console.log(error);
    }
}

export async function buscaJogadoresTime(
    partidaId,
    timeA,
    timeB,
    setTimeA,
    setTimeB,
    setIsLoading,
    mergeJogadoresVaziosComTodosJogadores
) {
    const jogadoresTimeA: Player[] = await axiosInstance
        .get(`/match/${partidaId}/team/true/players`)
        .then((res) => {
            return res.data;
        });
    const jogadoresTimeB: Player[] = await axiosInstance
        .get(`/match/${partidaId}/team/false/players`)
        .then((res) => {
            return res.data;
        });
    console.log(`
            jogadoresTimeA: ${jogadoresTimeA}
            jogadoresTimeB: ${jogadoresTimeB}
            `);

    const merge_time_A = mergeJogadoresVaziosComTodosJogadores(
        jogadoresTimeA,
        timeA
    );
    const merge_time_B = mergeJogadoresVaziosComTodosJogadores(
        jogadoresTimeB,
        timeB
    );
    await setTimeA(merge_time_A);
    await setTimeB(merge_time_B);
    await setIsLoading(false);
}

export function useAdicionarJogadorNoTime() {
    const router = useRouter();

    const adicionarJogadorNoTime = async (
        timeId,
        jogadorSelecionadoId,
        partidaId,
        idJogadorNaPartida
    ) => {
        try {
            if (idJogadorNaPartida !== null) {
                if (idJogadorNaPartida === jogadorSelecionadoId) {
                    console.log("Jogador já está na partida.");
                    return;
                }
                // Substituir jogador
                await axiosInstance.put(`match/${partidaId}/substitute`, null, {
                    params: {
                        playerOneId: idJogadorNaPartida,
                        playerTwoId: jogadorSelecionadoId,
                    },
                });
            } else {
                // Adicionar novo jogador
                await axiosInstance.post(
                    `/matches/${partidaId}/team/${timeId}/add-player`,
                    null,
                    {
                        params: {
                            playerId: jogadorSelecionadoId,
                        },
                    }
                );
            }

            router.push(`/tela-controlador-partida?id=${partidaId}`);
        } catch (error) {
            console.error("Erro ao adicionar/substituir jogador:", error);
            // Aqui você pode adicionar uma lógica para exibir o erro para o usuário
        }
    };

    return adicionarJogadorNoTime;
}

export async function criaEstatistica(
    categoria_id,
    partida_id,
    time,
    jogador_id,
    router
) {
    let time_parsed;
    time === "1" ? (time_parsed = "false") : (time_parsed = "true");

    const dados = {
        categoryId: categoria_id,
        playerId: jogador_id,
        team: time_parsed,
        matchId: partida_id,
    };
    console.log("dados: ", dados);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Adicione quaisquer cabeçalhos adicionais que seu servidor possa exigir
        },
        body: JSON.stringify(dados),
    };
    const data = await axiosInstance
        .post(
            `/match/${partida_id}/statistics/add?playerId=${jogador_id}&categoryId=${categoria_id}&team=${time_parsed}`,
            options
        )
        .then((res) => {
            return res.data;
        });

    console.log(data);
    router.push(`/tela-controlador-partida?id=${partida_id}`);
}
