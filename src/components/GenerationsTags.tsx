import React from "react";

interface GenerationsTagsProps {

    generation: number
}

const GenerationTags: React.FC<GenerationsTagsProps> = ({ generation }) => {

    let romanNumber;

    switch (generation) {

        case 1:
            romanNumber = "I";
            break;

        case 2:
            romanNumber = "II";
            break;

        case 3:
            romanNumber = "III";
            break;

        case 4:
            romanNumber = "IV";
            break;

        case 5:
            romanNumber = "V";
            break;

        case 6:
            romanNumber = "VI";
            break;

        case 7:
            romanNumber = "VII";
            break;

        case 8:
            romanNumber = "VIII";
            break;
        case 9:
            romanNumber = "IX";
            break;
    }

    return <span className={"Gen " + romanNumber}>{romanNumber}</span>

}

export default GenerationTags;