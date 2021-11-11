import React, { useContext } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../../components/cart/Cart'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {

    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext);
    const {totalAmount} = useContext(CartContext);
    // const [orderCreatedId, setOrderCreatedId] = useState(null);

    const handleClearCart = () => {
        clear();
    }

    // const handleFinishPurchase = () => {
    //     alert("Ir a /pagar");
    //     const  newItems = items.map(({item, quantity}) => ({
    //         item: {
    //             id: item.id,
    //             name: item.name,
    //             price: item.price,
    //         },
    //         quantity,
    //     }));

    //     const newOrder = {
    //         buyer: {
    //             name: "Robertino",
    //             phone: "123456789",
    //             email: "rober@rober.com",
    //         },
    //         items: newItems,
    //         total,
    //     };

    //     const db = getFirestore();
    //     const orders = db.collection("orders");
    //     const batch = db.batch();

    //     orders.add(newOrder).then((response) => {
    //         items.forEach(({item, quantity}) => {
    //             const docRef = db.collection("products").doc(item.id);
    //             batch.update(docRef, {stock: item.stock - quantity});
    //         });
    //         batch.commit();
    //         setOrderCreatedId(response.id);
    //     }).catch(error => console.log(error));
    // }

    return (
        <div>     
            {items.length > 0 ? (
                <>
                    <Button className="mt-3 mb-5 bg-strongPink border-0" onClick={handleClearCart}>VACIAR CARRITO</Button>
                    <Cart items={items}/>
                    <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <Col md={{ span: 4, offset: 8 }}>
                            <h2 className="mt-5">Total: $ {totalAmount()}</h2>
                        </Col>
                    </Row>
                    {/* <Row className="p-0 row-margin bg-lightYellow align-items-center">
                        <Col md={{ span: 4, offset: 8 }}>
                        <Button className="mt-5 bg-strongPink border-0" onClick={handleFinishPurchase}>FINALIZAR COMPRA</Button>
                        </Col>
                    </Row> */}
                </>
            ): (
                <>
                    <h3 className="mt-5 descriptionFont fs-3">¡Su carrito está vacío!</h3>
                    <h4 className="mt-5 descriptionFont fs-4">Visitá nuestro catálogo de productos.</h4>
                    <Link to="/products">
                        <Button className="mt-5 bg-strongPink border-0" onClick={handleClearCart}>VER CATÁLOGO</Button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default CartContainer