import React from 'react'
import ReactDOM from 'react-dom/client'
import Events from './components/Events'
import Navbar from './components/Navbar'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Events />
  </React.StrictMode>
)
