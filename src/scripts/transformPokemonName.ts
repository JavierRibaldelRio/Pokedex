// Transforms the pokemon name with spaces instead of hyphens

import capitalizeFirstLetter from './capitalizeFirstLetter';

function transformPokemonName(pokemonName: string): string {

    return pokemonName.split('-').map(capitalizeFirstLetter).join(" ");
}

export default transformPokemonName;