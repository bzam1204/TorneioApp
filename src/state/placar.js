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
        timeA: [
            {
                nome: 'ANTONINO PRAXEDES',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C4E03AQGQDx9rDWPwLg/profile-displayphoto-shrink_200_200/0/1654445932350?e=1703116800&v=beta&t=1g34TPuDuhmRn_Ohxmm9kfmCiV1JXfzQm0Svoz1-Awc'
            }
            /* {
                nome: 'BRUNO ZAMORANO',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C4D03AQE0lReht2ivTQ/profile-displayphoto-shrink_200_200/0/1621264748663?e=1703116800&v=beta&t=S9uWIxojYNToJDpLuIcck99Y8-Y5pJBSc_HEFh6lROI'

            }*/
            , {
                nome: 'MATHEUS DELMONDES',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: '0',
                imagem_jogador: 'https://media.licdn.com/dms/image/C4D03AQEpOYtfwpUx8Q/profile-displayphoto-shrink_200_200/0/1651338328741?e=1703116800&v=beta&t=6lbQdLSDx_pIKCaAD-XR7QFfh3Q1fayI4Snf86Ubsk0'
            }
            , {
                nome: 'ALEXANDRE VISINTAINER',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/D4D03AQFq5SJzEXMu8w/profile-displayphoto-shrink_200_200/0/1691332716060?e=1703116800&v=beta&t=0PK5hPG4GBLKhJoQHBR9WWDFRhrJ2mYJgEdbK1fZSkE'

            }
            , {
                nome: 'HENRIQUE LINO',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/D4D03AQEwCKHa0WpO_Q/profile-displayphoto-shrink_200_200/0/1684711733991?e=1703116800&v=beta&t=xYiuKI1f1sTx6vTWYLWFlxwwekmxRqZzmT94f366FEg'
            }
            , {
                nome: 'IAGO KAIQ',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C4D03AQFnAmj3aWvYgw/profile-displayphoto-shrink_200_200/0/1592333539893?e=1703116800&v=beta&t=Oxoeolg_hz3mOtbD_rc0vSEpEqP4-3dMW9nSSSZ-ON8'
            }
            , {
                nome: 'SAMUEL BEZERRA',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C5603AQEiucMDq7xhHg/profile-displayphoto-shrink_200_200/0/1517821006470?e=1703116800&v=beta&t=Bp271b84SEbWMW-WxRpf9XBPxlSZFggpJtibAEGP7ec'

            }
            , {
                nome: 'GABRIEL MANGABEIRA',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0
            }
            ,
            {
                nome: 'LUCAS BESSA',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/D4D03AQHXf04MlsV1pg/profile-displayphoto-shrink_200_200/0/1676573285717?e=1703116800&v=beta&t=BIM9jnavK0Rtejq1ySU7LAvW8Qey6B-yBAWfBXLOPpU'
            }
        ],
        timeB: [
            {
                nome: 'ANTONINO PRAXEDES',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C4E03AQGQDx9rDWPwLg/profile-displayphoto-shrink_200_200/0/1654445932350?e=1703116800&v=beta&t=1g34TPuDuhmRn_Ohxmm9kfmCiV1JXfzQm0Svoz1-Awc'
            }
            , {
                nome: 'BRUNO ZAMORANO',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C4D03AQE0lReht2ivTQ/profile-displayphoto-shrink_200_200/0/1621264748663?e=1703116800&v=beta&t=S9uWIxojYNToJDpLuIcck99Y8-Y5pJBSc_HEFh6lROI'

            }
            , {
                nome: 'MATHEUS DELMONDES',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: '0',
                imagem_jogador: 'https://media.licdn.com/dms/image/C4D03AQEpOYtfwpUx8Q/profile-displayphoto-shrink_200_200/0/1651338328741?e=1703116800&v=beta&t=6lbQdLSDx_pIKCaAD-XR7QFfh3Q1fayI4Snf86Ubsk0'
            }
            , {
                nome: 'ALEXANDRE VISINTAINER',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/D4D03AQFq5SJzEXMu8w/profile-displayphoto-shrink_200_200/0/1691332716060?e=1703116800&v=beta&t=0PK5hPG4GBLKhJoQHBR9WWDFRhrJ2mYJgEdbK1fZSkE'

            }
            , {
                nome: 'HENRIQUE LINO',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/D4D03AQEwCKHa0WpO_Q/profile-displayphoto-shrink_200_200/0/1684711733991?e=1703116800&v=beta&t=xYiuKI1f1sTx6vTWYLWFlxwwekmxRqZzmT94f366FEg'
            }
            , {
                nome: 'IAGO KAIQ',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C4D03AQFnAmj3aWvYgw/profile-displayphoto-shrink_200_200/0/1592333539893?e=1703116800&v=beta&t=Oxoeolg_hz3mOtbD_rc0vSEpEqP4-3dMW9nSSSZ-ON8'
            }
            , {
                nome: 'SAMUEL BEZERRA',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/C5603AQEiucMDq7xhHg/profile-displayphoto-shrink_200_200/0/1517821006470?e=1703116800&v=beta&t=Bp271b84SEbWMW-WxRpf9XBPxlSZFggpJtibAEGP7ec'

            }
            , {
                nome: 'GABRIEL MANGABEIRA',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0
            }
            ,
            {
                nome: 'LUCAS BESSA',
                stats: {
                    cesta_1: 0,
                    cesta_2: 0,
                    cesta_3: 0,
                    faltas: 0,
                    rebotes: 0,
                    assistencias: 0,
                    roubos: 0,
                    tocos: 0

                },
                pontuacao: 0,
                imagem_jogador: 'https://media.licdn.com/dms/image/D4D03AQHXf04MlsV1pg/profile-displayphoto-shrink_200_200/0/1676573285717?e=1703116800&v=beta&t=BIM9jnavK0Rtejq1ySU7LAvW8Qey6B-yBAWfBXLOPpU'
            }
        ]
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
