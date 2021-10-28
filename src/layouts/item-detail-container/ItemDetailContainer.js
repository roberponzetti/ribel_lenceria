import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/item-detail/ItemDetail'
import { promise } from '../../helpers/promise'
import { products } from '../../data/products'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {   
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(item){
            promise(
                products,
                itemId,
                setIsLoading,
                setItem
            );
        }
    }, [itemId]);

    return (
        <div className="mt-2">
            {isLoading && 
                <div className="spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }{!isLoading &&
                <ItemDetail {...item} />     
            }
        </div>
    );
}

export default ItemDetailContainer
