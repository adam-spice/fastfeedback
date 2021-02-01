import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme';

import { ChakraProvider } from '@chakra-ui/react';

import { Global, css } from '@emotion/react';
import Head from 'next/head';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (

    <ChakraProvider theme={theme} resetCSS>

      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

