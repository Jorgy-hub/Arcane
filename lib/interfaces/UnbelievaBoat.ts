export interface APIUnbelievaBoatMember {
    rank: string,
    user_id: string,
    cash: number,
    bank: number,
    total: number
}

export interface APIUnbelievaBoatGuild {
    id: string;
    name: string;
    icon: string;
    owner_id: string;
    member_count: number;
    channels: any[];
    roles: any[];
    symbol: string;
    vanity_code: any;
}