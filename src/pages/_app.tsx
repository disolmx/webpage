import * as React from 'react';
import Router from 'next/router'

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';

import {IntlProvider} from 'react-intl';
import {polyfill} from '../polyfills';
import App from 'next/app';
import * as gtag from '../lib/gtag'



Router.events.on('routeChangeComplete', url => gtag.pageview(url))

function MyApp({Component, pageProps, locale, messages}) {
  return (
    <IntlProvider locale={locale} defaultLocale="es" messages={messages}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

function getMessages(locales: string | string[] = ['es']) {
  if (!Array.isArray(locales)) {
    locales = [locales];
  }
  let langBundle;
  let locale;
  for (let i = 0; i < locales.length && !locale; i++) {
    locale = locales[i];
    switch (locale) {
      case 'es':
        langBundle = import('../compiled-lang/es.json');
        break;
      case 'en':
        langBundle = import('../compiled-lang/en.json');
        break;
      default:
        break;
    }
  }
  if (!langBundle) {
  }
  return [locale, langBundle];
}

const getInitialProps: typeof App.getInitialProps = async appContext => {
  const {
    ctx: {req},
  } = appContext;
  const requestedLocales: string | string[] =
    (req as any)?.locale ||
    (typeof navigator !== 'undefined' && navigator.languages) ||
    // IE11
    (typeof navigator !== 'undefined' && (navigator as any).userLanguage) ||
    (typeof window !== 'undefined' && (window as any).LOCALE) ||
    'es';

  const [supportedLocale, messagePromise] = getMessages(requestedLocales);

  const [, messages, appProps] = await Promise.all([
    polyfill(supportedLocale),
    messagePromise,
    App.getInitialProps(appContext),
  ]);

  return {
    ...(appProps as any),
    locale: supportedLocale,
    messages: messages.default,
  };
};

MyApp.getInitialProps = getInitialProps;

export default MyApp;
