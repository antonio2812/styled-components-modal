import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx';

import { theme } from './Theme.jsx';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
  </StrictMode>,
)
