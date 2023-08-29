import fetchAbilityNameAndDescription from "../../api/fetchAbilityNameAndDescription";


test("Fetching Name and Description of an ability", async () => {

    const nameAndDescription = await fetchAbilityNameAndDescription('https://pokeapi.co/api/v2/ability/1');

    expect(nameAndDescription).toHaveProperty('name');
    expect(nameAndDescription).toHaveProperty('description');

})