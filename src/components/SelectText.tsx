import React, { useState } from "react";

import { MenuItem, Select } from "@mui/material";

interface SelectTextProps {

    title: string,
    texts: { title: JSX.Element | string, text: JSX.Element | string }[],
    name: string
}

const SelectText: React.FC<SelectTextProps> = ({ title, texts, name }) => {

    // Each item has asigned as a value the index of its text in the aray
    const [selectValue, setSelectValue] = useState<number>(0);

    const selectItems = texts.map((text, i: number) => <MenuItem key={i} value={i}>{text.title}</MenuItem>);

    const handleChange = (event: any) => setSelectValue(event.target.value);

    return <div className={name}>
        <div className={`${name}-Header`}>
            <h2 className={`${name}-Label`}>{title}</h2>


            <Select
                className={`${name}-Select`}
                style={{ borderRadius: "15px" }}
                displayEmpty={true}
                value={selectValue}
                onChange={handleChange}>

                {/* All the different pokémons games where the pokémon has be */}
                {selectItems}

            </Select>
        </div>

        {/* Pokedex Entry */}
        <div className={`${name}-Text`}>{texts[selectValue].text}</div>



    </div >

}

export default SelectText;