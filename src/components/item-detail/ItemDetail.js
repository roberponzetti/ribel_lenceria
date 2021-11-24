import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';
import { CartContext } from '../../context/CartContext'
import { Col, Image, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCartPlus, faSquareCheck, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthContext';

const ItemDetail = ({ id, title, description, price, stock, pictureUrl, quantity, setQuantity }) => {
    const location = useLocation();
    const {addItem} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const {isInCart} = useContext(CartContext);
    const {currentUser} = useContext(AuthContext);
    const [isAdded, setIsAdded] = useState(false);

    let history = useHistory();

    const handleAddItem = () => {
        if(currentUser){
            const item = { id, title, price, pictureUrl, stock };
            addItem({ item, quantity });
            setIsAdded(true);
            isInCart({id});
        }else{
            document.location.href = '/login';
        }
    }

    const handleRemoveItem = () => {
        removeItem(id);
    }

    return (
        <>
            {(location.pathname === "/cart" || location.pathname === "/purchase") ? null : (
                <>
                    <div className="container text-align-left">
                        <Button className="goback-button bg-strongPink border-0 mb-5" onClick={() => history.goBack()} ><FontAwesomeIcon icon={faAngleLeft} /> VOLVER</Button>
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
                        </Col>
                        <Col md={{ offset: 1, span: 4, offset: 1 }}>
                            <div className="d-flex item-detail-info">
                                <h1 className="titleFont">{title}</h1>  
                                <p className="descriptionFont mt-2">{description}</p>
                                {isInCart(id) === false ? (
                                    <>
                                        <h2 className="priceFont mt-2">
                                            <NumberFormat
                                                displayType="text"
                                                prefix=" $"
                                                thousandSeparator={true}
                                                value={price}
                                            />
                                        </h2>
                                        {isAdded === false ? (
                                            <>
                                                <ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock} />
                                                <Button className="bg-strongPink border-0 mt-5 mb-5 w-25 align-self-center addto-cart-button"
                                                        onClick={handleAddItem}>
                                                    Agregar <FontAwesomeIcon icon={faCartPlus} />
                                                </Button>
                                            </>
                                        ):
                                        (
                                            <>
                                                <Link to="/cart">
                                                    <Button className="bg-strongPink border-0 mt-5 font-weight-bold goto-cart-button">
                                                        Ir al carrito <FontAwesomeIcon icon={faPersonRunning} />
                                                    </Button>
                                                </Link>
                                            </>
                                        )}
                                    </>
                                ):
                                (
                                    <>
                                        <Button className="added-button border-0 mt-5 mb-5 w-50 font-weight-bold" disabled>
                                            AGREGADO <FontAwesomeIcon icon={faSquareCheck} />
                                        </Button>
                                    </>
                                )}
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
