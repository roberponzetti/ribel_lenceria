import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';
import { CartContext } from '../../context/CartContext'
import { Col, Image, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const ItemDetail = ({ id, title, description, price, stock, pictureUrl, quantity, setQuantity }) => {
    const location = useLocation();
    const {addItem} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);

    let history = useHistory();

    const handleAddItem = () => {
        const item = { id, title, price, pictureUrl, stock };
        addItem({ item, quantity });
        setIsAdded(true);
    }

    const handleRemoveItem = () => {
        removeItem(id);
    }

    return (
        <>
            {location.pathname === "/cart" || location.pathname === "/purchase" ? null : (
                <>
                    <div className="container text-align-left">
                        <Button className="goback-button bg-strongPink border-0 mb-5" onClick={() => history.goBack()} >VOLVER</Button>
                    </div>
                    <Row className="detail-row">
                        <Col md={{ offset: 2, span: 4 }}>
                            <div className="item-detail-image">
                            <Image className="cardImage"
                                    variant="top"
                                    src={pictureUrl}
                                    height="360"
                                    width="360" />
                            </div>
                            <div className="">
                                Colores
                            </div>
                        </Col>
                        <Col md={{ offset: 1, span: 4, offset: 1 }}>
                            <div className="d-flex item-detail-info">
                                <h1 className="titleFont">{title}</h1>  
                                <p className="descriptionFont mt-2">{description}</p>
                                <h2 className="priceFont mt-2">
                                    <NumberFormat
                                        displayType="text"
                                        prefix=" $"
                                        thousandSeparator={true}
                                        value={price}
                                    />
                                </h2>
                                {isAdded === false && (
                                    <>
                                        <ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock} />
                                        <Button className="bg-strongPink border-0 mt-5 w-50 align-self-center" onClick={handleAddItem}>
                                            Agregar al carrito
                                        </Button>
                                    </>
                                )}
                                {(quantity > 0 && isAdded === true) && (
                                    <>
                                        <Link to="/cart">
                                            <Button className="bg-strongPink border-0">
                                                Ir al carrito
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                            <div className="d-flex mt-5 item-detail-info">
                                Colores disponibles:
                            </div>
                        </Col>
                    </Row>
                </>
            )}
            {location.pathname === "/cart" && (
                <Row className="p-0 row-margin bg-lightYellow align-items-center">
                    <Col>
                        <Image
                        className="cardImage"
                        variant="top"
                        src={pictureUrl}
                        height="100"
                        width="100"
                        />
                        <h4>{title}</h4>
                    </Col>
                    <Col>
                        <h3>Cantidad: {quantity}</h3>
                    </Col>
                    <Col>
                        <h3>
                            <NumberFormat
                                displayType="text"
                                prefix=" $"
                                thousandSeparator={true}
                                value={price}
                            />
                        </h3>
                    </Col>
                    <Col>
                        <Button className="deleteItem border-0" onClick={handleRemoveItem}><b>X</b></Button>
                    </Col>
                </Row>
            )} 
            {location.pathname === "/purchase" && (
                <>
                    <Row className="p-0 mt-2 row-margin justify-content-center">
                            <Image
                            className="cardImage cardImageSmall"
                            variant="top"
                            src={pictureUrl}
                            />  
                    </Row>
                    <Row>
                        <h5>
                            <NumberFormat
                                displayType="text"
                                prefix=" $"
                                thousandSeparator={true}
                                value={price}
                            />
                        </h5>
                    </Row>
                    <Row>
                        <h5>{description}</h5>
                    </Row>
                    <Row>
                    <p>Cantidad: {quantity}</p>
                    </Row>
                </>
            )}             
        </>   
    )
}

export default ItemDetail
