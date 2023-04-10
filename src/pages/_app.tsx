import type { AppProps } from 'next/app';

import { Global } from '@emotion/react';
import GlobalStyle from '@/styles/global-styles';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
