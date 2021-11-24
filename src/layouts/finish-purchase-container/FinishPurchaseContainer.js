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
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const FinishPurchaseContainer = () => {

    const {items} = useContext(CartContext)
    const {totalAmount} = useContext(CartContext);
    const {clear} = useContext(CartContext);
    const [orderCreatedId, setOrderCreatedId] = useState(null);
    const [validated, setValidated] = useState(false);
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    });

    let history = useHistory();

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
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();     
        }
        setValidated(true);
        event.preventDefault();
        handleFinishPurchase();
    };

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
            <>
                <div className="container text-align-left mt-5">
                    <Button className="goback-button bg-strongPink border-0 mb-2" onClick={() => history.goBack()} ><FontAwesomeIcon icon={faAngleLeft} /> VOLVER</Button>
                </div>
                <div className="purchase-container">
                    <Row className="p-0 mt-5 row-margin align-items-center">
                        <Col className="align-self-start" md={{ offset: 1, span: 6 }}>
                            <div className="container purchase-form">
                                <h2 className="mt-3 mb-4">Ingrese sus datos de facturación:</h2>
                                <Form id="purchaseForm" validated={validated} autoComplete="off" onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Control 
                                            className="form-controls input"
                                            type="text" 
                                            placeholder="Nombre y apellido" 
                                            name="name" 
                                            value={name}
                                            required 
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Control 
                                            className="form-controls input"
                                            type="text" 
                                            placeholder="Teléfono" 
                                            name="phone" 
                                            value={phone} 
                                            required
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Control 
                                            className="form-controls input"
                                            type="email" 
                                            placeholder="Email" 
                                            name="email" 
                                            value={email} 
                                            required
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                        <Col md={{ offset: 1, span: 4 }}>
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
                        </Col>
                    </Row>
                </div>
            </>
        : (
            <SuccessContainer params={orderCreatedId} />
        )}
        
        </>
    )
}

export default FinishPurchaseContainer
