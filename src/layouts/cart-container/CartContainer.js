import React, { useContext } from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Button className="mt-3 mb-5 bg-strongPink border-0" onClick={handleClearCart}>VACIAR CARRITO</Button>
                    <Cart items={items}/>
                    <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <h1>Total:</h1>
                    </Row>
                </>
            ): (
                <>
                    <h3 className="mt-5 descriptionFont fs-3">¡Su carrito está vacío!</h3>
                    <h4 className="mt-5 descriptionFont fs-4">Visitá nuestro catálogo de productos.</h4>
                    <Link to="/products">
                        <Button className="mt-5 bg-strongPink border-0" onClick={handleClearCart}>VER CATÁLOGO</Button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default CartContainer