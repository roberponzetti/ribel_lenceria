import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../styles.css';
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, stock, pictureUrl}) => {

    const handleProductDetailsClick = () => {
        alert(`Aquí mostraremos el detalle del producto ${id}`)
    }
    return (
        <div className="m-5">
            <Card className="productCard bg-card bc-strongPink">
                <Card.Title className="titleFont">{title}</Card.Title>
                <Card.Img
                className="cardImage"
                variant="top"
                src={pictureUrl}
                height="300"
                width="200"
                onClick={handleProductDetailsClick}
                />
                <Card.Body>
                <Card.Text className="descriptionFont">{description}</Card.Text>
                <Card.Text className="priceFont mt-4">$ {price}</Card.Text>
                <br />
                <br />
                {stock === 0 
                ?   <h4 className="sinStock">SIN STOCK</h4>
                :   <Link to={`../item/${id}`}>
                        <Button className="bg-strongPink border-0">Detalle del producto</Button>
                    </Link>
                }
                <br />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item



