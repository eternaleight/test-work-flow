import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps,router }: AppProps) {
  return (
  <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
  <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
  )
}

export default MyApp
