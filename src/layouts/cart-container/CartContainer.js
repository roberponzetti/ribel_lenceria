import React, { useContext } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../../components/cart/Cart'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {

    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext);
    const {totalAmount} = useContext(CartContext);

    const handleClearCart = () => {
        clear();
    }

    const goToPayment = () => {
        alert("Ir a /pagar");
    }

    return (
        <div>     
            {items.length > 0 ? (
                <>
                    <Button className="mt-3 mb-5 bg-strongPink border-0" onClick={handleClearCart}>VACIAR CARRITO</Button>
                    <Cart items={items}/>
                    <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <Col md={{ span: 4, offset: 8 }}>
                            <h2 className="mt-5">Total: $ {totalAmount()}</h2>
                        </Col>
                    </Row>
                    <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <Col md={{ span: 4, offset: 8 }}>
                        <Button className="mt-5 bg-strongPink border-0" onClick={goToPayment}>FINALIZAR COMPRA</Button>
                        </Col>
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