import add0toPokemonId from "../../scripts/add0toPokemonId";

test("Adding 0's to Pokemon's Id's", () => {

    expect(add0toPokemonId(12)).toBe("00012");
})