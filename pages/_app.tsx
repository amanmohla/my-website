import { AppProps } from 'next/app';
import '../public/index.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
);

export default App;
