import React, { createContext, ReactNode, useEffect, useState } from 'react';

type CartItem = {
  title: string | string[] | undefined,
  price: number,
}

type CartContextType = {
  itemsInCart: CartItem[],
  setItem: (item: CartItem) => void,
  check: () => void;
  removeItem: (title: string | string[] | undefined) => void,
}

type ProviderChildren = {
  children: ReactNode,
}

const initialValue = {
  itemsInCart: [],
  setItem: () => {},
  check: () => {},
  removeItem: () => {},
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

  const removeItem = (title: string | string[] | undefined) => {
    const index = itemsInCart.findIndex(element => element.title === title);
    if (index !== -1) {
      const allItems = JSON.parse(localStorage.getItem('items')!);
      const removeItem = allItems.splice(index, 1);
      setItemsInCart(allItems);
      localStorage.setItem('items', JSON.stringify(allItems));
    }
  }

  const check = () => {
    console.log('clicked');
  }

  return(
    <CartContext.Provider value={{ itemsInCart, setItem, check, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}