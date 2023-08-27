import { assert } from "console";
import fetchGenerationAndGameName from "../../api/fetchGenerationAndGameName";

test("Getting generation number and GameName", async () => {

    const { gen, gameName } = await fetchGenerationAndGameName('https://pokeapi.co/api/v2/version/15/');

    expect(gen).toBe(4);
    expect(gameName).toBe('HeartGold');
})