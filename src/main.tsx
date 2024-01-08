import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
// #253450 este color lo tenia ya
// #002034 este color me gusto
// #0f3148
// #004557 este es el de siempre
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#004557',
        color: 'white',
        fontFamily: 'Arial, sans-serif', 
      },
    },
  },
});


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);
