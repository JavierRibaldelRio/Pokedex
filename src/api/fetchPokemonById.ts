/**
 *  Fetchs a pokemon an its main form with the id of the 
 * @param id Id of Pokemon
 * @returns {}
 */

async function fetchPokemonById(id: number) {


    // Gets the Specie of the Pokemon
    const fetchPokemonSpecie = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
    const pokemonSpecie = await fetchPokemonSpecie.json();


    // Gets the Specie of the Pokemon

    const fetchPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const pokemon = await fetchPokemon.json();


    return { pokemon, pokemonSpecie };

}

export default fetchPokemonById;