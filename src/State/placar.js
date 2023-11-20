import {atom} from 'recoil'

export const placar = atom({
    key: "placar", default: {
        time_a: 123,
        time_b: 108
    }
});