import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#253450',

      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
   
)
