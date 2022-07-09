import React, { createContext, ReactNode, useState } from 'react';

type CartItem = {
  title: string,
  price: number,
}

type CartContextType = {
  itemsInCart: CartItem[],
  setItem: (item: CartItem) => void,
  check: () => void;
}

type ProviderChildren = {
  children: ReactNode,
}

const initialValue = {
  // itemsInCart: [{title: '', price: 0}],
  itemsInCart: [],
  setItem: () => {},
  check: () => {},
}

export const CartContext = createContext<CartContextType>(initialValue);

export const CartProvider = ({ children }: ProviderChildren) => {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>(initialValue.itemsInCart);

  const setItem = (item: CartItem) => {;
    const items = localStorage.getItem('items');

    if(!items){
      const newArray = [...itemsInCart, item];
      setItemsInCart(newArray);
      localStorage.setItem('items', JSON.stringify(newArray));
    } else {
      const storedItems = JSON.parse(items);
      const newArray = [...storedItems, item];
      setItemsInCart(newArray);
      localStorage.setItem('items', JSON.stringify(newArray));
    }
  }

  const check = () => {
    console.log('clicked');
  }

  return(
    <CartContext.Provider value={{ itemsInCart, setItem, check }}>
      {children}
    </CartContext.Provider>
  )
}