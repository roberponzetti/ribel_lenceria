import React from 'react'

const ItemListContainer = ({greeting, children}) => {
    return (
        <div>
            <h3 className="mt-3">{greeting}</h3>
            {children}
        </div>
    );
};

export default ItemListContainer;
