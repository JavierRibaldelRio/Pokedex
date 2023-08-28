// Renders a Type Tag according to the Type specified in the prop type

import React from 'react';


interface TypesTagsProps {

    type: string
}

const TypesTags: React.FC<TypesTagsProps> = ({ type }) => <div className={"type " + type}>{type}</div>

export default TypesTags