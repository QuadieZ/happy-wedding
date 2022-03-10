import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

import '@fontsource/parisienne'
import '@fontsource/quattrocento-sans'

import { Home } from './sections/Home';
import { Cards } from './sections/Cards';
import { Global } from '@emotion/react';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: 'Parisienne',
      body: 'Quattrocento sans',
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;400;600&family=Taviraj:wght@100;400;600&display=swap');
      `}/>
      <Home />
      <Cards />
    </ChakraProvider >
  );
}

export default App;
