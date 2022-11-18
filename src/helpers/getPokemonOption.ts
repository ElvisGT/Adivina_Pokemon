import pokemonsApi from "@/api/pokemosApi";
import type { PokemonName } from "@/interfaces/pokemon";

const getPokemons = () => {
  
  const pokemons: number[] = Array.from(Array(650));

  return pokemons.map((arg, index: number) => index + 1);
}

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.2)

  const pokemons = await getPokemonNames(mixedPokemons.splice(0,4));

  return pokemons;

}

const getPokemonNames = async ([a,b,c,d]: Object[]) => {

  const [p1,p2,p3,p4] = await Promise.all([
    pokemonsApi.get<PokemonName>(`/${a}`),
    pokemonsApi.get<PokemonName>(`/${b}`),
    pokemonsApi.get<PokemonName>(`/${c}`),
    pokemonsApi.get<PokemonName>(`/${d}`),
  ])

  return [
    {name:p1.data.name.toUpperCase(),id:p1.data.id},
    {name:p2.data.name.toUpperCase(),id:p2.data.id},
    {name:p3.data.name.toUpperCase(),id:p3.data.id},
    {name:p4.data.name.toUpperCase(),id:p4.data.id},
  ]

}

export default getPokemonsOptions;