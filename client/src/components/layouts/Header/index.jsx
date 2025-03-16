import React from 'react'
import { FaSun, FaMoon, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import Search from '@components/common/Search';
import './index.css'

function Header() {

  const toggleTheme = () => {};

  return (
    <header className="header">
      <Search />
      <div className="header-icons">
        <button onClick={toggleTheme} className="theme-toggle">
          <FaMoon />
        </button>
        <button className="notification-icon">
          <FaBell />
        </button>
        <button className="profile-icon">
          <FaUserCircle />
        </button>
      </div>
    </header>
  )
}

export default Header