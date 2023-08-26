
import fetchPokemonById from "../../api/fetchPokemonById";

test('Fetching one single pokemon', async () => {

    // Gets the first pokémon of the pokedex: Bulbasaur
    const pokemon = await fetchPokemonById(1);

    expect(pokemon.pokemon.name).toBe('bulbasaur')
})