export type Player = {
    id: string | null;
    name: string;
    imageUrl: string;
    shirtNumber: number;
    statistics?: Statistic[];
    playerTeamMatch?: PlayerTeamMatch[];
};

export type Statistic = {
    id: string;
    categoryId: string;
    matchId: string;
    playerId: string;
    team: boolean;
    createdAt: Date;
    category?: StatisticCategory;
    match?: Match;
    player?: Player;
};

export type StatisticCategory = {
    id: string;
    name: string;
    description: string;
    statistics?: Statistic[];
};

export type Match = {
    id: string;
    start: Date;
    end: Date;
    statistics?: Statistic[];
    playerTeamMatch?: PlayerTeamMatch[];
};

export type PlayerTeamMatch = {
    id: string;
    isStarter: boolean;
    team: boolean;
    playerId: string;
    matchId: string;
    player?: Player;
    match?: Match;
};
