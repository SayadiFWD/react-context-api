import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../styles.css'
import Nav from './Nav'
import Home from './Home'
import Cart from './Cart'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home i />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
