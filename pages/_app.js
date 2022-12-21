import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    Aos.init();
  },[])
  return <Component {...pageProps} />
}

export default MyApp
