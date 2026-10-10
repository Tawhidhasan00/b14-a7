export interface INav {
    id: string
    slug: string,
    nameBn: string
    icon: string
}

export interface IProducts {
    id: number
    slug: string
    nameBn: string
    image: string
    category: string
    categoryNameBn: string
    change: {
        dir: string
        pct: number
    }
    markets: {
    market: string;
    division: string;
    min: number;
    max: number;
    }[];
    today: number
    yesterday: number
    unit: string

}
