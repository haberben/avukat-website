import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { SiteProvider } from './context/SiteContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <SiteProvider>
        <App />
      </SiteProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
