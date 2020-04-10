import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme/theme';
import { gtag1, gtag2 } from '../services/gtag'
import { tagManagerHead, tagManagerBody } from '../services/tagManager'

export default class MyDocument extends Document {
  render() {
    const polyfill = `https://cdn.polyfill.io/v3/polyfill.min.js?features=Intl.~locale.${this.props.locale}`

    return (
      <html lang="es">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/icon?family=Material+Icons" 
          />
          <link rel="manifest" href="/manifest.json" />
          <link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />

          {gtag2()}
          {gtag1()}


          {tagManagerHead()}
        </Head>
        <body>
          <Main />
          <script src={polyfill} />

          {tagManagerBody()}

          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />

          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const {
    req: { locale, localeDataScript },
  } = ctx

  return {
    ...initialProps,
    locale,
    localeDataScript,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
