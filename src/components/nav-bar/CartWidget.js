import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget({cantArt}) {
    return (
        <div className="cart-div">
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            {cantArt}
        </div>
    )
}

export default CartWidget