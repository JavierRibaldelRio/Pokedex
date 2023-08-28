// Renders a Type Tag according to the Type specified in the prop type

import React from 'react';

import getTypeColor from '../utils/getTypeColor';

interface TypesTagsProps {

    type: string
}

const TypesTags: React.FC<TypesTagsProps> = ({ type }) => <div style={{ backgroundColor: getTypeColor(type) }} className={"type"}>{type}</div>

export default TypesTags;