// Adds 0 until there are 5 digits, tranforms Number to String. 7 to 00007

function add0toPokemonId(id: number): string {

    return id.toString().padStart(5, '0');
}

export default add0toPokemonId;