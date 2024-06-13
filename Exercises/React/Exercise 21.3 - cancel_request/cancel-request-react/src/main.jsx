import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './styles/reset.css'
import './styles/style.css'
import { FetchApiProvider } from './context/FetchApiContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchApiProvider>
      <App />
    </FetchApiProvider>
  </React.StrictMode>,
)
