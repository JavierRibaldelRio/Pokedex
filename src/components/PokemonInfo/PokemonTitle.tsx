// Renders the title of the Pokemon

import React from "react";

import add0toPokemonId from '../../scripts/add0toPokemonId';

import '@fontsource/audiowide';

interface PokemonTitleProps {

    name: string,
    id: number
}

const PokemonTitle: React.FC<PokemonTitleProps> = ({ name, id }) => {



    return <div className="Pokemon-Title">

        <h1 className="Pokemon-Name">{name.toUpperCase()}</h1>

        <div className='Pokemon-Id'>#{add0toPokemonId(id)}</div>

    </div>

}

export default PokemonTitle;