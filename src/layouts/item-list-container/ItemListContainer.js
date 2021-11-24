import React, { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getFirebase, getFirestore } from '../../firebase';
import Item from '../../components/item/Item';
import { ProductContext } from '../../context/ProductContext';
import { Button, Col, Row } from 'react-bootstrap';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const {productsFiltered} = useContext(ProductContext);
    const {searchWord} = useContext(ProductContext);
    const {clear} = useContext(ProductContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isFiltering, setIsFiltering] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection('products');

        if (productsFiltered.length > 0){
            setIsFiltering(true);
        }

        if(!categoryId){
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    return;
                }
                setProducts(querySnapshot.docs.map((document) => ({
                    id: document.id,
                    ...document.data(),
                })))
            }).catch(error => console.log(error)).finally(() => setIsLoading(false));
            return
        }

        const productsByCategory = itemCollection.where("categoryId", "==", categoryId)

        productsByCategory.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
                return;
            }
            setProducts(querySnapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            })))
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))

    })

    const handleClearFilter = () => {
        clear();
        setIsFiltering(false);
    } 

    const handleSignOut = () => {
        getFirebase().auth().signOut();
    }

    return (
        <div className="mt-5">
            {isLoading ? (
                <div className="mt-5 spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                isFiltering ? (
                    <>
                        <Row className="m-0">
                        <Col className="filter-col" md={{ span: 2 }}>
                        <div>
                            <h4 className="titleFont">FILTROS</h4>
                            <div className="filter-div">
                                <p className="text-secondary">{searchWord}</p>
                                <Button className="delete-filter border-0 p-0" onClick={handleClearFilter}>
                                    x
                                </Button>
                            </div>
                        </div>
                        </Col>
                        <Col className="align-self-start" md={{ span: 10 }}>
                        <div className="wrapItems">
                            {productsFiltered.map((product) => (
                                <Item key={product.id} {...product} />
                            ))}
                        </div>
                        </Col>
                        </Row>
                    </>
                ) : (
                    <div className="wrapItems">
                        {products.map((product) => (
                            <Item key={product.id} {...product} />
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default ItemListContainer;
