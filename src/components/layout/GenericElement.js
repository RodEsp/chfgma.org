import React from "react";
import PropTypes from 'prop-types';

function GenericElement({ Tag, classString, attributes, text, children }) {
    // console.log("ELEM :::", { Tag, classString, attributes, text, children })
    return (
        <Tag className={classString && classString} {...attributes}>
            {text}
            {children && children.length > 0 && children.map((props, key) => {
                // console.log("ELEM Child :::", props, key)
                return (
                    <GenericElement {...props} key={key} />
                )
            })}
        </Tag>
    )
}

GenericElement.propTypes = {
    Tag: PropTypes.string.isRequired,
    classString: PropTypes.string,
    text: PropTypes.string,
    attributes: PropTypes.object,
    children: PropTypes.array
}

export default GenericElement;