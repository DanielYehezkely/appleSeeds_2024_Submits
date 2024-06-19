import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GiftsProvider } from './context/GiftsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftsProvider>
      <App />
    </GiftsProvider>
  </React.StrictMode>,
)
