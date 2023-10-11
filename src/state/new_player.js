import { atom } from "recoil";

const new_player_state = atom({
  key: "new_player_state",
  default: {
    name: ""
  }
});

export default new_player_state;
