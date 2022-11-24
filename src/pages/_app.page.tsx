import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../components/layouts/theme';
import { ContextProviders } from '../state';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <ChakraProvider theme={theme}>
        <ContextProviders>
          <Head>
            <title>Inside Sales Turbo</title>
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </ContextProviders>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
