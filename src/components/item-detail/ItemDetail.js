import React, {useContext, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles.css';
import { Link, useHistory } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';

const ItemDetail = ({id, title, description, price, stock, pictureUrl, quantity, setQuantity}) => {
    // const {addItem} = useContext(CartContext);
    let history = useHistory();

    const handleProductDetailsClick = () => {
        alert(`Aquí mostraremos el detalle del producto ${id}`)
    }
    return (
        <div className="m-5">
            <Card className="productCard bg-grey bc-lightBlue">
                <Card.Title>{title}</Card.Title>
                <Card.Img
                className="cardImage"
                variant="top"
                src={pictureUrl}
                height="300"
                width="200"
                onClick={handleProductDetailsClick}
                />
                <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock} />
                <br />
                {quantity > 0 && (
                    <Link to="/cart">
                        <Button className="nav-color bg-lightBlue border-0">
                            Agregar al carrito
                        </Button>
                        <br />
                    </Link>
                )}
                <br />
                <Button className="nav-color bg-lightBlue border-0" onClick={() => history.goBack()} >Volver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
