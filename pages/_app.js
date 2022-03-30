import '../styles/global.css';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';





const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NVF2VGC' })
  }, [])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp