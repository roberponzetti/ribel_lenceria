import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../styles.css';
 
function ItemCount({ stock, initial }) {
  const [amount, setAmount] = useState(initial);
  const sub = () => {
    if (initial < amount) {
      setAmount(amount - 1);
    }
  };
  const sum = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };
 
  const addToCart = () => {
  };
 
  return (
    <div className="m-5">
      <Card className="productCard bg-grey bc-lightBlue">
        <Card.Img
          variant="top"
          src="img/art1_ribel.jpg"
          width="200"
        />
        <Card.Body>
          <Card.Title>Nombre producto</Card.Title>
          <Card.Text>Mas informacion del producto</Card.Text>
          <div className="input-group justify-content-center">
            <Button className="bg-lightBlue border-0" onClick={sub}>-</Button>
            <input
              className="quantity bc-lightBlue"
              type="text"
              min={initial}
              max={stock}
              value={amount}
            />
            <Button className="bg-lightBlue border-0" onClick={sum}>+</Button>
          </div>
          <br />
          <Button className="nav-color bg-lightBlue border-0" onClick={addToCart}>
            Agregar al carrito
          </Button>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
}
 
export default ItemCount;