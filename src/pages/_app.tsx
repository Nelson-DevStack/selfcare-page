import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
