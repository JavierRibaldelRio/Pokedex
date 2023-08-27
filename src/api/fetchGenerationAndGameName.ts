/**
 * Gets the Generation and the name of the game
 * @param game Url of the game, that we want to know the Gen
 * @returns An object containing generation and game name
 */

async function fetchGenerationAndGameName(gameURL: string) {

    // Gets the Version
    const versionFetch = await fetch(gameURL);
    const versionData = await versionFetch.json();

    const gameName = await versionData.names.filter((name: any) => name.language.name === "en")[0].name;

    // Gets the Version group
    const versionGroupFetch = await fetch(versionData.version_group.url);
    const versionGroupData = await versionGroupFetch.json();

    // Gets the generation
    const generationFetch = await fetch(versionGroupData.generation.url)
    const generationData = await generationFetch.json();

    const gen = generationData.id;


    return { gen, gameName };
}

export default fetchGenerationAndGameName;