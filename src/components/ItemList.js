import React, {useState, useEffect} from 'react'
import Item from './Item';
import { promises } from '../helpers/promises';

const ItemList = ({products}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(products){
            promises(
                products,
                setIsLoading,
                setCurrentProducts
            );
        }
    }, [products]);

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {currentProducts.map((product) => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ItemList
