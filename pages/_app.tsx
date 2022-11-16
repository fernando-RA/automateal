import type { AppProps } from 'next/app';
import { ContextProviders } from '../state';
import '../styles/globals.css';
import '../styles/globals.scss';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ContextProviders>
      {getLayout(<Component {...pageProps} />)}
    </ContextProviders>
  );
}

export default MyApp;
