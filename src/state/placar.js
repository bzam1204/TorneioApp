import {atom} from "recoil";

const placar_state = atom({
    key: "placar", default: {
        timeA: 0, timeB: 0
    }
});
const segundos_restantes_state = atom({
    key: "segundos_restantes", default: 24
});

const is_running_state = atom({
    key: "is_running", default: false
});

const tempo_restante_state = atom({
    key: "tempo_restante", default: {
        segundos: 0, minutos: 10
    }
});
const current_color_state = atom({
    key: "current_color", default: [0, 87, 255]
});
const dados_partida_state = atom({
    key: "dados_partida", default: {
        segundos_restantes: 59, minutos_restantes: 10, tempo24s: 24, pontos_time_a: 0, pontos_time_b: 0,
    }
});
const jogadores_state = atom({
    key: "jogadores",
    default: {
        timeA: [],
        timeB: []
    }
});

export {
    placar_state,
    jogadores_state,
    segundos_restantes_state,
    tempo_restante_state,
    dados_partida_state,
    is_running_state,
    current_color_state
};
