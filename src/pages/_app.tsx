import Router from 'next/router'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';

import { IntlProvider } from 'react-intl';
import App from 'next/app';
import * as gtag from '../lib/gtag'



Router.events.on('routeChangeComplete', url => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter()

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={pageProps.intlMessages}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
