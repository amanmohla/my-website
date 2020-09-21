import { AppProps } from 'next/app'
import '../public/index.css'
import theme from '../theme'
import { ThemeProvider } from 'theme-ui'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
