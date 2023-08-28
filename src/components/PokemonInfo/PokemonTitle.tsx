// Renders the title of the Pokemon

import React from "react";

import add0toPokemonId from '../../utils/add0toPokemonId';

import '@fontsource/audiowide';

interface PokemonTitleProps {
    mainTypeColor: string
    name: string,
    id: number
}

const PokemonTitle: React.FC<PokemonTitleProps> = ({ mainTypeColor, name, id }) => {



    return <div className="Pokemon-Title" style={{ borderBottomColor: mainTypeColor }}>

        <h1 className="Pokemon-Name">{name.toUpperCase()}</h1>

        <div className='Pokemon-Id' style={{ color: mainTypeColor }}>#{add0toPokemonId(id)}</div>

    </div>

}

export default PokemonTitle;