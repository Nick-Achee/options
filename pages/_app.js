import '../styles/global.css';
import { useEffect } from 'react';
import TagManager from "react-gtm-module"


const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TMJ862D' })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp