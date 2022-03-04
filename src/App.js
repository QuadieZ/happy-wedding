import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

import '@fontsource/parisienne'
import '@fontsource/quattrocento-sans'

import { Home } from './sections/Home';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: 'Parisienne',
      body: 'Quattrocento sans',
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
