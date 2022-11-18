export interface PokemonName {
    name:string,
    id:number
}

export interface PokemonData {
    pokemonsArr:[],
    pokemon:PokemonName | null,
    isPokemonSelected:boolean,
    message:string,
    lifes:number,
    buttonMsg:string
}