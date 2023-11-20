import {atom} from 'recoil'

export const partida_config = atom({
    key: "partida_config", default: {
        evento_id: 1,
        partida_id: null,
        time_a_code: 0,
        time_b_code: 1,
    }
});