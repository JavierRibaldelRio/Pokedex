// It Fetchs a pokemon to its number in the National Pokedex

async function fetchPokemonById(id: number) {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);

    const pokemon = await response.json();

    return pokemon;

}

export default fetchPokemonById;