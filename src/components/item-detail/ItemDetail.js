import React, {useContext, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';
import { CartContext } from '../../context/CartContext'
import { Col, Image, Row } from 'react-bootstrap';

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
        <div>
            {location.pathname === "/cart" ? null : (
                <Card className="productCard bg-card bc-strongPink">
                    <Card.Title className="titleFont">{title}</Card.Title>
                    <Card.Img
                    className="cardImage"
                    variant="top"
                    src={pictureUrl}
                    height="300"
                    width="200"
                    />
                    <Card.Body>
                    <Card.Text className="descriptionFont">{description}</Card.Text>
                    <Card.Text className="priceFont mt-5">$ {price}</Card.Text>
                    {isAdded === false && (
                        <>
                            <ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock} />
                            <br />
                            <Button className="bg-strongPink border-0" onClick={handleAddItem}>
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
                    <Button className="bg-strongPink border-0" onClick={() => history.goBack()} >Volver</Button>
                    </Card.Body>
                </Card>  
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
                        <h3>{price}</h3>
                    </Col>
                    <Col>
                        <Button className="deleteItem border-0" onClick={handleRemoveItem}><b>X</b></Button>
                    </Col>
                </Row>
            )}          
        </div>   
    )
}

export default ItemDetail
