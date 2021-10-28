import React, { useEffect, useState} from 'react'
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router';
import { products } from '../../data/products';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productByCategory, setProductByCategory] = useState(products);

    useEffect(() => {
        if (categoryId) {
            const findProduct = products.filter(
              (categoryProp) => categoryProp.category === categoryId 
            );
            setProductByCategory(findProduct);
        }else{
            setProductByCategory(products);
        }
    }, [categoryId]);
    
    if (!productByCategory) {
        return null;
    }

    return (
        <div>
            <ItemList products={productByCategory} />
        </div>
    );
};

export default ItemListContainer;
