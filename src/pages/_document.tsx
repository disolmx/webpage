import React from "react"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme/theme';
import { gtag1, gtag2 } from '../services/gtag'
import { tagManagerHead, tagManagerBody } from '../services/tagManager'

interface Props {
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const {req} = ctx;
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
        <Head>
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
          {tagManagerBody()}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
