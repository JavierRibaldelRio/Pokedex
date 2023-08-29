import React, { useEffect, useState } from "react";

import SelectText from "../SelectText";
import { CircularProgress } from "@mui/material";


// Font Awesome Icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import fetchAbilityNameAndDescription from '../../api/fetchAbilityNameAndDescription';

interface PokemonAbilitiesProps {

    abilities: {
        ability: {
            name: string,
            url: string,
        },
        is_hidden: boolean,
        slot: number
    }[]

    color: string
}


// Renders a Select With the abilities of the pokémon
const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ abilities, color }) => {


    const [items, setItems] = useState<{ title: string | JSX.Element, text: string }[]>([]);

    useEffect(() => {
        const fetchAbilities = async () => {

            try {

                const fetchedAbilities: { title: string | JSX.Element, text: string }[] = await Promise.all(
                    abilities.map(async (ability) => {

                        let { name, description } = await fetchAbilityNameAndDescription(ability.ability.url);

                        return {
                            title: ability.is_hidden ? <><FontAwesomeIcon icon={faEyeSlash} style={{ color: color }} />&nbsp; {name}</> : name,

                            text: description
                        };

                    })
                )

                console.log('fetchAbilities :>> ', fetchedAbilities);
                setItems(fetchedAbilities);

            }

            catch (e) {

                console.error(e);
            }

        }

        fetchAbilities();


    }, [abilities])


    // If there is no ablitity means that it's fetching it

    if (items.length === 0) {

        return <div className="Pokemon-Abilities">< CircularProgress /></div>;
    }

    return <SelectText name="Pokemon-Abilities" title="Abilities:" texts={items} />;
}


export default PokemonAbilities;