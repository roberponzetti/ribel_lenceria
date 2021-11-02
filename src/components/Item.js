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
                <br />
                <br />
                {stock === 0 
                ?   <h4 className="text-danger">SIN STOCK</h4>
                :   <Link to={`../item/${id}`}>
                        <Button className="nav-color bg-lightBlue border-0">Detalle del producto</Button>
                    </Link>
                }
                <br />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item



