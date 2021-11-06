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
        <div className="mt-2 wrapItems">
            {isLoading && 
                <div className="spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {currentProducts.map((product) => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ItemList
