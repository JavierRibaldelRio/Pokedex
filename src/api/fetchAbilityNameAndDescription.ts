/**
 * Gets the Ability Name and Description from Ability url
 * 
 * @param Ability Url
 * 
 * return {name: "string", description:"string"}
 */

async function fetchAbilityNameAndDescription(abilityURL: string) {

    const fetchAbility = await fetch(abilityURL);

    const abilityData = await fetchAbility.json();

    const isEnglish = (name: any): boolean => name.language.name === "en";


    const name: string = abilityData.names.filter(isEnglish)[0].name;

    // We reverse the Array to get the Latest description
    const description: string = abilityData.flavor_text_entries.filter(isEnglish).reverse()[0].flavor_text;


    return { name, description };
}

export default fetchAbilityNameAndDescription;