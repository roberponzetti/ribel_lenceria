import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);

    const addItem = (currentItem) => {
        if (items.some(({ item }) => item.id === currentItem.item.id)){
            console.log("ya existe");
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

    return <CartContext.Provider value={{items,addItem,removeItem,clear,totalAmount,itemsInCart}}>{children}</CartContext.Provider>
}