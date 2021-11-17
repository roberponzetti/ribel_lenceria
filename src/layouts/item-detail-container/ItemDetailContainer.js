import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/item-detail/ItemDetail'
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase'

const ItemDetailContainer = () => {   
    const { itemId } = useParams();

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if(itemId){
            const db = getFirestore();
            const itemCollection = db.collection('products')
            const currentItem = itemCollection.doc(itemId)
            
            currentItem.get().then((document) => {
                if(!document.exists){
                    console.log("No item");
                    return;
                }
                setItem({
                    id: document.id,
                    ...document.data(),
                })
            }).catch(error => console.log(error)).finally(() => setIsLoading(false))
        }
    }, [itemId])

    if(!item){
        return null;
    }

    return (
        <div className="mt-2 wrapItems">
            {isLoading && 
                <div className="spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }{!isLoading &&
                <ItemDetail {...item} quantity={quantity} setQuantity={setQuantity} />     
            }
        </div>
    );
}

export default ItemDetailContainer
