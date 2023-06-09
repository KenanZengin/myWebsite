import { useEffect } from 'react';
import '@/styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      
    });
  }, []);
  return <Component {...pageProps} />
}
