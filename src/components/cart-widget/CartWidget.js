import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {itemsInCart} = useContext(CartContext);

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            {itemsInCart() !== 0 &&
                <span class="badge rounded-pill badge-notification">
                    {itemsInCart()}
                </span> 
            }
        </>
    )
}

export default CartWidget
