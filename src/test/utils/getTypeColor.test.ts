import getTypeColor from '../../utils/getTypeColor';



test("Get color related to a pokemon type", () => {


    expect(getTypeColor("ground")).toBe("#DD753E");

});