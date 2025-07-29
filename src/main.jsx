import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // ✅ this must be present!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
