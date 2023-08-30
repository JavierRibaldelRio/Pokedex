import React from "react";

interface PokemonStatProps {

    stat: string,
    value: string | number,
    classes?: string
}

const PokemonStat: React.FC<PokemonStatProps> = ({ stat, value, classes }) => {

    return <div className={classes + " Pokemon-Stat"}><h2>{stat}</h2> <span className="Pokemon-Stat-Value">{value}</span></div>
}

PokemonStat.defaultProps = {

    stat: "",
    value: "",
    classes: ""
}

export default PokemonStat;