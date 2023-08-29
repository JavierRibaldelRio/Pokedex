// Gets the list of types that a pokemon has asociated and return its tags plus a laberl

import React from 'react';

import TypesTag from '../TypesTags';

interface PokemonTypesTags {


    types: string[]
}

const PokemonTypes: React.FC<PokemonTypesTags> = ({ types }) => {


    const typeTags = types.map(type => <TypesTag key={type} type={type} />)

    return <div className='Pokemon-Types'>

        <h2 className='Pokemon-Types-Label'>Types:</h2>

        <div className='Pokemon-Types-Tags'>
            {typeTags}
        </div>
    </div>

};

export default PokemonTypes