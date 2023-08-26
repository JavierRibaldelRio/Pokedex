import React from "react";

import { CircularProgress } from "@mui/material";

// Subcomponents
import PokemonTitle from './PokemonTitle';

// CSS

import '../../style/PokemonInfo.css';


interface PokemonInfoProps {
    pokemonData: any;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemonData }) => {

    // Shows an Spinner while we don't have not anything to show
    if (pokemonData === null) {
        return <CircularProgress />
    }



    return <div className="Pokemon-Info">

        <PokemonTitle name={pokemonData.name} id={pokemonData.id} />
        <img alt={pokemonData.name} src={pokemonData.sprites.other['official-artwork'].front_default} />
    </div>
}



export default PokemonInfo;