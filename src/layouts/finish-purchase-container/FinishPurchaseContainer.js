import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { CartContext } from '../../context/CartContext'

const FinishPurchaseContainer = () => {

    const {items} = useContext(CartContext)
    const {totalAmount} = useContext(CartContext);
    const [orderCreatedId, setOrderCreatedId] = useState(null);

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
                name: "Robertino",
                phone: "123456789",
                email: "rober@rober.com",
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
        })
        .catch((error) => console.log(error)); 
    };

    return (
        <div>
            <h2 className="mt-5">Ingrese sus datos de facturación:</h2>
            <Row className="p-0 mt-5 row-margin align-items-center">
                <Col md={{ offset: 4, span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Nombre y apellido" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control type="text" placeholder="Teléfono" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Button className="mt-5 bg-strongPink border-0" onClick={handleFinishPurchase}>
                            PAGAR
                        </Button>
                    </Form>
                </Col>
            </Row>
            {orderCreatedId && (
                <Row className="p-0 mt-5 row-margin align-items-center">
                    <h3>Tu orden fue creada con el id: {orderCreatedId} </h3>
                </Row>
            )}
        </div>
    )
}

export default FinishPurchaseContainer
