import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase';
import Item from '../../components/item/Item';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('products');

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
            console.log(querySnapshot);
            if (querySnapshot.size === 0) {
                console.log("No items");
                return;
            }
            setProducts(querySnapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            })))
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))

    }, [categoryId])

    return (
        <div>
            {isLoading ? (
                <div className="mt-5 spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div className="wrapItems">
                    {products.map((product) => (
                        <Item key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
