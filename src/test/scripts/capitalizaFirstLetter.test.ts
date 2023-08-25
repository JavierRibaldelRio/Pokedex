import capitalizeFirstLetter from "../../scripts/capitalizeFirstLetter";

test("Capitalize first letter of word", () => {

    expect(capitalizeFirstLetter("hello")).toBe("Hello")
})