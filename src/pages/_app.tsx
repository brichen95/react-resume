import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {init} from '@socialgouv/matomo-next';
import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';

const MATOMO_URL = 'https://matomo.brianchen.me';
const MATOMO_SITE_ID = '1';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  useEffect(() => {
    init({url: MATOMO_URL, siteId: MATOMO_SITE_ID, onInitialization: () => console.log('init')});
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
