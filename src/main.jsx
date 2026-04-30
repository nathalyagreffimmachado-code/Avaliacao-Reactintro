import { useState } from 'react'
import {route,routes} from 'route,routes./react-router-dom'
import header from './components/Header'
import footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import Ex8 from './pages/Ex8'
import Ex6 from './pages/Ex6'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
