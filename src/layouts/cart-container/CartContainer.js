import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Cart from '../../components/cart/Cart'
import { CartContext } from '../../context/CartContext'

function CartContainer() {

    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext);

    const handleClearCart = () => {
        clear();
    }

    return (
        <div>
            
            {items.length > 0 ? (
                <>
                <Button className="mt-3" variant="warning" onClick={handleClearCart}>VACIAR CARRITO</Button>
                <Cart items={items}/>
                </>
            ): (
                <h3>Carrito vacío!</h3>
            )}
        </div>
    )
}

export default CartContainer