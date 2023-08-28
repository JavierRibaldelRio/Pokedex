// The first entry of all the pokedex entries and adds a selecct option to see the rest of entries

import React, { ChangeEvent, useEffect, useState } from "react";

import { CircularProgress, MenuItem, Select } from "@mui/material";

import fetchGenerationAndGameName from '../../api/fetchGenerationAndGameName';

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

    entries: [Entry]
}

const PokemonEntry: React.FC<PokemonEntryProps> = ({ entries }) => {

    // Selects only english entries
    const englishEntries = entries.filter(entry => entry.language.name === "en");

    // Sets the first Entry, we use the number of the Entry instead of the Entry itself to preserve the order of the games because some entries present the same flavor_text
    const [entryNumber, setEntryNumber] = useState<number>(0);

    // Menu items to show

    const [menuItems, setMenuItems] = useState<JSX.Element[]>([]);

    // When the select is presed
    const handleChange = (event: any) => {

        setEntryNumber(event.target.value);
    }


    // Like old component did mount
    useEffect(() => {


        const fetchMenuItems = async () => {

            try {

                // Gets all the Menu Items
                const fetchedItems: JSX.Element[] = await Promise.all(
                    englishEntries.map(async (entry, i: number) => {
                        const { gen, gameName } = await fetchGenerationAndGameName(entry.version.url);
                        return <MenuItem key={i} value={i}><GenerationTags generation={gen} />  &nbsp;Pokemon {gameName}</MenuItem>;
                    }))

                // Sets the New Menu Items
                setMenuItems(fetchedItems);
            }

            catch (e) {
                console.error(e);
            }

        }

        fetchMenuItems();

    }, [englishEntries])

    // if menuItems is empty we do not render anything
    if (menuItems.length === 0) {
        return <></>
    }

    return <div className="Pokemon-Entries">

        <div className="Pokemon-Entries-Text">{englishEntries[entryNumber].flavor_text}</div>

        <Select
            id="Select-Pokedex-Entry"
            className="Pokemon-Entries-Select"
            displayEmpty={true}
            value={entryNumber}
            onChange={handleChange}
        >

            {menuItems}
        </Select>

    </div >
}

export default PokemonEntry;