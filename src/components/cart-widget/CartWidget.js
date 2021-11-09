import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {itemsInCart} = useContext(CartContext);

    return (
        <div className="cart-div">
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            {itemsInCart() !== 0 && 
                itemsInCart()
            }
        </div>
    )
}

export default CartWidget
