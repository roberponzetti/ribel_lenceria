import { createContext, useState } from "react";
import { getFirestore } from '../firebase';

export const ProductContext = createContext([]);

export const ProductsProvider = ({defaultValue = [], children}) => {

    const [productsFiltered, setProductsFiltered] = useState(defaultValue)
    const [searchWord, setSearchWord] = useState('')

    const db = getFirestore();
    const itemCollection = db.collection('products');   

    const filterProducts = (search) => {
        if(search.length === 0){
            return setProductsFiltered(defaultValue);
        }
        const productsByFilter = itemCollection.where("categoryId", "==", search)
        productsByFilter.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
                return;
            }
            setSearchWord(search);
            setProductsFiltered(querySnapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            })))
        }).catch(error => console.log(error))
    }

    const clear = () => setProductsFiltered(defaultValue);

    return <ProductContext.Provider value={{productsFiltered, filterProducts, clear, searchWord}}>{children}</ProductContext.Provider>
}