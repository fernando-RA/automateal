import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable.css';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../@types/page';
import { theme } from '../components/layouts/theme';
import { ContextProviders } from '../state';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <ContextProviders>
            {getLayout(<Component {...pageProps} />)}
          </ContextProviders>
        </ChakraProvider>
      </SessionProvider>
      <Analytics />
    </>
  );
}
export default trpc.withTRPC(MyApp);
