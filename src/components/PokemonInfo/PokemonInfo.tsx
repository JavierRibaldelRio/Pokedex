import React from "react";

import { CircularProgress, ThemeProvider, createTheme } from "@mui/material";

// Subcomponents
import PokemonTitle from './PokemonTitle';
import PokemonEntry from './PokemonEntry';
import PokemonTypes from './PokemonTypes';

// Utils

import getTypeColor from "../../utils/getTypeColor";


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

    // The name of the Pokemon
    const pokemonName = pokemonData.pokemonSpecie.names.filter((name: NamePokemon) => name.language.name === 'en')[0].name;

    // Array of pokemon's types, a pokémon has a maximum of two types

    let typeArr: string[] = Array(2);

    // Type.slot specify as the order of the pokemons types, (for this reason whe can't use .map())
    for (const type of pokemonData.pokemon.types) {

        typeArr[type.slot - 1] = type.type.name;
    }

    // The color of  Main type of the pokemon to select the color of the bar
    const mainTypeColor = getTypeColor(typeArr[0]);


    // Sets the color for Selects and Spinners
    const theme = createTheme({

        palette: {
            primary: {

                main: mainTypeColor
            }
        },
    })

    return <ThemeProvider theme={theme}>
        <div className="Pokemon-Info">

            <PokemonTitle name={pokemonName} id={id} mainTypeColor={mainTypeColor} />

            <div className="Pokemon-Data">

                <PokemonEntry entries={pokemonData.pokemonSpecie.flavor_text_entries} mainTypeColor={mainTypeColor} />

                <PokemonTypes types={typeArr} />

                <img style={{ gridArea: "data", maxWidth: "100%" }} alt={pokemonName} src={pokemonData.pokemon.sprites.other['official-artwork'].front_default} />


            </div>

        </div>
    </ThemeProvider>
}



export default PokemonInfo;