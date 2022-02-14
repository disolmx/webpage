import { useIntl } from 'react-intl'
import Head from 'next/head'
import MenuTop from './MenuTop'
import Footer from './Footer'

export default ({ title, children }) => {
  const intl = useIntl()

  return (
    <div>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />        
        <title>{title || intl.formatMessage({ defaultMessage: "Página oficial del Día del Software Libre (DiSoL)", description:"Layout title" })}</title>
      </Head>

      <header>
        <MenuTop />
      </header>

      {children}

      <Footer />
    </div>
  )
}
