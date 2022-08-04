import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig, createClient } from 'wagmi';
import {
  ConnectKitProvider,
  getDefaultClient,
} from 'connectkit';

const alchemyId = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC';

const client = createClient(
  getDefaultClient({
    appName: 'fade',
    alchemyId,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme='minimal'>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
