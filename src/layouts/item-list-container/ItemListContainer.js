import React from 'react'

function ItemListContainer({children, greeting}) {
    return (
        <div>
            <h3>{greeting}</h3>
            {children}
        </div>
    )
}

export default ItemListContainer
