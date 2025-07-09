import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import "@radix-ui/themes/styles.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <Theme>
        <App />
      </Theme>
    </ThemeProvider>
  </StrictMode>,
)
