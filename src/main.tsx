import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#4A5759',
      },
    },
  },
});

export default theme;

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
   
)
