import { AppProps } from 'next/app';
import '../public/index.css';
import { extendTheme } from '@chakra-ui/react';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';

const extendedTheme = extendTheme(theme);

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <ChakraProvider theme={extendedTheme}>
        <Component {...pageProps} />
    </ChakraProvider>
);

export default App;
