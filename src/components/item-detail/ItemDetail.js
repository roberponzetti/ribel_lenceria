import React, {useContext, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';
import { CartContext } from '../../context/CartContext'
import { Col } from 'react-bootstrap';

const ItemDetail = ({ id, title, description, price, stock, pictureUrl, quantity, setQuantity }) => {
    const location = useLocation();
    const {addItem} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);

    let history = useHistory();

    const handleAddItem = () => {
        const item = { id, title, price, pictureUrl };
        addItem({ item, quantity });
        setIsAdded(true);
    }

    const handleRemoveItem = () => {
        removeItem(id);
    }

    return (
        <div className="row m-5">
            <Card className="productCard bg-grey bc-lightBlue">
                <Card.Title>{title}</Card.Title>
                <Card.Img
                className="cardImage"
                variant="top"
                src={pictureUrl}
                height="300"
                width="200"
                />
                <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                {location.pathname === "/cart" ? null : (
                    <>
                        {isAdded === false && (
                            <>
                                <ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock} />
                                <br />
                                <Button className="nav-color bg-lightBlue border-0" onClick={handleAddItem}>
                                    Agregar al carrito
                                </Button>
                            </>
                        )}
                        {(quantity > 0 && isAdded === true) && (
                            <>
                                <br />
                                <br />
                                <Link to="/cart" className="text-danger">
                                    Ir al carrito
                                </Link>
                                <br />
                            </>
                        )}
                        <br />
                        <br />
                        <Button className="nav-color bg-lightBlue border-0" onClick={() => history.goBack()} >Volver</Button>
                    </>
                )}  
                </Card.Body>
            </Card>   
                {location.pathname === "/cart" && (
                    <>
                        <Col>
                            <h3>Cantidad agregada de {title}: {quantity}</h3>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={handleRemoveItem}>X</Button>
                        </Col>
                        <Col>
                        </Col>
                    </>
                )}          

        </div>
    )
}

export default ItemDetail
