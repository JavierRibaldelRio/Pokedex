/**
 * Get the hexamdecimal asociated to a pokémon type
 * @param <type> ex: grass
 */

// equivalences
const equivalences: Record<string, string> = {
    normal: "#9198A2",
    fire: "#FE9B57",
    water: "#4693DB",
    grass: "#5EBD57",
    flying: "#92AADA",
    fighting: "#CD406B",
    poison: "#A86BC8",
    electric: "#F4D23B",
    ground: "#DD753E",
    rock: "#BDB28C",
    psychic: "#FD6E72",
    ice: "#75CBC0",
    bug: "#90C129",
    ghost: "#5569A4",
    steel: "#5A8DA0",
    dragon: "#016ECB",
    dark: "#544F63",
    fairy: "#EC8FEA"
}
const getTypeColor = (type: string): string => equivalences[type];


export default getTypeColor;

