import play from "../..//img/play.png";
import pause from "../../img/pause.png";

async function updateDadosPartida(_dados) {
    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        return response.json();
    }

    const response = await fetch("/api/partida_cansada/update_dados", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ..._dados
        })
    })
        .then(handleResponse) // Call the callback function
        .then((data) => {
            console.log("Data:", data);
            // You can perform further processing on the data here
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

const timer = {
    setup() {
        this.timeoutID = setTimeout(() => {
        }, timeout);
    },
    cancel() {
    }
};


function correTempoPartida() {
    _segundos = _segundos - 1;
    console.log(tempoRestante);
    console.log(_minutos);
    console.log(_segundos);
    setTempoRestante({minutos: _minutos, segundos: _segundos});
}

const handleStartClick = () => {
    setIsRunning(true);
};

const handleResetClick = () => {
    const btnPlayPause = document.querySelector("#btnPlayPause");
    setIsRunning(false);
    setSegundosRestantes(24);
    setCurrentColor([0, 87, 255]);
    btnPlayPause.style.backgroundImage = `url(${play.src})`;

    // Resetando a cor para azul
};


function timeControlDevice(e) {
    console.log(e.code);
    if (e.code === "Numpad5") {
        togglePausePlayTempoPartida();
    }

    if (e.code === "ArrowLeft") {
        handleResetAndPlayClick();
    }
}

const interpolateColor = (color1, color2, factor) => {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
};

export {

    interpolateColor,
    timeControlDevice,
    correTempoPartida,
    handleStartClick,
    handleResetClick,
    updateDadosPartida
}