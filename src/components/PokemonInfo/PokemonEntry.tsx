// The first entry of all the pokedex entries and adds a selecct option to see the rest of entries

import React, { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";

import fetchGenerationAndGameName from '../../api/fetchGenerationAndGameName';

import SelectText from "../SelectText";
import GenerationTags from "../GenerationsTags";

interface Entry {

    flavor_text: string,
    language: {

        name: string,
        url: string
    },
    version: {

        name: string,
        url: string
    }
}

interface PokemonEntryProps {

    entries: [Entry],
    mainTypeColor: string

}

const PokemonEntry: React.FC<PokemonEntryProps> = ({ entries, mainTypeColor }) => {

    // Selects only english entries
    const englishEntries = entries.filter(entry => entry.language.name === "en");


    // Array of tuples to pass to SelectText.tsx

    const [items, setItems] = useState<{ title: JSX.Element, text: string }[]>([]);

    // Like old component did mount
    useEffect(() => {


        const fetchItems = async () => {

            try {

                const fetchedItems: { title: JSX.Element, text: string }[] = await Promise.all(

                    englishEntries.map(async (entry) => {

                        // Gets the gameName and the Generation
                        const { gen, gameName } = await fetchGenerationAndGameName(entry.version.url);

                        return {
                            title: <><GenerationTags generation={gen} />  &nbsp;{gameName}</>,

                            text: entry.flavor_text
                        };
                    }))

                // Sets the New Menu Items
                setItems(fetchedItems);
            }

            catch (e) {
                console.error(e);
            }

        }

        fetchItems();

    }, [englishEntries])

    // if menuItems is empty we do not render anything
    if (items.length === 0) {
        return <CircularProgress />
    }

    return <SelectText name="Pokemon-Entries" title="Description" texts={items} />
}

export default PokemonEntry;