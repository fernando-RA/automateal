import { queryClient } from '@/lib/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPageWithLayout } from '../@types/page';
import { theme } from '../components/layouts/theme';
import { ContextProviders } from '../state';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <ContextProviders>
            <Head>
              <title>Inside Sales Turbo</title>
            </Head>
            {getLayout(<Component {...pageProps} />)}
          </ContextProviders>
        </ChakraProvider>
      </QueryClientProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
