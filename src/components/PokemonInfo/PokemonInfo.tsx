import React from "react";

import { CircularProgress } from "@mui/material";

// Subcomponents
import PokemonTitle from './PokemonTitle';

// CSS

import '../../style/PokemonInfo.css';


interface PokemonInfoProps {
    pokemonData: {

        pokemon: any,
        pokemonSpecie: any
    };
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemonData }) => {

    // Shows an Spinner while we don't have not anything to show
    if (pokemonData === null) {
        return <CircularProgress />
    }

    // Stores the Id of the Pokemon
    const id: number = pokemonData.pokemon.id;

    // Stores the English Pokémon name

    interface NamePokemon {
        language: {

            name: String,
            url: String,
        },
        name: String
    }

    const pokemonName = pokemonData.pokemonSpecie.names.filter((name: NamePokemon) => name.language.name === 'en')[0].name;


    return <div className="Pokemon-Info">

        <PokemonTitle name={pokemonName} id={id} />
        <img alt={pokemonName} src={pokemonData.pokemon.sprites.other['official-artwork'].front_default} />
    </div>
}



export default PokemonInfo;