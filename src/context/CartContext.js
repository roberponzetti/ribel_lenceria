import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);

    const addItem = (currentItem, quantity) => {
        if (items.some(({item}) => item.id === currentItem.item.id)){
            return;
        }
        setItems([...items, currentItem]);
    };

    // const editItem = (itemId, quantity) => {};

    const removeItem = (itemId) => {
        const currentItems = items.filter(({ item }) => item.id !== itemId);
        setItems(currentItems);
    };

    const clear = () => setItems(defaultValue);

    // const isInCart = (itemId) => {}

    return <CartContext.Provider value={{items,addItem,removeItem,clear}}>{children}</CartContext.Provider>
}