import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles.css';

const ItemDetail = ({...currentProduct}) => {
    const [amount, setAmount] = useState(currentProduct.initial);

    const sub = () => {
        if (currentProduct.initial < amount) {
        setAmount(amount - 1);
        }
    };
    const sum = () => {
        if (amount < currentProduct.stock) {
        setAmount(amount + 1);
        }
    };
    
    const onAdd = () => {
        if (amount == 1){
        alert(`Agregaste ${amount} unidad al carrito`)
        }else{
        alert(`Agregaste ${amount} unidades al carrito`)
        }
    };

    const handleProductDetailsClick = () => {
        alert(`Aquí mostraremos el detalle del producto ${currentProduct.id}`)
    }
    return (
        <div className="m-5">
            <Card className="productCard bg-grey bc-lightBlue">
                <Card.Title>{currentProduct.title}</Card.Title>
                <Card.Img
                className="cardImage"
                variant="top"
                src={currentProduct.pictureUrl}
                height="300"
                width="200"
                onClick={handleProductDetailsClick}
                />
                <Card.Body>
                <Card.Text>{currentProduct.description}</Card.Text>
                <Card.Text>{currentProduct.price}</Card.Text>
                <div className="input-group justify-content-center d-block">
                    <Button className="bg-lightBlue border-0 align-bottom" onClick={sub}>-</Button>
                    <input
                    className="quantity bc-lightBlue"
                    type="text"
                    min={currentProduct.initial}
                    max={currentProduct.stock}
                    value={amount}
                    readOnly
                    />
                    <Button className="bg-lightBlue border-0 align-bottom" onClick={sum}>+</Button>
                </div>
                <br />
                {currentProduct.stock === 0 
                ? <h4 className="text-danger">SIN STOCK</h4>
                : <Button className="nav-color bg-lightBlue border-0" onClick={onAdd}>
                    Agregar al carrito
                    </Button>
                }
                <br />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
