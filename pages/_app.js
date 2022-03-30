import '../styles/global.css';
import { useEffect } from 'react';
import TagManager from "react-gtm-module"


const tagManagerArgs = {
  id: "GTM-TMJ862D",
}
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp