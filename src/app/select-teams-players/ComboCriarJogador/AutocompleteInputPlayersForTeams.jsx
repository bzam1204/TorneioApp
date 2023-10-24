import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import {jogador_selecionado, jogadores_state} from "../../../state/placar";
import {useRecoilState} from "recoil";


function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function AutocompleteInputPlayersForTeams({nome_time}) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [jogador_escolhido, setJogadorEscolhido] = useRecoilState(jogador_selecionado)

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch("./api/players/all");

            const players_list = await response.json();

            players_list.forEach((element) => {
            });

            if (active) {
                setOptions([...players_list]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id={`AutocompleteInputPlayersFor${nome_time}`}
            sx={{width: 300}}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, _jogador_selecionado) => {
                console.log(_jogador_selecionado)
                setJogadorEscolhido(_jogador_selecionado)
            }}
            isOptionEqualToValue={(option, value) => option.nome === value.nome}
            getOptionLabel={(option) => option.nome}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Jogadores"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20}/>
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [];
