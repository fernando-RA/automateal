import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { ContextProviders } from '../state';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <ContextProviders>
        {getLayout(<Component {...pageProps} />)}
      </ContextProviders>
      <Analytics />
    </>
  );
}

export default MyApp;
