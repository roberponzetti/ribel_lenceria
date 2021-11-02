import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './../styles.css';
 
function ItemCount({ stock, initial, imgSource }) {

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
 
  const onAdd = () => {
    if (amount == 1){
      alert(`Agregaste ${amount} unidad al carrito`)
    }else{
      alert(`Agregaste ${amount} unidades al carrito`)
    }
  };
 
  return (
    <div className="m-5">
      <Card className="productCard bg-grey bc-lightBlue">
        <Card.Img
        className="cardImage"
          variant="top"
          src={imgSource}
          height="300"
          width="200"
        />
        <Card.Body>
          <Card.Title>Nombre producto</Card.Title>
          <Card.Text>Mas informacion del producto</Card.Text>
          <div className="input-group justify-content-center d-block">
            <Button className="bg-lightBlue border-0 align-bottom" onClick={sub}>-</Button>
            <input
              className="quantity bc-lightBlue"
              type="text"
              min={initial}
              max={stock}
              value={amount}
              readOnly
            />
            <Button className="bg-lightBlue border-0 align-bottom" onClick={sum}>+</Button>
          </div>
          <br />
          {stock === 0 
          ? <h4 class="text-danger">SIN STOCK</h4>
          : <Button className="nav-color bg-lightBlue border-0" onClick={onAdd}>
              Agregar al carrito
            </Button>
          }
          <br />
        </Card.Body>
      </Card>
    </div>
  );
}
 
export default ItemCount;