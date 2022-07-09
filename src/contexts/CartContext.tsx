import React, { createContext, ReactNode, useEffect, useState } from 'react';

type CartItem = {
  title: string | string[] | undefined,
  price: string | number,
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
  itemsInCart: [],
  setItem: () => {},
  check: () => {},
}

export const CartContext = createContext<CartContextType>(initialValue);

export const CartProvider = ({ children }: ProviderChildren) => {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>(initialValue.itemsInCart);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if(items) {
      setItemsInCart(JSON.parse(items));
    }
    console.log('rodou')
  }, [counter]);

  const setItem = (item: CartItem) => {;
    setCounter(counter + 1);
    const items = localStorage.getItem('items');

    if(!items){
      const newArray = [...itemsInCart, item];
      setItemsInCart(newArray);
      localStorage.setItem('items', JSON.stringify(newArray));
    } else {
      const storedItems = JSON.parse(items);

      const index = storedItems.findIndex((obj: CartItem) => {
        return obj.title === item.title;
      });

      if(index === -1) {
        const newArray = [...storedItems, item];
        setItemsInCart(newArray);
        localStorage.setItem('items', JSON.stringify(newArray));
      } else {
        return;
      }

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