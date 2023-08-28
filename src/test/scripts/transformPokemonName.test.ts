import transformPokemonName from "../../utils/transformPokemonName";

test("Transforming Pokemon Name (removing hyphens)", () => {

    expect(transformPokemonName("mr-mime")).toBe("Mr Mime");
})