// import '../styles/globals.css';
// import '../../src/styles/global.css';
// require('../styles/globals.css');
// import './globals.css';
// import '../styles/globals.css';
// import '../src/styles/globals.css';
import '../styles/global.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
