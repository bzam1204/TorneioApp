import {atom} from 'recoil'

export const metadados_partida = atom({
    key: "metadados_partida", default: {
        evento_id: 1,
        partida_id: null,
        time_a_code: 0,
        time_b_code: 1,
    }
});

export const pontuacao_time_zero = atom({
    key: "pontuacao_time_zero", default: 0
});
export const pontuacao_time_um = atom({
    key: "pontuacao_time_um", default: 0
});


export const ultima_estatistica = atom({
    key: "ultima_estatistica", default: null
});
