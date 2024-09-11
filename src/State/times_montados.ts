import { atom } from "recoil";
import { Player } from "../lib/definitions";

const timesMocados: {time_zero: Player[], time_um: Player[]} = {
    time_zero: [
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
    ],
    time_um: [
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
        {
            id: null,
            name: "JOGADOR VAZIO",
            imageUrl:
                "https://media.canva.com/1/image-resize/1/550_550_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8ydExNNC9NQUYyUWoydExNNC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEClWoOfT1xIAIE6FkZqfG91jYWsRXROQxUuushPKzq4&exp=1701933220&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHU7COF1QPpC2pBcwTe09bqXXKZ2VxSLiCPaJdqba8x2",
            shirtNumber: 0,
        },
    ],
}; 

export const times_montados = atom({
    key: "times_montados",
    default: timesMocados,
});

