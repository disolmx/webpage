import Head from 'next/head'
import Menu from './Menu'
import { formatMessage } from '../utils'

export default ({ title, children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />        
        <title>{title || formatMessage("home.title")}</title>
      </Head>

      <header>
        <Menu />
      </header>

      {children}
    </div>
  )
}