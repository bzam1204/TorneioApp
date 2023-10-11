import { atom } from "recoil";

const placar_state = atom({
  key: "placar",
  default: {
    timeA: 0,
    timeB: 0
  }
});

export default placar_state;
