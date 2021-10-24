import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/item-detail/ItemDetail'
import { promise } from '../../helpers/promise'
import { product } from '../../data/product'


const ItemDetailContainer = () => {   
    const [currentProduct, setCurrentProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(product){
            promise(
                product,
                setIsLoading,
                setCurrentProduct
            );
        }
    }, [product]);

    return (
        <div className="mt-2">
            {isLoading && 
                <div className="spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }{!isLoading &&
                <ItemDetail {...currentProduct} />     
            }
        </div>
    );
}

export default ItemDetailContainer
