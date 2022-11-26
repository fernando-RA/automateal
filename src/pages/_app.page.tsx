import { ChakraProvider } from '@chakra-ui/react';
import { type Session } from "next-auth";
import '@fontsource/inter/variable.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps, AppType } from 'next/app';
import { theme } from '../components/layouts/theme';
import { ContextProviders } from '../state';
import { NextPageWithLayout } from '../@types/page';import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
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
