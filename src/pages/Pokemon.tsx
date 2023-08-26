import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchPokemonById from '../api/fetchPokemonById';

import PokemonInfo from '../components/PokemonInfo/PokemonInfo';

const Pokemon: React.FC = () => {

    // Gets id from URl
    const { id } = useParams();

    const [pokemonData, setPokemonData] = useState<any>(null);

    useEffect(() => {

        // Gets the Pokemon
        const fetchPokemon = async () => {
            try {
                const pokemon = await fetchPokemonById(Number(id));
                setPokemonData(pokemon);
            }

            catch (err) {
                console.error(err);
            }
        }

        fetchPokemon();
    }, [id, setPokemonData]);

    return <PokemonInfo pokemonData={pokemonData} />;
}

export default Pokemon;