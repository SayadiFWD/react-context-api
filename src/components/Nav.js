import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navContainer">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/cart">
        <h3>Cart</h3>
      </Link>
    </div>
  )
}

export default Nav
