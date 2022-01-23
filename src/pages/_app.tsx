import { AppProps } from 'next/app';
import {GlobalStyle} from '../styles/globalStyle';

import { appWithTranslation } from 'next-i18next';



const App = ({ Component, pageProps }: AppProps) => (
  <> 
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(App);