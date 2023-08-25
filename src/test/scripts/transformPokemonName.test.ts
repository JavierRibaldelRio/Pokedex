import transformPokemonName from "../../scripts/transformPokemonName";

test("Transforming Pokemon Name (removing hyphens)", () => {

    expect(transformPokemonName("mr-mime")).toBe("Mr Mime");
})