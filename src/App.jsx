import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Ex6 from './pages/Ex6'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Exercicio8 from './pages/Ex8'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ex6" element={<Ex6 />} />
        <Route path="/Ex8" element={<Exercicio8 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App