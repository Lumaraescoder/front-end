import { AppProps } from 'next/app';
import {GlobalStyle} from '../styles/globalStyle';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
  <div> 
  <QueryClientProvider client={client} >
    <GlobalStyle/>
    <Component {...pageProps} />
    </QueryClientProvider>
  </div>
  );
}

export default appWithTranslation(App);