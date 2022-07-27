import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { ProductsType } from '../types/ProductsType';

type CartContextType = {
  itemsInCart: ProductsType[];
  setItem: (item: ProductsType) => void;
  check: () => void;
  removeItem: (title: string | number) => void;
};

type ProviderChildren = {
  children: ReactNode;
};

const initialValue = {
  itemsInCart: [],
  setItem: () => {},
  check: () => {},
  removeItem: () => {},
};

export const CartContext = createContext<CartContextType>(initialValue);

export const CartProvider = ({ children }: ProviderChildren) => {
  const [itemsInCart, setItemsInCart] = useState<ProductsType[]>(
    initialValue.itemsInCart
  );
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItemsInCart(JSON.parse(items));
    }
    console.log('rodou');
  }, [counter]);

  const setItem = (item: ProductsType) => {
    setCounter(counter + 1);
    const items = localStorage.getItem('items');

    if (!items) {
      const newArray = [...itemsInCart, item];
      setItemsInCart(newArray);
      localStorage.setItem('items', JSON.stringify(newArray));
    } else {
      const storedItems = JSON.parse(items);

      const index = storedItems.findIndex((obj: ProductsType) => {
        return obj.title === item.title;
      });

      if (index === -1) {
        const newArray = [...storedItems, item];
        setItemsInCart(newArray);
        localStorage.setItem('items', JSON.stringify(newArray));
      } else {
        return;
      }
    }
  };

  const removeItem = (id: string | number) => {
    const index = itemsInCart.findIndex((element) => element.id === id);
    if (index !== -1) {
      const allItems = JSON.parse(localStorage.getItem('items')!);
      const removeItem = allItems.splice(index, 1);
      setItemsInCart(allItems);
      localStorage.setItem('items', JSON.stringify(allItems));
    }
  };

  const check = () => {
    console.log('clicked');
  };

  return (
    <CartContext.Provider value={{ itemsInCart, setItem, check, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
