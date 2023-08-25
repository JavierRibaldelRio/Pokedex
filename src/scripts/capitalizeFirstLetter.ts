// Capitalizes the first letter of an String: hello to Hello

function capitalizeFirstLetter(word: string): string {

    word = word.trim().toLocaleLowerCase();

    return word[0].toLocaleUpperCase() + word.substring(1);
}

export default capitalizeFirstLetter;