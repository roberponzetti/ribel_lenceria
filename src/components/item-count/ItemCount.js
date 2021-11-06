import React from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({quantity, setQuantity, stock}) => {

    const handleSub = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }
    const handleSum = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="input-group justify-content-center d-block">
            <Button className="bg-strongPink border-0 align-bottom shadow-none" onClick={handleSub}>-</Button>
            <input
              className="quantity bc-strongPink priceFont"
              type="text"
              min={1}
              max={stock}
              value={quantity}
              readOnly
            />
            <Button className="bg-strongPink border-0 align-bottom shadow-none" onClick={handleSum}>+</Button>
        </div>
    )
}

export default ItemCount
