import React from "react";

interface PokemonStatProps {

    stat: string,
    value: string | number,
    classes: string
}

const PokemonStat: React.FC<PokemonStatProps> = ({ stat, value, classes }) => {

    return <div className={classes + " stat"}><h2>{stat}</h2> {value}</div>
}

export default PokemonStat;