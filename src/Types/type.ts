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
    change: {
        dir: string
        pct: number
    }
    market: {
        market: string
    }
    today: number
    yesterday: number
    unit: string

}
