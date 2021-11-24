import React, { useContext, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../../components/cart/Cart'
import { CartContext } from '../../context/CartContext'
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CartContainer = () => {

    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext);
    const {totalAmount} = useContext(CartContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClearCart = () => {
        clear();
        setShow(false);
    };

    return (
        <div>     
            {items.length > 0 ? (
                <>
                    <Button className="mt-3 mb-5 bg-strongPink border-0 clear-button" onClick={handleShow}>VACIAR CARRITO</Button>
                    <Cart items={items}/>
                    <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <Col md={{ span: 4, offset: 8 }}>
                            <h2 className="mt-5">
                                Total: 
                                <NumberFormat
                                    displayType="text"
                                    prefix=" $"
                                    thousandSeparator={true}
                                    value={totalAmount()}
                                />
                            </h2>
                        </Col>
                    </Row>
                    <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <Col md={{ span: 4, offset: 8 }}>
                            <Link to="/purchase">
                                <Button className="mt-5 mb-4 bg-strongPink border-0 finish-button">FINALIZAR COMPRA</Button>
                            </Link>
                        </Col>
                    </Row>
                </>
            ): (
                <>
                    <h3 className="mt-5 descriptionFont fs-3">¡Su carrito está vacío!</h3>
                    <h4 className="mt-5 descriptionFont fs-4">Visitá nuestro catálogo de productos.</h4>
                    <Link to="/products">
                        <Button className="mt-5 bg-strongPink border-0 catalog-button" onClick={handleClearCart}>VER CATÁLOGO</Button>
                    </Link>
                </>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>¡Atención!</Modal.Title>
                    <FontAwesomeIcon icon={faXmark} className="xmark" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>¿Está segur@ que desea vaciar el carrito?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClearCart}>
                        SI
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        NO
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CartContainer