import { Pokemon } from '../types/Pokemon';


export let afterHandle: Pokemon[] = [];

export const getAllPokemons = async () => {
    let list: Pokemon[] = [];

    const PokeApi = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100');
    let json = await PokeApi.json();
    const PokeList = json.results;

    for(let i in PokeList) {

        const PokeDetails = await fetch(PokeList[i].url);
        const fetchJson = await PokeDetails.json();
        const getTypes = [];
        const getAbilities = [];
        const getStats = {
            hp: fetchJson.stats[0].base_stat,
            attack: fetchJson.stats[1].base_stat,
            defense: fetchJson.stats[2].base_stat,
            spcAttack: fetchJson.stats[3].base_stat,
            spcDefense: fetchJson.stats[4].base_stat,
            speed: fetchJson.stats[5].base_stat,
        }

        for (let i in fetchJson.types) {
            getTypes.push(fetchJson.types[i].type.name);
        }
        for (let i in fetchJson.abilities) {
            getAbilities.push(fetchJson.abilities[i].ability.name);
        }

        const getHeight = (fetchJson.height / 10);
        const getWeight = (fetchJson.weight / 10);
        const getDescJson = await fetch(fetchJson.species.url);
        const getDescription = await getDescJson.json();

       list.push({
            id: fetchJson.id,
            name: PokeList[i].name,
            image: fetchJson.sprites.other.dream_world.front_default,
            types: getTypes,
            stats: getStats,
            abilities: getAbilities,
            height: getHeight,
            weight: getWeight,
            description: getDescription.flavor_text_entries[0].flavor_text
        }); 

    }

    return list;
}

export const getPokemonByIndex = async (pokemon: any) => {
    let pokemonFloat: Pokemon[] = [];
    pokemonFloat.push(pokemon);

    return pokemonFloat;
}