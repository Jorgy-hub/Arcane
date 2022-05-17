export interface APILeagueSummoner {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
};

export interface APILeagueEntry  {
    leagueId: string,
    queueType: string,
    tier: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    leaguePoints: number,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean
};

export interface APILeagueMastery {
    championId: number;
    championLevel: number;
    championPoints: number;
    lastPlayTime: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    tokensEarned: number;
    summonerId: string;
};

export interface APILeagueChampion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: APILeagueChampionInfo;
    image: APILaegueChampionImage;
    tags: string[];
    partype: string;
    stats: APILeagueChampionStats;
};

export interface APILaegueChampionImage {
    full: string,
    sprite: string,
    group: string,
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface APILeagueChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    ifficulty: number;
};

export interface APILeagueChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
};

export interface APILeagueActiveMatch {
    gameId: number;
    mapId: number;
    gameMode: string;
    gameType: string;
    gameQueueConfigId: number;
    participants: APILeagueActiveMatchParticipant[];
    observers: any;
    platformId: string;
    bannedChampions: any[];
    gameStartTime: number;
    gameLength: number;
};

export interface APILeagueActiveMatchParticipant {
    teamId: number;
    spell1Id: number;
    spell2Id: number;
    championId: number;
    profileIconId: number;
    summonerName: string;
    bot: boolean;
    summonerId: string;
    gameCustomizationObjects: any[];
    perks: any[];
};