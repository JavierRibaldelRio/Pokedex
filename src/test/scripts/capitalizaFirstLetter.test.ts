import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

test("Capitalize first letter of word", () => {

    expect(capitalizeFirstLetter("hello")).toBe("Hello")
})