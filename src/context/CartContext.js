import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);

    const addItem = (currentItem) => {
        if (items.some(({ item }) => item.id === currentItem.item.id)){
            return;
        }
        setItems([...items, currentItem]);
    };

    const removeItem = (itemId) => {
        const currentItems = items.filter(({ item }) => item.id !== itemId);
        setItems(currentItems);
    };

    const clear = () => setItems(defaultValue);

    const totalAmount = () => items.reduce((sum,item) => sum + item.item.price * item.quantity,0 );

    const itemsInCart = () => items.reduce((sum,item) => sum + item.quantity,0 );

    const isInCart = (itemId) => {
        return items.some((item) => item.item.id === itemId);
    };

    return <CartContext.Provider value={{items,addItem,removeItem,clear,totalAmount,itemsInCart, isInCart}}>{children}</CartContext.Provider>
}