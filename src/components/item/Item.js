import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles.css';
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, stock, pictureUrl}) => {

    return (
        <div className="m-4">
            <Card className="productCard bg-card">
                <Card.Title className="titleFont">{title}</Card.Title>
                <Card.Img
                className="card-item p-4"
                variant="top"
                src={pictureUrl}
                height="300"
                width="240"
                />
                <Card.Body>
                <Card.Text className="descriptionFont">{description}</Card.Text>
                <Card.Text className="priceFont mt-3 mb-3">$ {price}</Card.Text>
                {stock === 0 
                ?   <h4 className="sinStock">SIN STOCK</h4>
                :   <Link to={`../item/${id}`}>
                        <Button className="detail-button bg-strongPink border-0">VER PRODUCTO</Button>
                    </Link>
                }
                <br />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item



