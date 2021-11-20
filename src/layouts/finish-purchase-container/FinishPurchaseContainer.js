import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import Cart from '../../components/cart/Cart'
import '../../styles.css';
import NumberFormat from 'react-number-format'
import SuccessContainer from '../success-container/SuccessContainer'

const FinishPurchaseContainer = () => {

    const {items} = useContext(CartContext)
    const {totalAmount} = useContext(CartContext);
    const {clear} = useContext(CartContext);
    const [orderCreatedId, setOrderCreatedId] = useState(null);
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setBuyer({
            ...buyer,
            [name]: value,
        });
    };

    const { name, phone, email } = buyer;

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFinishPurchase();
    }

    const handleFinishPurchase = () => {
        const newItems = items.map(({ item, quantity }) => ({
            item: {
                id: item.id,
                title: item.title,
                price: item.price,
            },
            quantity,
        }));

        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            items: newItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalAmount(),
        };

        console.log(newItems);

        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        orders
            .add(newOrder)
            .then((response) => {
                items.forEach(({ item, quantity }) => {
                    const docRef = db.collection("products").doc(item.id);
                    batch.update(docRef, { stock: item.stock - quantity });
                });
                batch.commit();
                setOrderCreatedId(response.id);
                clear();
        })
        .catch((error) => console.log(error)); 
    };

    return (
        <>
        {!orderCreatedId ?
            <div className="purchase-container">
                <div className="container purchase-form">
                    <h2 className="mt-5">Ingrese sus datos de facturación:</h2>
                    <Row className="p-0 mt-5 row-margin align-items-center">
                        <Col md={{ offset: 2, span: 8, offset: 2 }}>
                            <Form id="purchaseForm" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Nombre y apellido" name="name" value={name} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Control type="text" placeholder="Teléfono" name="phone" value={phone} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex purchase-cart">
                    <Cart items={items}/>
                    <h2 className="mt-5">
                        Total: 
                        <NumberFormat
                            displayType="text"
                            prefix=" $"
                            thousandSeparator={true}
                            value={totalAmount()}
                        />
                    </h2>
                    <Button className="mt-5 bg-strongPink border-0 purchase-button" type="submit" form="purchaseForm">
                        PAGAR
                    </Button>
                </div>
            </div>
        : (       
            <SuccessContainer params={orderCreatedId} />
        )}
        
        </>
    )
}

export default FinishPurchaseContainer
