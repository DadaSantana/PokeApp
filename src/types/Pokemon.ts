export type Pokemon  = {
    id: number,
    name: string,
    image: string,
    types: any[],
    abilities: any[],
    stats: {
        hp: number,
        attack: number,
        defense: number,
        spcAttack: number,
        spcDefense: number,
        speed: number
    },
    height: number,
    weight: number,
    description: string,
}